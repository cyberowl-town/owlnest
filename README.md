# Hoot?

This is:

- A template for scaffolding most projects for _The Nest_.
- A playground for Swyrin (me) to test (sometimes) erratic setup. You are free to use it at will, but I do not guarantee the stability of this.

This repo uses the same
[Code of Conduct as our governance repo](https://github.com/cyberowl-town/.github/blob/main/CODE_OF_CONDUCT.md)
, unless stated otherwise. As usual from Swyrin-powered(TM) projects, AGPL-v3.

There is only `playground-nuxt` application for now, and... who gonna stop you to make more?

Nonetheless, here is the URL: [`https://swyrin-nuxt-playground.pages.dev`](https://swyrin-nuxt-playground.pages.dev)

## Why kitchen sink?

This being a "template" stems from lots of discrepancies:

- I want my team to use `pnpm` for package manager.
- I want to have some _sensible_ package catalog for some common packages.
- I want my team to use Turborepo for, well, monorepo management, just don't want too much `{pre,post}[script-name]`.
  - Yeah I know it is from Vercel, but it is better than going for Nx or Lerna.
- I want my team to use `oxlint`, `oxfmt` for code quality checker.
- I want my team to use _supported_ Node.js versions.
- I want my team to use `lefthook` for pre-commit setup.
- I want my team to have their VSCode pre-installed with `EditorConfig` extension, and also `.editorconfig` file.

Imagine I have to create _6 or 7_ repositories like that? Get the idea?

## Why Cloudflare Pages?

Despite being a _template_ this also serves the purpose of being my documentation of "Design System For The Nest",
learnt from hard mistakes @ _Arknights Vietnam Station v1_ development times.

Hence, I need a public website for my team to refer onto, and by having a website, I can't justify asking
_Monsieur K_ to host this-obviously-not-related-to-The-Nest project for me, so I decided to pass on his
generousity this time, _sorry_.

And... I think that answers the question?
