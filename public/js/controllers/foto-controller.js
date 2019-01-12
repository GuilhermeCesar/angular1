angular.module('alurapic').controller('FotoController',function ($scope, $http) {
	$scope.foto = {};
	$scope.mensagem = '';

	$scope.submeter = function () {
		if($scope.formulario.$valid){
			$http.post('v1/fotos', $scope.foto)
				.success(function () {
					console.log('Sucesso');
					$scope.foto = {};
					$scope.mensagem = 'Foto cadastrada com sucesso';
					console.log($scope.mensagem.length);
				})
				.error(function (error) {
					$scope.mensagem = "Não foi possivel adicionar a foto"
					console.error(error);
				});
		}
	}
});