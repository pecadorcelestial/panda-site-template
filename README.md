# &#128060; Panda Site Template

A _"not-so-basic"_ template to start and run a site using **NodeJS**, **React**, **Router**, **Redux**, **Styled-Components** and **Webpack**.

## Features

- **Webpack** (_development_): Hot module reload (fully functional even with **Redux**).
- **Webpack** (_production_): Bundle optimization, minification and code split (it includes separation for the **vendor** and **common** bundles).
- **Router**: 1 file with the _routes_ definition, implementation of dynamic module creation / loading, separation of the client and server side functionality.
- **Redux**: Examples of _actions_, _reducers_ and _combined reducers_. The ``local storage`` is used to maintain the state even on page reload.
- **Unit Tests**: UTs examples for ``actions`` and ``reducers``.
- **Coming soon...**: UTs examples for ``asynchronous`` calls and maybe for ``components`` (using **JSDOM**).

## Start Up

First, you'll need to install all dependencies by running:

```
npm install
```

## Development

To execute the site using a ``development`` environment run the following command:

```
npm run start:dev
```
This uses the advantages of the [_hot reloading_](https://webpack.js.org/concepts/hot-module-replacement/) of Webpack, it will not create any bundle files and will keep the changes on real time.

## Production

To create the corresponding bundles, just run the start script, this will first create the corresponding bundles and then it will start up the server:

```
npm start
```

## Authors

* **Francisco Rodríguez** - *Second work* - [GitHub](https://github.com/pecadorcelestial/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details