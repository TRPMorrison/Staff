;(function() {

    'use strict';


    angular.module('app', [ 'ui.router', 'ngCookies','UserModule'])
        .constant('PARSE', {
            URL: 'https://api.parse.com/1/',
            CONFIG: {
                headers: {
                    'X-Parse-Application-Id': 'JkvjX6JIKiOArqMEloPtlQuc6vSHtjlpE1MLBwZ3',
                    'X-Parse-REST-API-Key': 'EHWEn2vW3pwTh7Qxg1PFUq25Rn8YyCyV2tVsDQEF',
                    'Content-Type': 'application/json'
                }
            }
        })
        .config( function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

              $stateProvider

              .state( 'login', {
                url: '/',
                templateUrl: 'scripts/User/login.tpl.html',
                controller: 'UserCtrl'
              })
              .state('register', {
                url: '/register',
                templateUrl: 'scripts/User/register.tpl.html',
                controller: 'UserCtrl'
              });



            })

         .run([ '$rootScope', 'UserFactory', 'PARSE',

                function ($rootScope, UserFactory, PARSE) {

                  $rootScope.$on('$routeChangeStart', function () {

                    // Run my Login Status
                    UserFactory.status();

         });

   }

  ]);


}());




// ;(function() {

//     'use strict';

//     angular.module('staff', ['ngRoute'])

//     .config(function($routeProvider) {
//         $routeProvider

//             .when('/', {
//             templateUrl: '.js/dashboard/dashboard.tpl.html',
//             controller: 'Dashboard'
//         })

//         .when('/login', {
//             templateUrl: '.js/user/login.tpl.html',
//             controller: 'Login'
//         })


//         .when('/register', {
//             templateUrl: '.js/user/register.tpl.html',
//             controller: 'Register'
//         })

//         .when('/private', {
//             templateUrl: '.js/private/private.tpl.html',
//             controller: 'Private'
//         })

//         .when('/public', {
//             templateUrl: '.js/public/public.tpl.html',
//             controller: 'Public'
//         })

//         .when('/search', {
//             templateUrl: '.js/search/search.tpl.html',
//             controller: 'Search'
//         });

//     });


// }());
