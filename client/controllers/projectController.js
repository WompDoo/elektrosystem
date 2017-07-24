var projectController = angular.module('projectController', ['ui.bootstrap']);
projectController.controller('projectController', function projectController($scope, $rootScope) {


    $scope.projects = [
        {
            image: 'img/project1.jpeg',
            name: 'Selverid',
            alapealkiri: 'toidupoed',
            aasta: '2013-2015',
            tekst: "Oleme olnud tähtsaks osaks Eesti prestiižseima toidupoodide keti - Selveri arengus. Projekteeritud ja elekter on paigaldatud Aardla, Jaama, Jõgeva ja Vitamiini Selveritesse. Projektide toimumisaeg on jäänud vahemikku 2013-2016 aasta.",
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project6.jpeg',
            name: 'EMÜ spordihoone',
            alapealkiri: 'spordikompleks Tartus',
            aasta: 2009,
            tekst: "Lõime koostöös YIT ehitusega valgus -ja elektrilahendused Lõuna-Eesti võimsaima spordikompleksi jaoks. Koguprojekti pikkus 2 aastat ja kasulikku pinda 1500m2; töö tellijaks oli Eesti Maaülikool; kompleks asub Kreutzwaldi tänav 3, Tartu linna ääres, otse Tallinnast sissesõidul.",
            pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
        },
        {
            image: 'img/vanemuineHead.jpg',
            name: 'Vanemuine',
            alapealkiri: 'lavatehnika elektripaigaldis',
            aasta: '2016-2017',
            tekst: "Koostöös Hollandi ettevõttega Trekwerk valmistasime 1,5 aasta jooksul eriilmelise lavatenika elektripaigaldise Vanemuise teatrile. Veelgi mahukam lahendus on 2008. aastal tehtud Ugala teatri jaoks. Oleme eriliselt uhked tugeva koostöö üle Euroopa partneriga ja oma panuse eest Eesti kultuuri arendamisse.",
            pictures: ["img/vanemuine1.jpg", "img/vanemuine2.jpg", "img/vanemuine3.jpg", "img/vanemuine4.jpg"]
        },
        {
            image: 'img/project7.jpeg',
            name: 'Bitestop',
            alapealkiri: 'alapealkiri',
            aasta: 2014,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget.",
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project5.jpeg',
            name: 'Intrac',
            alapealkiri: 'alapealkiri',
            aasta: 2013,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget.",
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project6.jpeg',
            name: 'Nordic digital',
            alapealkiri: 'alapealkiri',
            aasta: 2012,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget.",
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project7.jpeg',
            name: 'Jakobi tänav',
            alapealkiri: 'alapealkiri',
            aasta: 2011,
            tekst: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida augue sem, nec aliquet mauris fringilla at. Aliquam erat volutpat. Morbi posuere eros tortor, vel feugiat velit egestas eget. Etiam hendrerit purus neque, a viverra ante venenatis eget.",
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project1.jpeg',
            name: 'Hotell Tartu',
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

