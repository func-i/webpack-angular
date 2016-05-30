## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 2 - Adding a Controller

We now have a module for our posts, it doesn't do anything yet, so let's change that.  
Angular is an MVC, and we already have a view but we don't have a controller.

### Creating a controller  

There are a couple of ways to add a controller.  Let's start with the very basic approach, adding it via our HTML.

#### Referencing our controller

Replace `app/posts/views/index.html` with:

```
<div id="posts" ng-controller="postsIndexController as indexCtrl">
  <h1>Posts</h1>
</div>
```

If you reload your `/posts` page, and open your web inspector, you will notice an error in your console.
This is because the controller doesn't exist yet.

Let's create it:

#### Creating our controller

Create the file `app/posts/controllers/index_ctrl.js` and populate it with:

```
module.exports = function() {
  console.log("in posts controller");
}
```

As alway, we have defined our controller, but haven't included it yet.

#### Including our controller in our module

Open `app/posts/index.js` and replace it's contents with:

```
var angular = require('angular');
var routing = require('./routes');
var indexController = require('./controllers/index_ctrl.js');

module.exports = angular.module('app.posts', [])
  .config(routing)
  .controller("postsIndexController", indexController)
  .name
```

As you can see, we've imported the controller, and added it to our posts module as a controller.

Now when you visit `/posts`, it will load our controller and output to the console properly!

#### Referencing our controller in the routes

We added a reference to our controller in our HTML with `ng-controller`.
We are specifying which view to use in our router using the `template` key,
we can also reference our controller in the router too.

Change your `postsIndex` route to the following:

```
module.exports = function($stateProvider) {
  $stateProvider
    .state('postsIndex', {
      url: '/posts',
      template: require('./views/index.html'),
      controller: 'postsIndexController',
      controllerAs: 'indexCtrl'
    })
}
```

remove `ng-controller="postsIndexController as indexCtrl"` from `app/posts/views/index.html` and reload the page.  

It should still work!

This is a more organized way to reference our controllers because we can see our routes and which views/controllers
they will load all in one place.


### To continue:

* `git add .`
* `git commit -m "my activity_02 completed work"`
* `git checkout activity_03`










