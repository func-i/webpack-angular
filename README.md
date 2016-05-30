## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 6 - Resolving our API calls in the router

At the moment we are doing all our API calls in our controllers.
This creates a little more in our controllers than is really necessary.
We are able to do these API calls in our router.

Doing some API calls in our router makes it easier to see what is happening at a URL in our application.

#### Advanced UI Router

UI Router allows us to `resolve` our API calls before executing the code in the controller.
Once our API calls are complete, the results of those calls can be passed to the controller.

For example, change the route for `postsIndex` in `app/posts/routes.js` to:

```
.state('postsIndex', {
  url: '/posts',
  template: require('./views/index.html'),
  controller: 'postsIndexController',
  controllerAs: 'indexCtrl',
  resolve: {
    postsResponse: function(Post) {
      return Post.query()
    }
  }
})
```

`resolve` takes a JSON object where the keys will be used as arguments in our controller and the return value from the
function will be the value.  In this case the function returns a `promise`.
Once this promise resolves, `postsResponse` will be passed to our controller.

To use this, change `app/posts/controllers/index_ctrl.js` to:

```
module.exports = function(postsResponse) {
  this.posts = postsResponse;
}
```

As you can see we have less controller code and our router code is longer.
I feel it's easier to build routes this way as it allows me to see the route, controller, view and initial API calls all in one place.

**DISCLAIMER**

If your `resolve` function isn't written properly, your controller will not execute and you will not see your page load.
This can be frustrating because you do not get any errors and your controller code doesn't execute when you expect it to.

If you are debugging your controller and it's not loading at all, you can be sure your resolve function in your router is broken.

#### On your own

Rewrite your `postsShow` route and controller to resolve the API call like we did for the index action.

### To continue:

* `git add .`
* `git commit -m "my activity_06 completed work"`
* `git checkout activity_07`



