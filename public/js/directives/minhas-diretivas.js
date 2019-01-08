angular.module('minhasDiretivas',[])
.directive('meuPainel', function () {
    var ddo = {};

    ddo.restrict = "AE";
    ddo.scope = {
      titulo:'@',
    };
    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html';
    return ddo;
});

// angular.module("minhasDiretivas",[]).directive("minhaFoto",()=>{
//     let ddo = {
//         restrict:"AE"
//     }
//
//     ddo.score =  {
//
//     }
// })