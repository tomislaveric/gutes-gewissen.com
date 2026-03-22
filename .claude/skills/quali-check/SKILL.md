---
name: quali-check
description: Quality check and fix shop pages when partner programs end
---

# quali-check SKILL

## Trigger

```
#quali <URL>
<instructions>
```

### Example

```
#quali https://gutes-gewissen.com/haus-und-garten/atisan/
partnerprogramm beendet, button-link auf kategorie, text-link entfernen
```

---

## Steps

### 1. Find the file

Extract the shop name from the URL (e.g. `atisan` from `.../haus-und-garten/atisan/`).
Search for the corresponding `.md` file in the `_posts` directories.

Example: `haus-und-garten/_posts/2021-12-22-atisan.md`

### 2. `button-link auf kategorie` — Change targetUrl

In the frontmatter, change `targetUrl` to `../` so the button links to the category page instead of the (now dead) partner link.

**Before:**
```yaml
targetUrl: https://www.awin1.com/cread.php?awinmid=21013&awinaffid=731132
```

**After:**
```yaml
targetUrl: ../
```

### 3. Add button text properties

Directly under `targetUrl`, add (or update) these three properties:

```yaml
ctaButtonText: "Ähnliche Produkte in der Rubrik <RUBRIC>"
sidebarButtonText: "Ähnliche Produkte in der Rubrik <RUBRIC>"
contentButtonText: "Ähnliche Produkte in der Rubrik <RUBRIC>"
```

Replace `<RUBRIC>` with the value of the `rubric` property from the same file's frontmatter.

**Example:** If `rubric: Haus & Garten`, then:
```yaml
targetUrl: ../
ctaButtonText: "Ähnliche Produkte in der Rubrik Haus & Garten"
sidebarButtonText: "Ähnliche Produkte in der Rubrik Haus & Garten"
contentButtonText: "Ähnliche Produkte in der Rubrik Haus & Garten"
```

### 4. `text-link entfernen` — Remove links from content

Remove all markdown links in the content body but **keep the link text**.

**Before:**
```markdown
Die atisan Produkte werden aus [Materialien](https://www.atisan.de/pages/unsere-materialien){:target="_blank"} gefertigt
```

**After:**
```markdown
Die atisan Produkte werden aus Materialien gefertigt
```

The pattern to match and replace is:
- `[Link Text](URL){:target="_blank"}` → `Link Text`
- `[Link Text](URL)` → `Link Text`

---

## Complete Before/After Example

### Before (atisan.md frontmatter excerpt):

```yaml
targetUrl: https://www.awin1.com/cread.php?awinmid=21013&awinaffid=731132
image: /assets/images/atisan.png
```

### After:

```yaml
targetUrl: ../
ctaButtonText: "Ähnliche Produkte in der Rubrik Haus & Garten"
sidebarButtonText: "Ähnliche Produkte in der Rubrik Haus & Garten"
contentButtonText: "Ähnliche Produkte in der Rubrik Haus & Garten"
image: /assets/images/atisan.png
```

And all `[text](url){:target="_blank"}` links in the content body are replaced with just `text`.

---

## Post-Processing

### 5. Jekyll build

After all file edits are complete, run a Jekyll build to verify the site compiles without errors:

```bash
bundle exec jekyll build
```

If the build fails, investigate and fix the issue before finishing.

### 6. Commit and push

Commit the changes with the message `quali check for {title}`, where `{title}` is the `title` value from the file's frontmatter.

```bash
git add -A && git commit -m "quali check for {title}"
```

Then deploy via git-ftp and push to the remote:

```bash
git-ftp push && git push
```

**If `git push` fails** (e.g. SSH authentication error), retry with:

```bash
ssh-add --apple-use-keychain ~/.ssh/github_rsa
git push
```

**If it still fails**, start the SSH agent first and retry:

```bash
eval "$(ssh-agent -s)"
ssh-add --apple-use-keychain ~/.ssh/github_rsa
git push
```
