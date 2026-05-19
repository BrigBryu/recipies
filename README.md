# Personal Recipe System

This repo is a small Markdown-first cookbook built with Jekyll. The recipe files in [`_recipes/`](/Users/bridgerbrundy/code/recipies/_recipes) are the source of truth. The website and printable cookbook page are just render targets.

## Why this stack

- Jekyll is the smallest sensible fit here because GitHub Pages supports it directly.
- Recipes stay as plain Markdown files with frontmatter.
- The site is static, phone-friendly, and easy to keep alive for years.
- Printing works from a normal browser without needing a complex document toolchain.

## Repo structure

```text
_recipes/          Markdown source recipes
_layouts/          Jekyll page layouts
_includes/         Shared header/footer
assets/css/        Screen styles
print/             Print stylesheet
scripts/           Optional PDF export helpers
index.html         Home page grouped by category
cookbook.html      All recipes in one printable page
```

## Add a new recipe

1. Create a new file in [`_recipes/`](/Users/bridgerbrundy/code/recipies/_recipes) with a slug name like `ginger-scallion-noodles.md`.
2. Copy the frontmatter shape below.
3. Write the recipe content in normal Markdown.
4. Reload the site. The recipe will automatically appear on the home page and cookbook page.
5. In the instructions, repeat ingredient amounts in the step text because this cookbook uses that style on purpose.

```md
---
title: Ginger Scallion Noodles
category: Noodles
tags: [quick, pantry, weeknight]
servings: 2
time: 15 min
source: Personal
---
# Ginger Scallion Noodles

## Ingredients
- ...

## Instructions
1. Add 8 oz noodles to boiling water and cook until tender.
2. Stir 2 tbsp soy sauce and 1 tbsp sesame oil together in a bowl.

## Serve With
- ...

## Notes
- ...
```

For consistency, follow the project rules in [`ADDING_RECIPES.md`](/Users/bridgerbrundy/code/recipies/ADDING_RECIPES.md).

## Run locally

### Prerequisites

- Ruby and Bundler for Jekyll
- Optional: Node.js if you want scripted PDF export

### Start the site

```bash
bundle install
bundle exec jekyll serve
```

Then open [http://127.0.0.1:4000](http://127.0.0.1:4000).

If you want the site reachable from your phone on the same Wi-Fi network:

```bash
bundle exec jekyll serve --host 0.0.0.0
```

Then visit `http://YOUR-COMPUTER-LAN-IP:4000` on your phone.

## Publish on GitHub Pages

### Easiest path

1. Push this repo to GitHub.
2. In the GitHub repo settings, open `Pages`.
3. Set the source to `Deploy from a branch`.
4. Choose the main branch and the repository root.

Because this site uses plain Jekyll features supported by GitHub Pages, GitHub can build and host it directly.

If you later publish to a project site instead of a user site, set `baseurl` in [`_config.yml`](/Users/bridgerbrundy/code/recipies/_config.yml) to the repo name.

## Print or export the cookbook

### Browser print

1. Open `/cookbook/`.
2. Use your browser print dialog.
3. Save as PDF if you want a digital cookbook file.

The print stylesheet hides navigation and starts each recipe on a new page.

### Optional scripted PDF export

Install the Node dependency once:

```bash
npm install
```

Then either:

```bash
bundle exec jekyll serve
npm run pdf
```

Or use the helper script:

```bash
./scripts/build-pdf.sh
```

This saves the output to [`dist/cookbook.pdf`](/Users/bridgerbrundy/code/recipies/dist/cookbook.pdf) after the local site is running.
