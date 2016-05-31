## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 10 - Intro to Services

**Before beginning this activity, stop your webpack server and restart it**

Service Objects are used for two reasons. 

1. Separation of Concerns
  * Write shareable code that follows the Single Responsibility Principle
  * That is also testable
1. Share data between controllers

### Creating our services module

* create a `app/services`
* create a `favourites.js` file in your `services` directory and populate it with:

```
module.exports = function() {
  
  var favourites = [];

  return {

    toggleFavourite: function(post) {
      console.log(post, favourites);
    }
    
  }
}
```

* create a `app/services/index.js` file and populate it with:

```
var angular = require('angular');
var favourites = require('./favourites.js');

module.exports = angular.module('app.services', [])
  .factory("FavouriteService", favourites)
  .name
```

You can now inject `FavouriteService` into your controllers.

This service is actually a `factory` that returns a JSON object. 

### Using our FavouriteService

open `app/posts/views/index.html` and change it to: 

```
<div id="posts-page">
  <h1>Posts</h1>

  <ul class='list-group'>
    <li class="list-group-item row" ng-repeat="post in indexCtrl.posts">
      <div class='col-md-11' ng-click="indexCtrl.goToPost(post)">
        {{ post.title }}
      </div>
      <div class='col-md-1'>
        <i 
          class="glyphicon glyphicon-heart pull-right" 
          ng-class="{ 'text-danger': indexCtrl.postFavourited(post) }"
          ng-click="indexCtrl.toggleFavourite(post)">
        </i>
      </div>
    </li>
  </ul>
</div>
```

open `app/posts/controllers/index_ctrl.js` and change it to:

```
this.goToPost = function(post) {
  $state.go('postsShow', {id: post.id});
}

this.toggleFavourite = function(post) {
  // TODO: Implement this method
}

this.postFavourited = function(post) {
  // TODO: Implement this method
}
```

We have just created:

* A service with private data `favourites`
  * We will interact with this data via the JSON object returned from the service
* A view with a favourite button
  * our view uses a method in our controller to change routes instead of `ui-sref`
  * `ng-class` to conditionally set classes
  * calls a method in our controller to set our favourite

### On your own

* Create the functionality in the `FavouriteService`
* Create the functionality in the `postsIndexController`

### To continue:

* `git add .`
* `git commit -m "my activity_10 completed work"`
* `git checkout activity_11`



