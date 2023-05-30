app.controller('mainCtrl', function($scope, DB){
    $scope.pizzas = [];
    
    $scope.deletepizza = function(id){
        DB.delete('items', 'id', id).then(()=>{
            $scope.pizzas.splice($scope.pizzas.indexOf(e=>e.id==id), 1);
        }, (err)=>{
            console.error(err);
        })
    }
    
    DB.selectAll("items").then((data)=>{
        $scope.pizzas = data;
    }, (err)=>{
        console.error(err);
    })



})
app.controller('addCtrl', function($scope, DB){
    $scope.body = {
        name: "",
        description: "",
        kcal: 0
    }
    $scope.add = function(){
        DB.insert('items', $scope.body).then((data)=>{
            console.log('Siker')
        },
        (err)=>{
            console.error(err.message);
        })
    }
})
app.controller('updateCtrl', function($scope, $routeParams, DB){
    $scope.body = {
        id: 0,
        name: "",
        description: "",
        kcal: 0
    }

    $scope.update = function(){
        DB.update('items', 'id', $routeParams.id, $scope.body).then((data)=>{
            console.log('Siker');
        },
        (err)=>{
            console.error(err);
        })
    }

    DB.select('items', 'id', $routeParams.id).then((data)=>{
        $scope.body = data[0]
    }, (data)=>{
        console.log(data);
    });
})