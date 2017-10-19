(function (window,angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	var app = angular.module('app',['ngRoute']);
	app.config(['$routeProvider',function ($routeProvider) {
		$routeProvider
			.when('/:url?',{
				templateUrl : 'template',
				controller : 'MyCtrl'
			})
			.otherwise({
				redirectTo:'/'
			})
	}])

	app.controller('MyCtrl',['$scope','$window','$location','$routeParams','$route',function ($scope,$window,$location,$routeParams,$route) {
		// $scope.remove = function(item){
		// 	_.remove($scope.todos,function(n){
		// 		return n === item;
		// 	})
		// }

		var storage = $window.localStorage;
		$scope.todos = storage['myTodos'] ? JSON.parse(storage['myTodos']) : [
			{
				id:0,
				text:'Taste Javascript',
				isCompleted:true
			},
			{
				id:1,
				text:'arashi',
				isCompleted:false
			}
		];
		$scope.toggle = function () {
			localsave();
		}
		var localsave = function() {
			storage['myTodos'] = JSON.stringify($scope.todos);
		}
		$scope.toDoItem = function (e) {
		if (e.code === 'Enter' && $scope.text !== '' && $scope.text !== undefined){
				console.log($scope.text);
				var item = {};
				item.text = $scope.text;
				item.id = getId();
				item.isCompleted = false;
				console.log(item);
				$scope.todos.push(item);
				$scope.text='';
			}
			localsave();
		}
		function getId(){
			var id = new Date().getTime();
			return id;
		}
		localsave()
		$scope.getUnfinishNum = function() {
			var i = 0;
			for(var item of $scope.todos){
				if(item.isCompleted === false){
					i++;
				}
			}
			return i;
		}

		var now = true;
		$scope.chooseAll = function() {
			if($scope.getUnfinishNum() === 0){
				now = false;
			}
			console.log('toggle执行');
			for(var item of $scope.todos){
				item.isCompleted = now;
			}
			now = !now;
			localsave();
		}

		$scope.clearCompleted = function(){
			var result = [];
			for(var i = 0; i < $scope.todos.length; i++){
				if($scope.todos[i].isCompleted === false){
					result.push($scope.todos[i]);
					}
				}
			$scope.todos = result;
			localsave();
		}
		$scope.currentId = -1;
		$scope.editing = function(id){
			console.log('开始编辑' + id);
			$scope.currentId = id;
		};
		$scope.save = function(){
			$scope.currentId = -1;
			localsave();
		};

		$scope.remove = function(id){
			for(var index = 0; index < $scope.todos.length; index++){
				if($scope.todos[index].id === id){
					$scope.todos.splice(index,1);
				}
			}
			localsave();
		}
		//过滤器显示已完成
		$scope.selector = {};
		var url = $routeParams.url;
		console.log($routeParams);
		switch(url){
			case 'active':
				$scope.selector = {isCompleted:false};
				break;
			case 'completed':
				$scope.selector = {isCompleted:true};
				break;
			case '':
				$scope.selector = {};
				break;
			default:
				$scope.selector = {};
		}


		// $scope.$location = $location;
		// $scope.$watch('$location.$$hash',function(newVal, oldVal) {
		// 	console.log(newVal);
		// 	console.log(oldVal);
		// 	switch(newVal){
		// 		case '/active':
		// 			$scope.selector = {isCompleted:false};
		// 			break;
		// 		case '/completed':
		// 			$scope.selector = {isCompleted:true};
		// 			break;
		// 		default:
		// 			$scope.selector = {};
		// 	}
		// })
	}])
})(window,angular);
