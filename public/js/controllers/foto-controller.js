angular.module('alurapic').controller('FotoController',function ($scope, $http,$routeParams) {
	$scope.foto = {};
	$scope.mensagem = '';

	if($routeParams.fotoId){
		$http.get("v1/fotos/"+$routeParams.fotoId)
			.success(function (foto) {
				$scope.foto = foto;
			})
			.error(function (error) {
				console.error(error);
				$scope.mensagem = 'Não foi possivel obter a foto';
			})
	}

	$scope.submeter = function () {
		if($scope.formulario.$valid){
			if($scope.foto._id){
				$http.put('v1/foto/'+$scope.foto._id,$scope.foto)
					.success(function () {
						$scope.mensagem = 'A Foto '+$scope.foto.titulo+' foi alterada com sucesso ';
					})
					.error(function (error) {
						console.log(error);
						$scope.mensagem = 'Não foi possivel alterar a foto' + $scope.foto.titulo
					})
			} else {
				$http.post('v1/fotos', $scope.foto)
					.success(function () {
						console.log('Sucesso');
						$scope.foto = {};
						$scope.mensagem = 'Foto cadastrada com sucesso';
						$scope.formulario.$setPristine();
					})
					.error(function (error) {
						$scope.mensagem = "Não foi possivel adicionar a foto"
						console.error(error);
					});
			}
		}
	}
});