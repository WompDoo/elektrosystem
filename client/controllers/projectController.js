var projectController = angular.module('projectController', ['ui.bootstrap']);
projectController.controller('projectController', function projectController($scope, $rootScope) {


    $scope.projects = [
        {
            image: 'img/project1.jpeg',
        },
        {
            image: 'img/project6.jpeg',
        },
        {
            image: 'img/vanemuineHead.jpg',
        },
        {
            image: 'img/project7.jpeg',
        },
        {
            image: 'img/project6.jpeg',
        },
        {
            image: 'img/project5.jpeg',
        },
        {
            image: 'img/project7.jpeg',
        },
        {
            image: 'img/project1.jpeg',
        }
    ];


    $scope.project = [
        {
            'ee': {
                name: 'Selverid',
                alapealkiri: 'Toidupoed',
                aasta: '2013-2015',
                tekst: "Oleme olnud tähtsaks osaks Eesti prestiižseima toidupoodide keti - Selveri arengus. Projekteeritud ja elekter on paigaldatud Aardla, Jaama, Jõgeva ja Vitamiini Selveritesse. Projektide toimumisaeg on jäänud vahemikku 2013-2016 aasta.",
                shortinfo: 'Oleme olnud tähtsaks osaks Eesti prestiižseima toidupoodide keti - Selveri arengus.',
                pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]

            },
            'en': {
                name: 'Selvers',
                alapealkiri: 'Grocery stores',
                aasta: '2013-2015',
                tekst: "We have been an important part of the development of Estonia's most prestigious grocery store chain. We have planned and done electical works for Aardla, Jaama, Jõgeva and Vitamiini Selver.",
                shortinfo: "We have been an important part of the development of Estonia's most prestigious grocery store chain.",
                pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]

            },
            'ru': {
                name: 'Сельверы',
                alapealkiri: 'продуктовые магазины',
                aasta: '2013-2015',
                tekst: "Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер. Спроектировано и установлено электричество в Aardla, Jaama, Jõgeva ja Vitamiini Сельвере . Проект длился 2013-2016",
                shortinfo: 'Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер.',
                pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]

            }
        },
        {
            'ee': {
                name: 'EMÜ spordihoone',
                alapealkiri: 'Spordikompleks Tartus',
                aasta: 2009,
                tekst: "Lõime koostöös YIT ehitusega valgus -ja elektrilahendused Lõuna-Eesti võimsaima spordikompleksi jaoks. Koguprojekti pikkus 2 aastat ja kasulikku pinda 1500m2; töö tellijaks oli Eesti Maaülikool; kompleks asub Kreutzwaldi tänav 3, Tartu linna ääres, otse Tallinnast sissesõidul.",
                shortinfo: 'Lõime koostöös YIT ehitusega valgus -ja elektrilahendused Lõuna-Eesti võimsaima spordikompleksi jaoks.',
                pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
            },
            'en': {
                name: 'EMÜ sports club',
                alapealkiri: 'Grocery stores',
                aasta: 2009,
                tekst: "We have been an important part of the development of Estonia's most prestigious grocery store chain. We have planned and done electical works for Aardla, Jaama, Jõgeva and Vitamiini Selver.",
                shortinfo: "We have been an important part of the development of Estonia's most prestigious grocery store chain.",
                pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
            },
            'ru': {
                name: 'Сельверы',
                alapealkiri: 'продуктовые магазины',
                aasta: 2009,
                tekst: "Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер. Спроектировано и установлено электричество в Aardla, Jaama, Jõgeva ja Vitamiini Сельвере . Проект длился 2013-2016",
                shortinfo: 'Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер.',
                pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
            },

        },
        {
            'ee': {
                name: 'Vanemuine',
                alapealkiri: 'lavatehnika elektripaigaldis',
                aasta: '2016-2017',
                tekst: "Koostöös Hollandi ettevõttega Trekwerk valmistasime 1,5 aasta jooksul eriilmelise lavatenika elektripaigaldise Vanemuise teatrile. Veelgi mahukam lahendus on 2008. aastal tehtud Ugala teatri jaoks. Oleme eriliselt uhked tugeva koostöö üle Euroopa partneriga ja oma panuse eest Eesti kultuuri arendamisse.",
                shortinfo: 'Koostöös Hollandi ettevõttega Trekwerk valmistasime 1,5 aasta jooksul eriilmelise lavatenika elektripaigaldise Vanemuise teatrile.',
                pictures: ["img/vanemuine1.jpg", "img/vanemuine2.jpg", "img/vanemuine3.jpg", "img/vanemuine4.jpg"]
            },
            'en': {
                name: 'EMÜ sports club',
                alapealkiri: 'Grocery stores',
                aasta: '2016-2017',
                tekst: "We have been an important part of the development of Estonia's most prestigious grocery store chain. We have planned and done electical works for Aardla, Jaama, Jõgeva and Vitamiini Selver.",
                shortinfo: "We have been an important part of the development of Estonia's most prestigious grocery store chain.",
                pictures: ["img/vanemuine1.jpg", "img/vanemuine2.jpg", "img/vanemuine3.jpg", "img/vanemuine4.jpg"]
            },
            'ru': {
                name: 'Сельверы',
                alapealkiri: 'продуктовые магазины',
                aasta: '2016-2017',
                tekst: "Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер. Спроектировано и установлено электричество в Aardla, Jaama, Jõgeva ja Vitamiini Сельвере . Проект длился 2013-2016",
                shortinfo: 'Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер.',
                pictures: ["img/vanemuine1.jpg", "img/vanemuine2.jpg", "img/vanemuine3.jpg", "img/vanemuine4.jpg"]
            },

        },
        {
            'ee': {
                name: 'Bitestop',
                alapealkiri: 'Toitlustuskeskus',
                aasta: '2014',
                tekst: "Tegime elektrilahendused Tartus Ringtee tänaval asuvale roadstop tanklale. See tankla hõlmab endas ka söögikohta ja apteeki - väga Skandinaavialik ja mugav lahendus.",
                shortinfo: 'Tegime elektrilahendused Tartus Ringtee tänaval asuvale roadstop tanklale.',
                pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
            },
            'en': {
                name: 'EMÜ sports club',
                alapealkiri: 'Grocery stores',
                aasta: '2014',
                tekst: "We have been an important part of the development of Estonia's most prestigious grocery store chain. We have planned and done electical works for Aardla, Jaama, Jõgeva and Vitamiini Selver.",
                shortinfo: "We have been an important part of the development of Estonia's most prestigious grocery store chain.",
                pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
            },
            'ru': {
                name: 'Сельверы',
                alapealkiri: 'продуктовые магазины',
                aasta: '2014',
                tekst: "Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер. Спроектировано и установлено электричество в Aardla, Jaama, Jõgeva ja Vitamiini Сельвере . Проект длился 2013-2016",
                shortinfo: 'Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер.',
                pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
            },

        },
        {
            'ee': {
                name: 'Nordic Digital',
                alapealkiri: 'Kontori -ja laopind',
                aasta: '2014',
                tekst: "Lõime Eesti juhtivale hulgimüügiettevõttele logistikakeskuse Tartu linna külje all. 1200 m2 ruutmeetril on ruumi rohkem kui 100le töötajale, kes koordineerivad Photopointi poodide tööd.",
                shortinfo: 'Lõime Eesti juhtivale hulgimüügiettevõttele logistikakeskuse Tartu linna külje all.',
                pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
            },
            'en': {
                name: 'EMÜ sports club',
                alapealkiri: 'Grocery stores',
                aasta: '2014',
                tekst: "We have been an important part of the development of Estonia's most prestigious grocery store chain. We have planned and done electical works for Aardla, Jaama, Jõgeva and Vitamiini Selver.",
                shortinfo: "We have been an important part of the development of Estonia's most prestigious grocery store chain.",
                pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
            },
            'ru': {
                name: 'Сельверы',
                alapealkiri: 'продуктовые магазины',
                aasta: '2014',
                tekst: "Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер. Спроектировано и установлено электричество в Aardla, Jaama, Jõgeva ja Vitamiini Сельвере . Проект длился 2013-2016",
                shortinfo: 'Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер.',
                pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
            },

        },
        {
            'ee': {
                name: 'Intrac Eesti',
                alapealkiri: 'äri -ja teenindushoone',
                aasta: '2013-2016',
                tekst: "Tegime elektritööd Intrac Eesti AS äri -ja teenindushoone jaoks. See tugev Eesti ettevõte, mis pakub põllumajandus -ja metsamasinate müüki ja hooldust, asutas lisaks Tallinna, Pärnu, Saaremaa ja Jõhvi teeninduskeskusele uue hoone Lõuna-Eesti klientidele lahenduste pakkumiseks.",
                shortinfo: 'Tegime elektritööd Intrac Eesti AS äri -ja teenindushoone jaoks.',
                pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
            },
            'en': {
                name: 'asdasda',
                alapealkiri: 'Grocery stores',
                aasta: '2013-2016',
                tekst: "We have been an important part of the development of Estonia's most prestigious grocery store chain. We have planned and done electical works for Aardla, Jaama, Jõgeva and Vitamiini Selver.",
                shortinfo: "We have been an important part of the development of Estonia's most prestigious grocery store chain.",
                pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
            },
            'ru': {
                name: 'Сельверы',
                alapealkiri: 'продуктовые магазины',
                aasta: '2013-2016',
                tekst: "Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер. Спроектировано и установлено электричество в Aardla, Jaama, Jõgeva ja Vitamiini Сельвере . Проект длился 2013-2016",
                shortinfo: 'Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер.',
                pictures: ["img/project5.jpeg", "img/project6.jpeg", "img/project1.jpeg", "img/project1.jpeg", "img/project7.jpeg"]
            },

        },
        {
            'ee': {
                name: 'Jakobi 25',
                alapealkiri: 'Korterelamu',
                aasta: '2013',
                tekst: "10 korteriga korterelamu tunnistati Tartu Linnavalitsuse poolt 2015 aasta parimaks ehitiseks ajaloolises piirkonnas ehitatud uute korterelamute kategoorias. Miljööväärtuslikus piirkonnas ehitatud hoones tegime elektrilahendused nii korteritele kui ka äripindadele.",
                shortinfo: "10 korteriga korterelamu tunnistati Tartu Linnavalitsuse poolt 2015 aasta parimaks ehitiseks ajaloolises piirkonnas ehitatud uute korterelamute kategoorias.",
                pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]

            },
            'en': {
                name: 'EMÜ sports club',
                alapealkiri: 'Grocery stores',
                aasta: '2013',
                tekst: "We have been an important part of the development of Estonia's most prestigious grocery store chain. We have planned and done electical works for Aardla, Jaama, Jõgeva and Vitamiini Selver.",
                shortinfo: "We have been an important part of the development of Estonia's most prestigious grocery store chain.",
                pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
            },
            'ru': {
                name: 'Сельверы',
                alapealkiri: 'продуктовые магазины',
                aasta: '2013',
                tekst: "Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер. Спроектировано и установлено электричество в Aardla, Jaama, Jõgeva ja Vitamiini Сельвере . Проект длился 2013-2016",
                shortinfo: 'Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер.',
                pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
            },

        },
        {
            'ee': {
                name: 'Hotell Tartu',
                alapealkiri: 'Juurdeehitus',
                aasta: '2016-2017',
                tekst: "Pikaaegsele Tartus asuvale hotellile tehtud juurdeehituse elektritööde eest vastutas meie meeskond. Tööde toimumise aeg 2016 - 2017 aasta.",
                shortinfo: 'Pikaaegsele Tartus asuvale hotellile tehtud juurdeehituse elektritööde eest vastutas meie meeskond.',
                pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
            },
            'en': {
                name: 'EMÜ sports club',
                alapealkiri: 'Grocery stores',
                aasta: '2016-2017',
                tekst: "We have been an important part of the development of Estonia's most prestigious grocery store chain. We have planned and done electical works for Aardla, Jaama, Jõgeva and Vitamiini Selver.",
                shortinfo: "We have been an important part of the development of Estonia's most prestigious grocery store chain.",
                pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
            },
            'ru': {
                name: 'Сельверы',
                alapealkiri: 'продуктовые магазины',
                aasta: '2016-2017',
                tekst: "Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер. Спроектировано и установлено электричество в Aardla, Jaama, Jõgeva ja Vitamiini Сельвере . Проект длился 2013-2016",
                shortinfo: 'Являлись важной частью  проекта по развитию престижной сети прдуктовых магазинов Сельвер.',
                pictures: ["img/project1.jpeg", "img/project5.jpeg", "img/project6.jpeg", "img/project7.jpeg", "img/project1.jpeg"]
            },

        }

    ];


    $scope.$watch('$rootScope.language', function () {
        if ($rootScope.language == "et") {
            $scope.projectName = $scope.project[index].ee.name;
        }
        else if ($rootScope.language == "en") {
            $scope.projectName = $scope.project.en.name;
        }
        else {
            $scope.projectName = $scope.project.ru.name;
        }
    });


        $scope.toggleProjectView = function (index) {

            $rootScope.projectview = true;
            $rootScope.projectViewOverlay = true;
            $scope.globalPictures = $scope.projects[index].pictures;
            $scope.globalAasta = $scope.projects[index].aasta;

            $scope.$watch('$rootScope.language', function () {
                if ($rootScope.language == "et") {
                    $scope.globalName = $scope.project[index].ee.name;
                    $scope.globalAlapealkiri = $scope.project[index].ee.alapealkiri;
                    $scope.globalTekst = $scope.project[index].ee.tekst;
                    $scope.globalPictures = $scope.project[index].ee.pictures;
                    $scope.globalAasta = $scope.project[index].ee.aasta;
                }
                else if ($rootScope.language == "en") {
                    console.log('engli');
                    $scope.globalName = $scope.project[index].en.name;
                    $scope.globalAlapealkiri = $scope.project[index].en.alapealkiri;
                    $scope.globalTekst = $scope.project[index].en.tekst;
                }
                else {
                    console.log('rusi');
                    $scope.globalName = $scope.project[index].ru.name;
                    $scope.globalAlapealkiri = $scope.project[index].ru.alapealkiri;
                    $scope.globalTekst = $scope.project[index].ru.tekst;
                }
            });

        };

    var index = 0;
    $scope.hideProject = function () {
        $rootScope.projectview = false;
        $rootScope.projectViewOverlay = false;
        index = 0;
    };

    $scope.menuDown = function () {

        $scope.$watch('$rootScope.language', function () {
            if ($rootScope.language == "et") {
                $rootScope.holder = $scope.project[index >= $scope.project.length - 1 ? index = 0 : ++index].ee;
            }
            else if ($rootScope.language == "en") {
                $rootScope.holder = $scope.project[index >= $scope.projects.length - 1 ? index = 0 : ++index].en
            }
            else {
                $rootScope.holder = $scope.project[index >= $scope.projects.length - 1 ? index = 0 : ++index].ru
            }
        });
        $rootScope.projectview = true;
        $scope.globalName = $rootScope.holder.name;
        $scope.globalAlapealkiri = $rootScope.holder.alapealkiri;
        $scope.globalAasta = $rootScope.holder.aasta;
        $scope.globalTekst = $rootScope.holder.tekst;
        $scope.globalPictures = $rootScope.holder.pictures;

    }

});

