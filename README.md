## Webpack + Angular 1.x + ES5

A boilerplate using npm modules, bootstrap, webpack and Angular.

### Installation

`$> npm install`

`$> npm start`

`$> open localhost:8080`

## Activity 19 - Interceptors

An interceptor is request middleware.

It can be used to modify requests before they are sent out, and responses as they are coming back in.
A common use for this is for user token authentication.

Consider `authenticated_interceptor.js`:

```
module.exports = function(UserService) {
  return {
    request: function(config) {
      # if the user is logged in, set it here
      if(UserService.current_user) {
        config.headers['Authorization'] = UserService.current_user.token
      }
      
      return config
    }
  }
}
```

Consider `unauthenticated_interceptor.js`:

```
module.exports = function($injector, $q, UserService) {
  return {
    responseError: function(response) {
      if(response.status == 401) {
        UserService.signout();
        $injector.get('$state').go('signin');
        $q.reject(response);
      }
      else
        $q.reject(response);
    }
  }     
}
```

### To continue:

* That's all folks


