var projectController = angular.module('projectController', ['ui.bootstrap']);
projectController.controller('projectController', function projectController($scope, $rootScope) {


    $scope.projects = [
        {
            image: 'img/project1.jpeg',
            name: 'Jaama Selver',
            alapealkiri: 'Kaubandushoone',
            aasta: 2017,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget.",
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project6.jpeg',
            name: 'Tartu ärihoone',
            alapealkiri: 'alapealkiri',
            aasta: 2016,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget.",
            pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
        },
        {
            image: 'img/project5.jpeg',
            name: 'Kvartal',
            alapealkiri: 'Kaubandushoone',
            aasta: 2015,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget.",
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project7.jpeg',
            name: 'Project 4',
            alapealkiri: 'alapealkiri',
            aasta: 2014,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget.",
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project5.jpeg',
            name: 'Project 5',
            alapealkiri: 'alapealkiri',
            aasta: 2013,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget.",
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project6.jpeg',
            name: 'Project 6',
            alapealkiri: 'alapealkiri',
            aasta: 2012,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget.",
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project7.jpeg',
            name: 'Project 7',
            alapealkiri: 'alapealkiri',
            aasta: 2011,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget.",
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project1.jpeg',
            name: 'Project 8',
            alapealkiri: 'alapealkiri',
            aasta: 2010,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget.",
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
    ];

    $scope.toggleProjectView = function (index) {
        $rootScope.projectview = true;
        $rootScope.projectViewOverlay = true;
        $scope.globalName = $scope.projects[index].name;
        $scope.globalAlapealkiri = $scope.projects[index].alapealkiri;
        $scope.globalAasta = $scope.projects[index].aasta;
        $scope.globalTekst = $scope.projects[index].tekst;
        $scope.globalPictures = $scope.projects[index].pictures;
    }

    var index = 0;
    $scope.hideProject = function () {
        $rootScope.projectview = false;
        $rootScope.projectViewOverlay = false;
        index = 0;
    }


    $scope.menuUp = function () {

        $scope.holder = $scope.projects[index >= $scope.projects.length + 1 ? index = 0 : --index];
        $rootScope.projectview = true;
        $scope.globalName = $scope.holder.name;
        $scope.globalAlapealkiri = $scope.holder.alapealkiri;
        $scope.globalAasta = $scope.holder.aasta;
        $scope.globalTekst = $scope.holder.tekst;
        $scope.globalPictures = $scope.holder.pictures;


    }

    $scope.menuDown = function () {
        $scope.holder = $scope.projects[index >= $scope.projects.length - 1 ? index = 0 : ++index];
        $rootScope.projectview = true;
        $scope.globalName = $scope.holder.name;
        $scope.globalAlapealkiri = $scope.holder.alapealkiri;
        $scope.globalAasta = $scope.holder.aasta;
        $scope.globalTekst = $scope.holder.tekst;
        $scope.globalPictures = $scope.holder.pictures;

    }

});

