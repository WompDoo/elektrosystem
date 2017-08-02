var projectController = angular.module('projectController', ['ui.bootstrap']);
projectController.controller('projectController', function projectController($scope, $rootScope) {


    $scope.projects = [
        {
            image: 'img/project1.jpeg',
            name: 'Selverid',
            alapealkiri: 'Toidupoed',
            aasta: '2013-2015',
            tekst: "Oleme olnud tähtsaks osaks Eesti prestiižseima toidupoodide keti - Selveri arengus. Projekteeritud ja elekter on paigaldatud Aardla, Jaama, Jõgeva ja Vitamiini Selveritesse. Projektide toimumisaeg on jäänud vahemikku 2013-2016 aasta.",
            shortinfo: 'Oleme olnud tähtsaks osaks Eesti prestiižseima toidupoodide keti - Selveri arengus.',
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project6.jpeg',
            name: 'EMÜ spordihoone',
            alapealkiri: 'Spordikompleks Tartus',
            aasta: 2009,
            tekst: "Lõime koostöös YIT ehitusega valgus -ja elektrilahendused Lõuna-Eesti võimsaima spordikompleksi jaoks. Koguprojekti pikkus 2 aastat ja kasulikku pinda 1500m2; töö tellijaks oli Eesti Maaülikool; kompleks asub Kreutzwaldi tänav 3, Tartu linna ääres, otse Tallinnast sissesõidul.",
            shortinfo: 'Lõime koostöös YIT ehitusega valgus -ja elektrilahendused Lõuna-Eesti võimsaima spordikompleksi jaoks.',
            pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
        },
        {
            image: 'img/vanemuineHead.jpg',
            name: 'Vanemuine',
            alapealkiri: 'Lavatehnika elektripaigaldis',
            aasta: '2016-2017',
            tekst: "Koostöös Hollandi ettevõttega Trekwerk valmistasime 1,5 aasta jooksul eriilmelise lavatenika elektripaigaldise Vanemuise teatrile. Veelgi mahukam lahendus on 2008. aastal tehtud Ugala teatri jaoks. Oleme eriliselt uhked tugeva koostöö üle Euroopa partneriga ja oma panuse eest Eesti kultuuri arendamisse.",
            shortinfo: 'Koostöös Hollandi ettevõttega Trekwerk valmistasime 1,5 aasta jooksul eriilmelise lavatenika elektripaigaldise Vanemuise.',
            pictures: ["img/vanemuine1.jpg", "img/vanemuine2.jpg", "img/vanemuine3.jpg", "img/vanemuine4.jpg"]
        },
        {
            image: 'img/project7.jpeg',
            name: 'Bitestop',
            alapealkiri: 'Toitlustuskeskus',
            aasta: 2014,
            tekst: "Tegime elektrilahendused Tartus Ringtee tänaval asuvale roadstop tanklale. See tankla hõlmab endas ka söögikohta ja apteeki - väga Skandinaavialik ja mugav lahendus.",
            shortinfo: 'Tegime elektrilahendused Tartus Ringtee tänaval asuvale roadstop tanklale.',
            pictures: ["img/project1.jpeg", "img/Ramm.png", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project6.jpeg',
            name: 'Nordic digital',
            alapealkiri: 'Kontori -ja laopind',
            aasta: 2012,
            tekst: "Lõime Eesti juhtivale hulgimüügiettevõttele logistikakeskuse Tartu linna külje all. 1200 m2 ruutmeetril on ruumi rohkem kui 100le töötajale, kes koordineerivad Photopointi poodide tööd.",
            shortinfo: 'Lõime Eesti juhtivale hulgimüügiettevõttele logistikakeskuse Tartu linna külje all.',
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project5.jpeg',
            name: 'Intrac',
            alapealkiri: 'Äri -ja teenindushoone',
            aasta: 2013,
            tekst: "Tegime elektritööd Intrac Eesti AS äri -ja teenindushoone jaoks. See tugev Eesti ettevõte, mis pakub põllumajandus -ja metsamasinate müüki ja hooldust, asutas lisaks Tallinna, Pärnu, Saaremaa ja Jõhvi teeninduskeskusele uue hoone Lõuna-Eesti klientidele lahenduste pakkumiseks.",
            shortinfo: 'Tegime elektritööd Intrac Eesti AS äri -ja teenindushoone jaoks.',
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project7.jpeg',
            name: 'Jakobi tänav',
            alapealkiri: 'Korterelamu',
            aasta: 2011,
            tekst: "10 korteriga korterelamu tunnistati Tartu Linnavalitsuse poolt 2015 aasta parimaks ehitiseks ajaloolises piirkonnas ehitatud uute korterelamute kategoorias. Miljööväärtuslikus piirkonnas ehitatud hoones tegime elektrilahendused nii korteritele kui ka äripindadele.",
            shortinfo: ' Miljööväärtuslikus piirkonnas ehitatud hoones tegime elektrilahendused nii korteritele kui ka äripindadel.',
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
        {
            image: 'img/project1.jpeg',
            name: 'Hotell Tartu',
            alapealkiri: 'Juurdeehitus',
            aasta: "2016-2017",
            tekst: "Pikaaegsele Tartus asuvale hotellile tehtud juurdeehituse elektritööde eest vastutas meie meeskond. Tööde toimumise aeg 2016 - 2017 aasta.",
            shortinfo: 'Pikaaegsele Tartus asuvale hotellile tehtud juurdeehituse elektritööde eest vastutas meie meeskond.',
            pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
        },
    ];


    var ctrl = mingiAsiCtrl;
    ctrl.language = "en";

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

