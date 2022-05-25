# 🚧 Code Boundaries

An example on how to setup code-boundaries in a TypeScript project, for fun and profit.

The boundaries are enforced through [good-fences](https://github.com/smikula/good-fences).

## Goal

As TypeScipt projects grow in complexity and number of developers, it becomes harder to prevent ad-hock imports between any file within the project.

PR reviews can help with that, but over developers and reviewer may forget, slowly but surely driving the project towards dependency hell.
Why is the UI module defining domain-specific types that the store modules depends on?
Why is the stand-alone math module depending on an authentication module helper?

Being explicit about the coundaries of you code and its modules is a great way to avoid this, by setting a dependency graph at design time and enforcing it in the CI pipeline.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
