### GitHub reference:
- https://github.com/zeit/next.js/

### Built in CSS Support
styled-jsx: 
- Creates styles scoped to a given component
- More info: https://github.com/zeit/next.js/#built-in-css-support

### Custom Error Handling
- Make a custom error page
- https://github.com/zeit/next.js/#custom-error-handling

### getInitialProps lifecycle hook
- https://github.com/zeit/next.js/#fetching-data-and-component-lifecycle
- Works in both functional and class components
- getInitialProps can only be used in Pages, NOT children components.


```
getInitialProps receives a context object with the following properties:
    pathname - path section of URL
    query - query string section of URL parsed as an object
    asPath - String of the actual path (including the query) shows in the browser
    req - HTTP request object (server only)
    res - HTTP response object (server only)
    err - Error object if any error is encountered during the rendering
```
