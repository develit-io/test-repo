# Develit.io Nuxt Starter Template

## Pre-installed Icons
- [Heroicons](https://icones.js.org/collection/heroicons)
- [SVG Spinners](https://icones.js.org/collection/svg-spinners)

## Linter & Prettier
We don't use Prettier at all since it's also disabled in the `.vscode/settings`

We use [@nuxt/eslint](https://eslint.nuxt.com/) instead with enabled `config.stylistic`

## Page titles
you can define page title just by page meta
```ts
definePageMeta({ title: 'Blog' })
```

## Utilities & helper libraries
- [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine.
- [@nuxt/image](https://image.nuxt.com/) - Resize and transform your images using built-in optimizer or your favorite images CDN.
- [magic-regexp](https://regexp.dev/) - A compiled-away, type-safe, readable RegExp alternative `createRegExp(exactly('foo/test.js').after('bar/'))`
- [nuxt-radash](https://nuxt.com/modules/radash) - lot of handy functions for array manipulating, etc `first`, `last`, `group`, `replace`, ...
- [@nuxt/color-mode](https://color-mode.nuxtjs.org/) - Dark and Light mode with auto detection made easy with Nuxt 🌗
- [nuxt-time](https://nuxt.com/modules/time) - SSR/SSG-safe rendering of any date/time (Prevents hydration mismatch)


## Contribution
> please read [Develit Contribution Guidlines](https://github.com/develit-io/develit-io/wiki/Contribution-Guidelines)

We respect the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) as we also use `commitlint` and 
precommit hooks to check the right syntax

We also use `lint-staged` to run eslint against staged files

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Use `pnpm dev` to start a local server

## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (You might want to disable Vetur if you have it).

