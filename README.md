## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 8 - Environment Variables

The `NODE_ENV` has been added to your `package.json` file.  You will notice in the `start` script, the environment is being set.
We need to take advantage of this variable.

#### Modifying Webpack

We will alias a new resolver so that when we require a file, it requires the appropriate one for us.

In `webpack.config.js` underneath the `output` key, add:

```
resolve: {
  alias: {
    config: path.join(__dirname, 'config', process.env.NODE_ENV)
  }
},
```

From now on, when we are in **development** and we `require('config')` it will load the file at `config/development.js`

#### Creating development variables

Create the `config` folder in the root of the project and add the file `development.js` with the following:

```
module.exports = {
  apiHost: 'http://jsonplaceholder.typicode.com/'
}
```

We will set our API endpoint so that we can use different endpoints for development and production (one day)

#### Using the development variable

Open `app/resources/post.js` and change it to the following:

```
var config = require("config");

module.exports = function($resource) {
  return $resource(config.apiHost + 'posts/:id', {});
};
```

This will load our config file (`config/development.js`), and use the `apiHost` we just set.

If you reload your **posts** page, nothing should have changed.

### To continue:

* `git add .`
* `git commit -m "my activity_08 completed work"`
* `git checkout activity_09`



