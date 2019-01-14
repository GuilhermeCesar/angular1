angular.module('alurapic',
    [
        'minhasDiretivas'
        ,'ngAnimate'
        ,'ngRoute'
        ,'vendas'
    ]
).config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

   $routeProvider.when('/fotos',{
       templateUrl:'partials/principal.html',
       controller: 'FotosController'
   });

    $routeProvider.when('/fotos/new',{
        templateUrl:'partials/foto.html',
        controller:'FotoController'
    });

    $routeProvider.when('/calopsita',{
        templateUrl:'partials/calopsita.html',
    });

    $routeProvider.when('/fotos/edit/:fotoId',{
        templateUrl:'partials/foto.html',
        controller:'FotoController'
    });

    $routeProvider.when('/produtos/:produtoId',{
        template:"<label>Aqui tem os produtos</label>",
        controller:'ProdutoController'
    });

    $routeProvider.otherwise({
        redirectTo:'/fotos'
    })
});