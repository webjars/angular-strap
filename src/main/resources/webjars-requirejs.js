/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        'angular-strap': [ 'webjars!bootstrap.js', 'webjars!angular.js' ]
    }
});
