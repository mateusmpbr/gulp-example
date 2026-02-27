# Gulp Example

This repository contains a small example project demonstrating common Gulp tasks for front-end asset pipeline workflows: image optimization, CSS concatenation/minification, autoprefixing, and copying webfonts.

## Features

- Optimize images from `src/img` to `build/img` using `gulp-imagemin`.
- Concatenate and minify CSS (including vendor CSS) into `build/css/main.css`.
- Copy Font Awesome webfonts to `build/webfonts`.
- Watch CSS source files and rebuild automatically.

## Prerequisites

- Node.js (v12+ recommended)
- npm (comes with Node.js)
- Optionally, install the Gulp CLI globally to run `gulp` directly: `npm install --global gulp-cli`.

## Installation

From the repository root run:

```bash
cd gulp-example
npm install
```

You can run Gulp with `npx gulp` (no global install required) or `gulp` if you installed the Gulp CLI globally.

## Available Gulp tasks

These tasks are defined in `gulpfile.js` inside the `gulp-example` folder.

- `default` — Runs the `imagemin`, `styles`, and `fontAwesome` tasks in parallel and then starts a file watcher for styles.
- `imagemin` — Optimizes images from `src/img/**/*` to `build/img/`.
- `styles` — Concatenates the vendor CSS files and project CSS into `build/css/main.css`, runs `autoprefixer`, and minifies the result.
- `fontAwesome` — Copies Font Awesome webfonts from the source vendor directory into `build/webfonts`.

Example: run the default workflow with:

```bash
npx gulp
```

Or, if you have the Gulp CLI installed globally:

```bash
gulp
```

## Project structure

- `src/` — Source files and vendor assets used to build the site.
  - `startbootstrap-creative-gh-pages/` — A theme/vendor folder containing CSS, JS, fonts, and images used by the example.
- `build/` — Output directory produced by the Gulp tasks (`css/`, `img/`, `webfonts/`).

## Customization

- To add or change source files included in the CSS bundle, edit the `gulpfile.js` `styles` task `gulp.src([...])` order.
- To add other tasks (JS bundling, live reload), extend the `gulpfile.js` and update the `default` task accordingly.

## Contributing

Feel free to open issues or pull requests to improve the example, add tasks, or update documentation.

## License

This repository uses the project license found in the repo root.
