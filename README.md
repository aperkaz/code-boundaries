# 🚧 Code Boundaries

An example on how to setup code-boundaries in a TypeScript project, for fun and profit.

The boundaries are enforced through [good-fences](https://github.com/smikula/good-fences).

## Goal

As TypeScipt projects grow in complexity and number of developers, it becomes harder to prevent ad-hock imports between any file within the project.

PR reviews can help with that, but over developers and reviewer may forget, slowly but surely driving the project towards dependency hell.
Why is the UI module defining domain-specific types that the store modules depends on?
Why is the stand-alone math module depending on an authentication module helper? 🤔

Being explicit about the coundaries of you code and its modules is a great way to avoid this, by setting a dependency graph at design time and enforcing it in the CI pipeline.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm good-fences`

Runs good-fences, reporting if fences where breached.

Ideal for CI/CD pipelines, or as a pre-commit check, to help keep the code quality.
