## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 8 - Loading multiple resources on a single page

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

* Create the `PostComment` model with the path `/posts/:id/comments`
  * We can also create the `Comment` model which will query all comments from `/comments`
* Add resolving the comments in the `postsShow` route in `app/posts/routes.js`
* Display all comments in `app/posts/views/show.html`


### To continue:

* `git stash`
* `git checkout activity_10`



