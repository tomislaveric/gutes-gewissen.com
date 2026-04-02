---
name: publish-content
description: Publish content from todo/ folders to the correct category
---

# publish-content SKILL

## Trigger

```
#publish <todo-folder-name>
```

### Examples

```
#publish "eat Performance"
```

```
#publish "CentralRösterei"
```

---

## Steps

### 1. Find the files in the todo folder

Locate the subfolder at `todo/<folder-name>/`. Inside it, find:

- The **markdown file**: the single `.md` file present (e.g. `eat-performance.md`)
- The **logo image**: typically named `*_logo.png` but extension may vary (`.jpg`, `.gif`, etc.)
- The **screenshot image**: typically named `*_screenshot.jpg` but extension may vary

### 2. Update image paths in the markdown frontmatter

Open the markdown file. In the frontmatter, update `image` and `screenshot` to use the correct asset paths:

```yaml
image: /assets/images/<logo-filename>
screenshot: /assets/images/screenshots/<screenshot-filename>
```

**Before:**
```yaml
image: 
screenshot: 
```

**After (example for eat Performance):**
```yaml
image: /assets/images/eat-performance_logo.png
screenshot: /assets/images/screenshots/eat-performance_screenshot.jpg
```

### 3. Copy the logo to `/assets/images/`

```bash
cp "todo/<folder-name>/<logo-filename>" "assets/images/<logo-filename>"
```

### 4. Copy the screenshot to `/assets/images/screenshots/`

```bash
cp "todo/<folder-name>/<screenshot-filename>" "assets/images/screenshots/<screenshot-filename>"
```

### 5. Determine the target category folder from `rubric:`

Read the `rubric:` value from the markdown frontmatter and map it to the correct root-level folder:

| rubric value                | target folder               |
|-----------------------------|-----------------------------|
| Computer & Technik          | `computer-und-technik`      |
| Drogerie & Kosmetik         | `drogerie-und-kosmetik`     |
| Ernährung & Lebensmittel    | `ernaehrung-und-lebensmittel` |
| Geschenke & Erlebnisse      | `geschenke-und-erlebnisse`  |
| Haus & Garten               | `haus-und-garten`           |
| Mode & Kleidung             | `mode-und-kleidung`         |
| Ökostrom & Ökogas           | `oekostrom-und-oekogas`     |
| Secondhand & Upcycling      | `secondhand-und-upcycling`  |
| Spielzeug & Hobby           | `spielzeug-und-hobby`       |
| Tierfutter & Tierbedarf     | `tierfutter-und-tierbedarf` |

### 6. Copy the markdown file to the category `_posts` folder

Rename the file by prepending today's date in `YYYY-MM-DD` format:

```bash
cp "todo/<folder-name>/<original-filename>.md" "<target-folder>/_posts/YYYY-MM-DD-<original-filename>.md"
```

**Example:**
```bash
cp "todo/eat Performance/eat-performance.md" "ernaehrung-und-lebensmittel/_posts/2026-04-02-eat-performance.md"
```

> Note: root-level folders starting with `_` (e.g. `_site`, `_includes`, `_layouts`, `_data`) are Jekyll build artifacts — never touch them. The `_posts` folders inside category folders (e.g. `ernaehrung-und-lebensmittel/_posts/`) are the correct publishing destinations.

### 7. Jekyll build

Run a Jekyll build to verify the site compiles without errors:

```bash
bundle exec jekyll build
```

If the build fails, investigate and fix the issue before finishing.

---

## Complete Example

For `#publish "eat Performance"`:

1. Files found in `todo/eat Performance/`:
   - `eat-performance.md`
   - `eat-performance_logo.png`
   - `eat-performance_screenshot.jpg`

2. Frontmatter updated:
   ```yaml
   image: /assets/images/eat-performance_logo.png
   screenshot: /assets/images/screenshots/eat-performance_screenshot.jpg
   ```

3. Logo copied: `assets/images/eat-performance_logo.png`

4. Screenshot copied: `assets/images/screenshots/eat-performance_screenshot.jpg`

5. `rubric: Ernährung & Lebensmittel` → target folder: `ernaehrung-und-lebensmittel`

6. Markdown copied to: `ernaehrung-und-lebensmittel/_posts/2026-04-02-eat-performance.md`

7. `bundle exec jekyll build` — passes without errors
