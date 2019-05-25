var app = angular.module('todoApp',[]);

app.controller('todoCtrl',function($scope){
    $scope.new_todo = '';
    $scope.todos = [];

    $scope.add_todo = function(){
        //console.log('form was submitted');

        if($scope.new_todo.trim() !== ''){
            //console.log('user has typed something');

            var new_todo_object = {
                title: $scope.new_todo,
                is_done: false
            };

            //console.log(new_todo_object);

            $scope.todos.push(new_todo_object);

            $scope.new_todo = '';
        }
    }

    $scope.complete_todo = function(todo){
        todo.is_done = true;
    }

    $scope.delete_todo = function(item){
        var index = $scope.todos.indexOf(item);
        $scope.todos.splice(index, 1);
    }

    $scope.$watch('todos', function (newValue, oldValue, scope) {
        var data = JSON.stringify($scope.todos);
        localStorage.setItem('todos', data);
      }, true);
    
    if(localStorage.getItem('todos') != null){
        $scope.todos = JSON.parse(localStorage.getItem('todos'));
    };

});
