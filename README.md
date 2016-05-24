## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 4 - Adding a show route

You should be on the url `/posts`

We have a list of our posts, let's add a route to view a single post from our list.
You will be doing most of this exercise on your own.

#### Adding a show route

In `app/posts/routes.js` you can see the route for our `index` action.  Let's add the show route.

Add the following code to `app/posts/routes.js` below your `index` route.

``` javascript
.state('postsShow', {
  url: '/posts/:id',
  template: require('./views/show.html'),
  controller: 'postsShowController',
  controllerAs: 'showCtrl'
})
```

#### You're on your own.

You are missing: 

* A showController
  * That queries the API to load a single record.  
  * [ngResource](https://docs.angularjs.org/api/ngResource)
    * hint: `Post.get`
* A show view template

### To continue:

* `git stash`
* `git checkout activity_05`
  * The code in the next step may be different than the code you wrote










