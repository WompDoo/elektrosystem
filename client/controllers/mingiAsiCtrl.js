var mingiAsiCtrl = angular.module('mingiAsiCtrl', ['pascalprecht.translate']);


mingiAsiCtrl.config(function($translateProvider) {
    $translateProvider.translations('et', {
        LANDINGTITLE1: 'Meie tehtud',
        LANDINGTITLE2: 'on kõrgusi ületavad',
        LANDINGMESSAGE: 'elektrilahendused',
        SIDEMENU: ["Home", "Tutvustus", "Meeskond", "Referentsid", "Partnerid", "Kontaktid"],
        LANDINGBUTTON1: 'Saada päring',
        LANDINGBUTTON2: 'Ettevõttest',
        et: 'Eesti',
        en: 'English'
    })
        .translations('en', {
            LANDINGTITLE1: 'We take',
            LANDINGTITLE2: 'to new heights',
            LANDINGMESSAGE: 'electrical solutions',
            SIDEMENU: ["Home", "Introduction", "Team", "Projects", "Partners", "Contacts"],
            LANDINGBUTTON1: 'Send request',
            LANDINGBUTTON2: 'About the company',
            et: 'Eesti',
            en: 'English'
        });

    $translateProvider.preferredLanguage('et');
});

mingiAsiCtrl.controller('mingiAsiCtrl', function($translate) {
    var ctrl = this;

    ctrl.language = 'et';

    ctrl.languages = ['et', 'en'];

    ctrl.updateLanguage = function() {
        $translate.use(ctrl.language);
    };
});
