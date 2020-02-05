<h1 align="center">
  Starter based on Gatsby's default starter with Material UI integration
</h1>

## What's this?
This is the [gatsby default starter](https://github.com/gatsbyjs/gatsby-starter-default) with <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">material ui</a> integration.

There is also tests added with <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">jest</a>, as well as <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">eslint</a> and <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">prettier</a> are configured.

## ESLint/Prettier Integration

Install Visual Studio Code Extension:
* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


### Visual Studio Code Settings

```
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[javascript]": {
        "editor.insertSpaces": true,
        "editor.detectIndentation": false,
        "editor.useTabStops": false,
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.formatOnSave": false
    },
    "eslint.format.enable": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
    ]
}
```

## How to use


1.  **Start developing.**

    Clone or Download this project, navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

