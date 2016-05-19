## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 1 - Creating a new module

To organize our code, we will be putting our code into modules.
Each module will contain all the relevant routes, controllers, views and styles.

Our tutorial will consume the fake API from http://jsonplaceholder.typicode.com

The first module we will create will consume the `/posts` endpoint.  We will therefore create a `posts` module
with the following structure:

```
  app/
    posts/
      controllers/
      stylesheets/
      views/
      index.js
      routes.js
```

Once you have the above structure implemented, it's time to configure our router.

### Adding to our Router

The base project uses [ui-router](https://github.com/angular-ui/ui-router) instead of the default angular [ngRoute](https://docs.angularjs.org/api/ngRoute).  
`ui-router` has a number of enhancements and is the de-facto choice for routing in angular.

Refer to `app/routes.js` file for the basic setup.

At the moment the default router is only setting two things:

* [html5 mode](https://scotch.io/tutorials/pretty-urls-in-angularjs-removing-the-hashtag)
* a default route handler

Refer to `app/home/routes.js` file to see an addition to our router.

The router is setting up a new named state called `home`, with a url of `/`.  
It also points to the controller and view to use while rendering this route.

#### Add posts routes

Let's add a route to view all `Posts`.

Add to `app/posts/routes.js`

```
  $stateProvider
    .state('postsIndex', {
      url: '/posts',
      template: require('./views/index.html'),
    })
```

You will notice we are referencing the template, let's go ahead and add content to the view file `app/posts/views/index.html`


```
  <h1>Posts</h1>
```

if you navigate to `/posts` in your browser, you will notice it goes back to the home page.

Why?

A couple of reasons.  

1. You have not registered your routes in the module.  They are just defined.
  * Webpack only compiles the files that are referenced.  This file isn't referenced anywhere.
1. You have not registered your module in the app. (Covered later)

Lets go ahead and register them in the module.

#### Create the posts module

open `app/posts/index.js`

Add the following line:

```
  var angular = require('angular');
  module.exports = angular.module('app.posts', []).name

```

This sets up our `posts` module and adds it to our `app`.  
This is why it is `app.posts`. It is a sub-module of `app`.

You will also notice that we export the `name`.  This is because the file will be included by webpack, but only the name will be injected as a dependency in our app.  More on that later.

#### Add the routes to our posts module

We have created a posts module, but it doesn't contain any functionality.

We need to import our routes and add them to our module.

``` javascript
  var angular = require('angular');
  var routing = require('./routes');
  
  module.exports = angular.module('app.posts', [])
    .config(routing)
    .name

```

We have imported the routes from the routes file, and added it as a `config` to our module.  
Our routes should work now, right?  
Go to `/posts`

* Spoiler, they don't work *

#### Adding our posts module to the app

We have created our post module, which imports everything it needs into it's own `index.js`, but we haven't registered it in our app.

Open `app/index.js`

As you can see we are already importing our `home` module, but not our `posts` module.  
Let's go ahead and do that.

Add: 

```
  var posts = require('./posts');
```

Then add 

``` javascript
  ...
  // Modules
  home, 
  resources
  ...
```

Navigate to `/posts` and it should be rendering `/app/posts/views/index.html`

### To continue:

* `git stash`
* `git checkout activity_02`










