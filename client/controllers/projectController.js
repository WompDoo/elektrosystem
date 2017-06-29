var projectController = angular.module('projectController', []);
projectController.controller('projectController', function projectController($scope, $rootScope) {

    $scope.projects = [
        {
            image: 'img/project1.jpeg',
            name: 'Jaama Selver',
            alapealkiri: 'Kaubandushoone',
            aasta: 2017,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget."
        },
        {
            image: 'img/project6.jpeg',
            name: 'Tartu ärihoone',
            alapealkiri: 'alapealkiri',
            aasta: 2016,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget."
        },
        {
            image: 'img/project5.jpeg',
            name: 'Kvartal',
            alapealkiri: 'Kaubandushoone',
            aasta: 2015,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget."
        },
        {
            image: 'img/project7.jpeg',
            name: 'Project 4',
            alapealkiri: 'alapealkiri',
            aasta: 2014,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget."
        },
        {
            image: 'img/project5.jpeg',
            name: 'Project 5',
            alapealkiri: 'alapealkiri',
            aasta: 2013,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget."
        },
        {
            image: 'img/project6.jpeg',
            name: 'Project 6',
            alapealkiri: 'alapealkiri',
            aasta: 2012,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget."
        },
        {
            image: 'img/project7.jpeg',
            name: 'Project 7',
            alapealkiri: 'alapealkiri',
            aasta: 2011,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget."
        },
        {
            image: 'img/project1.jpeg',
            name: 'Project 8',
            alapealkiri: 'alapealkiri',
            aasta: 2010,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget."
        },
    ];

    $scope.toggleProjectView = function (index) {
        $rootScope.projectview = true;
        $rootScope.projectViewOverlay = true;
        $scope.globalName = $scope.projects[index].name;
        $scope.globalAlapealkiri = $scope.projects[index].alapealkiri;
        $scope.globalAasta = $scope.projects[index].aasta;
        $scope.globalTekst = $scope.projects[index].tekst;
    }
    $scope.hideProject = function () {
        $rootScope.projectview = false;
        $rootScope.projectViewOverlay = false;
    }
});

