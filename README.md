## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 4 - Making API Calls

You should be on the url `http://localhost:8080/posts`.

This endpoint is just loading a list of posts from a variable that we populated ourselves.
We want to get our data from an API.

We will be using [jsonplaceholder](http://jsonplaceholder.typicode.com/) as our API.

`GET http://jsonplaceholder.typicode.com/posts` will return a list of posts for us to consume.

The model layer in our application will use the [ngResource](https://docs.angularjs.org/api/ngResource) library to make API calls.
This library is already included in the project if you notice the `angular-resource` package our `package.json`.

First we have to setup our `model`.

#### Creating our model

Create the file `app/resources/post.js` and populate it with:

``` javascript
module.exports = function($resource) {
  return $resource("http://jsonplaceholder.typicode.com/" + 'posts/:id', {});
};
```

This exports a function which is our model.  The function receives `$resource` as a dependency and returns
us that resource.

As you can see `$resource` accepts a url.  The `:id` is a named parameter matcher that we can use
to pass params in while making API calls.

The `$resource` returned to us is a REST resource for us to consume and will expose a number of methods to make
various calls.  More on that soon.

#### Including our model

Because our models may be used in many locations in our application, they have not been included in our
sub-modules but in the root of our application.

That means we can include all our models into the root of our application to be used anywhere.

To make it easy to include all our Models at once, let's create an `app/resources/index.js` file to load all models.

```
var angular = require('angular')
var post = require('./post.js');

module.exports = angular.module('app.resources', [])
  .factory('Post', post)
  .name;
```

This file loads the `post` model, creates `app.resources`, and adds the `Post` factory to it.  
We will soon be able to inject `Post` as a dependency to various places in our app and use it to make API calls.

Open `app/index.js` and change it to the following: 

```
require("!style!css!sass!./stylesheets/index.scss");

var angular = require('angular');
var uirouter = require('angular-ui-router');
var routing = require('./routes.js');
var ngResource = require('angular-resource');

// modules
var home = require('./home');
var posts = require('./posts');

// resources
var resources = require('./resources');

angular.module('app', [
  uirouter, 
  ngResource,

  // modules
  home,
  posts,

  // resources
  resources
  
]).config(routing)
```
The changes to this file do the following:

* imports `ngResource` from our npm packages
* injects it into our app
* loads our `resources`
* injects that into our app

#### Using the resource

Open `app/posts/controllers/index_ctrl.js`.  Let's use the `Post` model.

We must inject it as a dependency to our controller and then we can use it.  

Change your controller to:

```
module.exports = function(Post) {
  var that = this;

  Post.query(function(response) {
    that.posts = response;
  });
}
```

The changes to the controller do the following:

* inject `Post` as a dependency
* store a reference to `this`
* make a `GET` request to `http://jsonplaceholder.typicode.com/posts`
* set the controller property `posts` with the result from the posts

When your page reloads, you will notice there are a bunch of posts showing up, but there isn't any content.
In your web inspector, look at the result of the API call then look at `app/posts/views/index.html`

Do you see the problem?  Fix it.


### To continue:

* `git add .`
* `git commit -m "my activity_03 completed work"`
* `git checkout activity_05`
  * The code in the next step may be different than the code you wrote










