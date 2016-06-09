## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 15 - Directive Isolate scopes

At the moment when we use `$scope` in our directive's link function, we are accessing the scope outside of the directive.
The parent scope.  Because `$scope` is a large JavaScript Object, we want to try to avoid polluting this object as much as possible.

One of the ways we can do that with directives is to make it so that each directive has it's own scope completely independent of it's parent.
This is known as an **isolate scope**

We can do this by passing `scope` to the directive options.

Eg: 

```
restrict: "E",
scope: {
  lat: "@",
  lng: "@"
}

```

On your own:

* Use scopes in your `geocoder` directive for `lat` and `lng`
* How do you access the isolate scope?
* What is `@` above?  Read this [blog](http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope/)

### To continue:

* `git add .`
* `git commit -m "my activity_15 completed work"`
* Activities no longer have completed code, proceed to Activity 16 while keeping your code.



