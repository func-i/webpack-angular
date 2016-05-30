## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 9 - Loading multiple resources on a single page

**Before starting this activity, if your webpack server was running from a previous activity, stop it and restart it**

### Making sure our API calls resolve before the controller

If you open `app/posts/controllers/index_ctrl.js` and add `console.log(postsResponse)` you will notice
that the response is just an unresolved promise.

This means the promise is being passed to the controller and we're still waiting for it to resolve.

We can make it so the controller doesn't load until the promise is resolved.

If you change `return Post.query()` to `return Post.query().$promise` you this will load the controller 
when the promise is resolved.

Now the `console.log` in our `postsIndexController` logs the array of resources.
From now on, add `.$promise` while resolving your `ngResource` calls in your routers.

We now know how to:

* organize our app
* add to it's structure (modules, controllers, views, resources, env variables)
* make API calls

Let's add more functionality to our application and continue to explore more angular concepts.

#### Post comments

Our API supports posts having comments.  Let's show these comments on the post page.
We will need to make an additional API call to show the comments, we can also put that in the `resolve` in our `postsShow` route.

#### On your own

You now have the skills to accomplish this task.  So you will need to:

* Create the `PostComment` model with that will query the API path `/posts/:id/comments`
  * We can also create the `Comment` model which will query all comments from `/comments`
  * However we will just create the `PostComment` model
* Add resolving the comments in the `postsShow` route in `app/posts/routes.js`
* Display all comments in `app/posts/views/show.html`


### To continue:

* `git add .`
* `git commit -m "my activity_09 completed work"`
* `git checkout activity_10`



