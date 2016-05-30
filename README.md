## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 7 - Adding a layout

We would like to have a generic layout that all our routes are rendered in.
Our layout can have a nav bar or anything we want.

The layout already exists and is located at `app/layouts/app.html`.

In this file you will notice:

* ng-include
  * This is a way for us to render partial templates
* ui-view
  * This is a directive ui-router uses to render our view into.

If you look at `app/layouts/_navigation.html`, you will notice a bootstrap navbar with a link to `home` and `posts` using `ui-sref`

To have all of our routes use this layout, we have to create an *abstract route*

#### Abstract routes

Abstract routes are routes that act as parent routes.  In an abstract route we can render a template, or even do a `resolve`.
You cannot route to abstract routes.  So a `ui-sref` pointing to an abstract route will not work.

We will define our layout abstract route in `app/routes.js` by adding: 

```
$stateProvider
  .state('layout', {
    abstract: true,
    template: require('./layouts/app.html')
  });
```

You can see this route is an abstract route with a template.  Notice their isn't a `url` associated with this route.

#### Using the layout

In `app/posts/routes.js` add `parent: 'layout',` to both of your routes above the `url` key.

Also, go to `app/home/routes.js` and add it to that route as well.

When your page reloads, you should see the navigation, and notice that our content is being rendered inside the
bootstrap container.


### To continue:

* `git add .`
* `git commit -m "my activity_07 completed work"`
* `git checkout activity_08`



