#!/usr/bin/env python3
"""Batch quality-check processor for gutes-gewissen.com shop pages."""
import re
import os

BASE = '/Users/tomi/Projects/gutes-gewissen.com'


def read_file(path):
    with open(path) as f:
        return f.read()


def write_file(path, content):
    with open(path, 'w') as f:
        f.write(content)


def get_frontmatter_end(content):
    """Return index where frontmatter ends (after closing ---)."""
    if not content.startswith('---'):
        return None
    end = content.find('\n---\n', 3)
    if end == -1:
        return None
    return end + 5  # after '\n---\n'


def set_targeturl(content, new_url):
    return re.sub(r'^targetUrl:.*$', f'targetUrl: {new_url}', content, flags=re.MULTILINE)


def add_or_update_button_texts(content, text):
    """Add or update ctaButtonText, sidebarButtonText, contentButtonText."""
    quoted = f'"{text}"'
    has_cta = bool(re.search(r'^ctaButtonText:', content, re.MULTILINE))
    has_sidebar = bool(re.search(r'^sidebarButtonText:', content, re.MULTILINE))
    has_content_btn = bool(re.search(r'^contentButtonText:', content, re.MULTILINE))

    if has_cta:
        content = re.sub(r'^ctaButtonText:.*$', f'ctaButtonText: {quoted}', content, flags=re.MULTILINE)
    if has_sidebar:
        content = re.sub(r'^sidebarButtonText:.*$', f'sidebarButtonText: {quoted}', content, flags=re.MULTILINE)
    if has_content_btn:
        content = re.sub(r'^contentButtonText:.*$', f'contentButtonText: {quoted}', content, flags=re.MULTILINE)

    missing = []
    if not has_cta:
        missing.append(f'ctaButtonText: {quoted}')
    if not has_sidebar:
        missing.append(f'sidebarButtonText: {quoted}')
    if not has_content_btn:
        missing.append(f'contentButtonText: {quoted}')

    if missing:
        lines_to_add = '\n'.join(missing)
        content = re.sub(
            r'^(targetUrl:.*)$',
            rf'\1\n{lines_to_add}',
            content,
            flags=re.MULTILINE
        )
    return content


def remove_text_links_from_body(content, keep_urls=None):
    """Remove markdown links from body (not frontmatter), keeping link text."""
    fm_end = get_frontmatter_end(content)
    if fm_end is None:
        return content
    frontmatter = content[:fm_end]
    body = content[fm_end:]

    def replacer(m):
        text = m.group(1)
        url = m.group(2)
        if keep_urls:
            for keep in keep_urls:
                if keep in url:
                    return m.group(0)
        return text

    body = re.sub(r'\[([^\]]+)\]\(([^)]+)\)\{:target="_blank"\}', replacer, body)
    body = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', replacer, body)
    return frontmatter + body


def remove_affiliateelements_block(content):
    """Remove affiliateElements YAML block from frontmatter using bracket counting."""
    lines = content.split('\n')
    result = []
    in_block = False
    depth = 0

    for line in lines:
        if not in_block and re.match(r'^affiliateElements:', line):
            in_block = True
            depth = line.count('[') - line.count(']')
            if depth <= 0:
                in_block = False
            continue
        if in_block:
            depth += line.count('[') - line.count(']')
            if depth <= 0:
                in_block = False
            continue
        result.append(line)

    return '\n'.join(result)


def process_file(path, new_target_url, button_text, remove_links=False,
                 keep_urls=None, remove_affiliates=False):
    fullpath = os.path.join(BASE, path)
    content = read_file(fullpath)
    content = set_targeturl(content, new_target_url)
    if button_text:
        content = add_or_update_button_texts(content, button_text)
    if remove_affiliates:
        content = remove_affiliateelements_block(content)
    if remove_links:
        content = remove_text_links_from_body(content, keep_urls=keep_urls)
    write_file(fullpath, content)
    print(f"✓ {path}")


# =============================================================================
# 1. beyerdynamic — special: new OTTO URL and custom button text
# =============================================================================
process_file(
    'computer-und-technik/_posts/2020-07-20-beyerdynamic.md',
    new_target_url='https://www.awin1.com/cread.php?awinmid=14336&awinaffid=731132&ued=https%3A%2F%2Fwww.otto.de%2Fsuche%2Fbeyerdynamic%2F',
    button_text='Produkte von beyerdynamic auf OTTO.de anschauen',
)

# =============================================================================
# 2. detto-fatto — Partnerprogramm ended, remove links, remove otto.de affiliate
# =============================================================================
process_file(
    'mode-und-kleidung/_posts/2023-05-04-detto-fatto.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Mode & Kleidung',
    remove_links=True,
    remove_affiliates=True,
)

# =============================================================================
# 3. greenpicks — Partnerprogramm ended, remove greenpicks.de links, keep naturstrom
# =============================================================================
process_file(
    'secondhand-und-upcycling/_posts/2020-12-31-greenpicks.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Secondhand & Upcycling',
    remove_links=True,
    keep_urls=['gutes-gewissen.com'],
)

# =============================================================================
# 4. sonnentor
# =============================================================================
process_file(
    'ernaehrung-und-lebensmittel/_posts/2024-02-26-sonnentor.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Ernährung & Lebensmittel',
)

# =============================================================================
# 5. amiva
# =============================================================================
process_file(
    'computer-und-technik/_posts/2024-03-07-amiva.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Computer & Technik',
)

# =============================================================================
# 6. heldengruen
# =============================================================================
process_file(
    'drogerie-und-kosmetik/_posts/2024-02-25-heldengruen.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Drogerie & Kosmetik',
)

# =============================================================================
# 7. micaraa-naturkosmetik
# =============================================================================
process_file(
    'drogerie-und-kosmetik/_posts/2022-01-17-micaraa-naturkosmetik.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Drogerie & Kosmetik',
)

# =============================================================================
# 8. hydrophil
# =============================================================================
process_file(
    'drogerie-und-kosmetik/_posts/2020-12-28-hydrophil.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Drogerie & Kosmetik',
)

# =============================================================================
# 9. foamie
# =============================================================================
process_file(
    'drogerie-und-kosmetik/_posts/2020-07-01-foamie.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Drogerie & Kosmetik',
)

# =============================================================================
# 10. kaufnekuh
# =============================================================================
process_file(
    'ernaehrung-und-lebensmittel/_posts/2024-04-01-kaufnekuh.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Ernährung & Lebensmittel',
)

# =============================================================================
# 11. greenforce
# =============================================================================
process_file(
    'ernaehrung-und-lebensmittel/_posts/2023-09-28-greenforce.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Ernährung & Lebensmittel',
)

# =============================================================================
# 12. birkengold
# =============================================================================
process_file(
    'ernaehrung-und-lebensmittel/_posts/2023-05-03-birkengold.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Ernährung & Lebensmittel',
)

# =============================================================================
# 13. hierunddirekt-de — + text links
# =============================================================================
process_file(
    'ernaehrung-und-lebensmittel/_posts/2023-03-24-hierunddirekt-de.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Ernährung & Lebensmittel',
    remove_links=True,
)

# =============================================================================
# 14. the-nu-company — + text links
# =============================================================================
process_file(
    'ernaehrung-und-lebensmittel/_posts/2022-10-21-the-nu-company.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Ernährung & Lebensmittel',
    remove_links=True,
)

# =============================================================================
# 15. unmilk
# =============================================================================
process_file(
    'ernaehrung-und-lebensmittel/_posts/2022-06-04-unmilk.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Ernährung & Lebensmittel',
)

# =============================================================================
# 16. gourmesso
# =============================================================================
process_file(
    'ernaehrung-und-lebensmittel/_posts/2020-07-22-gourmesso.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Ernährung & Lebensmittel',
)

# =============================================================================
# 17. hoffmann-armaturen-shop
# =============================================================================
process_file(
    'haus-und-garten/_posts/2023-11-17-hoffmann-armaturen-shop.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Haus & Garten',
)

# =============================================================================
# 18. woodsandwaves
# =============================================================================
process_file(
    'haus-und-garten/_posts/2023-07-26-woodsandwaves.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Haus & Garten',
)

# =============================================================================
# 19. rollholz
# =============================================================================
process_file(
    'haus-und-garten/_posts/2022-10-21-rollholz.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Haus & Garten',
)

# =============================================================================
# 20. moonboon — + text links
# =============================================================================
process_file(
    'haus-und-garten/_posts/2022-06-03-moonboon.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Haus & Garten',
    remove_links=True,
)

# =============================================================================
# 21. 4betterdays — + text links
# =============================================================================
process_file(
    'haus-und-garten/_posts/2021-12-22-4betterdays.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Haus & Garten',
    remove_links=True,
)

# =============================================================================
# 22. kahla-porzellan
# =============================================================================
process_file(
    'haus-und-garten/_posts/2020-12-30-kahla-porzellan.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Haus & Garten',
)

# =============================================================================
# 23. klean-kanteen
# =============================================================================
process_file(
    'haus-und-garten/_posts/2020-12-29-klean-kanteen.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Haus & Garten',
)

# =============================================================================
# 24. chakrana — text links only (targetUrl/buttons already correct, no harm re-setting)
# =============================================================================
process_file(
    'mode-und-kleidung/_posts/2023-01-22-chakrana.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Mode & Kleidung',
    remove_links=True,
)

# =============================================================================
# 25. simon-pike
# =============================================================================
process_file(
    'mode-und-kleidung/_posts/2021-12-23-simon-pike.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Mode & Kleidung',
)

# =============================================================================
# 26. elkline
# =============================================================================
process_file(
    'mode-und-kleidung/_posts/2021-12-21-elkline.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Mode & Kleidung',
)

# =============================================================================
# 27. thokkthokk
# =============================================================================
process_file(
    'mode-und-kleidung/_posts/2020-07-27-thokkthokk.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Mode & Kleidung',
)

# =============================================================================
# 28. living-crafts
# =============================================================================
process_file(
    'mode-und-kleidung/_posts/2020-07-15-living-crafts.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Mode & Kleidung',
)

# =============================================================================
# 29. two46 — + text links
# =============================================================================
process_file(
    'spielzeug-und-hobby/_posts/2023-09-20-two46.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Spielzeug & Hobby',
    remove_links=True,
)

# =============================================================================
# 30. school-mood — + text links
# =============================================================================
process_file(
    'spielzeug-und-hobby/_posts/2022-06-04-school-mood.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Spielzeug & Hobby',
    remove_links=True,
)

# =============================================================================
# 31. mera
# =============================================================================
process_file(
    'tierfutter-und-tierbedarf/_posts/2023-08-04-mera.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Tierfutter & Tierbedarf',
)

# =============================================================================
# 32. futtershop
# =============================================================================
process_file(
    'tierfutter-und-tierbedarf/_posts/2021-12-21-futtershop.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Tierfutter & Tierbedarf',
)

# =============================================================================
# 33. naftie
# =============================================================================
process_file(
    'tierfutter-und-tierbedarf/_posts/2021-01-04-naftie.md',
    new_target_url='../',
    button_text='Ähnliche Produkte in der Rubrik Tierfutter & Tierbedarf',
)

print("\nAll done!")
