var app = angular.module('app',[]);
app.controller('controller',function($scope,$http){
	$scope.saveProduct = function(){
		alert('saving product');
	}
});