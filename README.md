## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 3 - Controller Variables, ng-repeat

Our controller is loaded, but it only logs to the console.

The MVC concept states that our views render data from our controllers that is loaded from our models.  
So let's set some data in our controller to pass to our view.

#### Setting controller variables

Replace the contents of `app/posts/controllers/index_ctrl.js` with:

```
module.exports = function() {
  this.posts = [
    {name: 'Post1'},
    {name: 'Post2'},
    {name: 'Post3'}
  ]
}
```

Here we are creating the posts property on the post controller function.  This property will be accessible in our view.

Add these lines one by one to `app/posts/views/index.html` refreshing them each time to view their result.

* `{{ indexCtrl.posts }}`
* `{{ indexCtrl.posts[0] }}`
* `{{ indexCtrl.posts[0].name }}`

#### Angular directives in our view

We're only using one directive in our app at the moment (`ng-app` in /index.html).  Let's add another one to do work for us.

I want to create a list of our posts.  Replace `app/posts/views/index.html` with:

```
<div id="posts">
  <h1>Posts</h1>
  <ul class="list-group">
    <li class="list-group-item" ng-repeat="post in indexCtrl.posts">
      {{ post.name }}
    </li>
  </ul>
</div>
```

When your page refreshes, you will see our list of posts.
We are using `ng-repeat` to loop through a list, and repeat some DOM.

It also creates a local variable in the repeat, `post`, which we use inside the loop!

Angular is great at simplifying things that we do very often, 
such as looping through a list to show a list of `<li>` or `<tr>` elements.

### To continue:

* `git add .`
* `git commit -m "my activity_03 completed work"`
* `git checkout activity_04`










