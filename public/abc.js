var app = angular.module("admin",['ngRoute']);

app.config(['$routeProvider', function($routeProvider)
{
    $routeProvider
    
   
    .when('/student',{
        templateUrl:'pages/student.html',
        controller:'studentTable'
    })
    .when('/staff',{
        templateUrl:'pages/staff.html',
        controller:'staffTable'
    })
    .when('/course',{
        templateUrl:'pages/course.html',
        controller:'courseTable'
    })
    .otherwise({
       redirectTo: '/'
    });
}])



app.controller('aadmin', function($scope)
{
    console.log("admin controller runing")
})
/////////
app.controller('staffTable', function($scope)
{
    console.log("staff controller runing")
    
    $scope.recordStaff=[{
        'name':'xyz',
        'class':'9',
        'mobile':'00000000000'
                
    }
    
    ]
    //console.log("dkn1")
    $scope.submitStaff = function(recordStaff){
	            $scope.recordStaff.push({ 
	                name: $scope.Tname, 
	                class: $scope.classT,
	                mobile: $scope.mNumber,
                }); console.log("Teacher data entered")}
})
//////////////////////////////////
app.controller('studentTable' , function($scope)
{
    console.log("student controller runing")
    $scope.records=[{
        'name':'abc',
        'class':'5',
        'roll':'78'
        
    }
    
    ]
    $scope.submitStudent = function(records){
	            $scope.records.push({ 
	                name: $scope.name, 
	                class: $scope.class,
	                roll: $scope.rollN,
                }); console.log("student data entered")}
});
////////////////////////////////////////////////////////////
app.controller('courseTable', function($scope)
{
    console.log("Course controller runing")
    
    $scope.recordCourse=[{
        'Cname':'Maths',
        'courseTeacher':'hhhh',
        'Cclass':'10',
        'Cnumber':'009'
                
    }
    
    ]
    $scope.submitCourse = function(recordCourse){
	            $scope.recordCourse.push({ 
	                Cname: $scope.Cname, 
                    courseTeacher:$scope.Tclass,
	                Cclass: $scope.cClass,
	                Cnumber: $scope.cNumber,
                }); console.log("Course data entered")}
})