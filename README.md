# ReactTypeScriptSkeleton

## About

This project is a skeleton project to create a blank application.
This project is created using [CRA](https://create-react-app.dev/docs/adding-typescript/)
`yarn create react-app my-app --typescript`

This project is using following tech specs,
1. It is a [ReactJS](https://reactjs.org/) based application.
2. It is written in [TypeScript](https://www.typescriptlang.org/).
3. It uses [Electron[(https://electronjs.org/)] to compile application into platform specific binaries (Win/Mac/Linux).
4. [Jest](https://jestjs.io/) for testing framework
5. [Eslint](https://eslint.org/) for linting.
6. [Enzyme](https://airbnb.io/enzyme/) for component testing.
7. [Husky](https://www.npmjs.com/package/husky) for git hooks.
8. [Electron-packager](https://github.com/electron/electron-packager) to package the electron app.
9. [Bootstrap](https://getbootstrap.com/) for bootstrap css
10. [Reactstrap](https://reactstrap.github.io/) for predefined components.
11. [react-router-dom](https://www.npmjs.com/package/react-router-dom) for routing.

## Development Prerequisites

1. [NodeJS](https://nodejs.org/en/).
2. [yarn](https://yarnpkg.com/en/).
3. Source Code Editor of your choice i.e [Visual Studio Code](https://code.visualstudio.com/).

## Development Environment Setup

1. Clone the source code repository.
2. Run `yarn install` in root directory to install required packages.
3. Run `yarn start` in root directory to run the application in debug/development mode locally.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser as well opens up a electron instance running the application.

The page will reload in browser and electron app instance if you make edits.<br />
You will also see any lint errors in the console.

### `yarn electron`
Runs the app in the development mode.<br />
in a electron instance running the application.

The page will reload in electron app instance if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test:unit`

Triggers a run of unit test cases in the project<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
