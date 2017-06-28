var projectController = angular.module('projectController', []);
projectController.controller('projectController', function projectController($scope) {

    $scope.projects = [
        {
            image: 'img/project1.jpeg', name: 'Jaama Selver'
        },
        {
            image: 'img/project6.jpeg', name: 'Tartu ärihoone'
        },
        {
            image: 'img/project5.jpeg', name: 'Väga pikk projekti nimi'
        },
        {
            image: 'img/project7.jpeg', name: 'Project 4'
        },
        {
            image: 'img/project5.jpeg', name: 'Project 5'
        },
        {
            image: 'img/project6.jpeg', name: 'Project 6'
        },
        {
            image: 'img/project7.jpeg', name: 'Project 7'
        },
        {
            image: 'img/project1.jpeg', name: 'Project 8'
        },
    ];
});

