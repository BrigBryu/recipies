# Adding Recipes

This file exists so humans and AI agents add recipes in a consistent format. Consistency matters more than cleverness in this project.

## Core rule

- Every recipe lives in its own Markdown file inside [`_recipes/`](/Users/bridgerbrundy/code/recipies/_recipes).
- Markdown is the source of truth.
- Do not hand-edit layouts or HTML just to add recipe content.

## File naming

- Use lowercase kebab-case filenames.
- Good: `crispy-cumin-chicken.md`
- Good: `spiced-condensed-milk-coffee.md`
- Avoid spaces, underscores, dates, or extra numbering unless there is a real need.

## Required frontmatter shape

Use this exact key order unless there is a strong reason not to:

```yaml
---
title: Recipe Title
category: Category
tags: [tag one, tag two]
servings: 2-4
time: 30 min
source: Where it came from
favorite: false
---
```

## Body structure

Use these sections in this order:

```md
# Recipe Title

## Ingredients
- ingredient

## Instructions
1. step with ingredient amounts repeated in the sentence

## Serve With
- optional side or serving idea

## Notes
- optional observation, substitution, or warning
```

## Style rules

- Keep titles short and natural.
- Use one category only.
- Keep tags short, lowercase, and practical.
- Use `time` values like `10 min`, `35 min`, or `1 hr 20 min`.
- Use `servings` as plain human-readable text like `2`, `4`, or `3-4`.
- Write ingredients as compact bullets, one item per line.
- Write instructions as numbered steps.
- Repeat ingredient amounts inside the instructions instead of relying on the ingredients list alone.
- Prefer steps like `Add 2 tbsp butter` over `Add butter`.
- Prefer sentence case for section content.
- Keep notes brief and useful.

## Editing rules for AI agents

- If parsing a recipe from messy text, normalize it into this structure.
- Preserve the original dish name unless it is clearly broken.
- Infer a sensible category if one is missing.
- Add 2 to 5 practical tags, not a long list.
- If a section is unknown, include the section heading and use a short placeholder only when necessary.
- When writing or normalizing instructions, carry the relevant amounts into the step text so the cook does not need to bounce back and forth as much.
- Do not invent long backstories, SEO text, nutrition panels, or chatty intros.
- Do not add HTML unless Markdown cannot express the content.

## Example

See the sample files in [`_recipes/`](/Users/bridgerbrundy/code/recipies/_recipes) for working examples.
