# Express Template with postgres 

## How to use cli to quickly create template?

```
yarn create:route
yarn create:controller
yarn create:model
yarn create:repo
```

## Project structure
```
.
├── cli/                * all useful cli template in here
├── src/                * all source code in here
  └── config/           * all configuration file here
  |  └── index.js       * register config
  |  └── database.js    * configuration database
  |  └── routes.js      * configuration routes
  |  └── constant.js    * configuration project constant
  └── database/         * all models schema file here
  |   └── models        * all models file
  |   └── migrations    * all migrations file
  └── controllers/      * all file controller here
  |   └── index.js      * register all handler here
  └── middleware/       * all middleware file here, for check before next to api
  └── repository/       * all file repository for single db or multiple db
  └── routes/           * all file route here
  |   └── index.js      * register all route
  └── __test__/         * all test file here
  |   └── index.js      * test apps
  └── utils/            * all utils function file here
```
