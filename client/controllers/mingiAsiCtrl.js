var mingiAsiCtrl = angular.module('mingiAsiCtrl', ['pascalprecht.translate']);


mingiAsiCtrl.config(function ($translateProvider) {
    $translateProvider.translations('et', {
        LANDINGTITLE1: 'Meie tehtud',
        LANDINGTITLE2: 'on kõrgusi ületavad',
        LANDINGMESSAGE: 'elektrilahendused',
        SIDEMENUHOME: 'Pealeht',
        SIDEMENUINTRO: 'Tutvustus',
        SIDEMENUCREW: 'Meeskond',
        SIDEMENUPROJECTS: 'Projektid',
        SIDEMENUPARTNERS: 'Partnerid',
        SIDEMENUCONTACT: 'Kontakt',
        LANDINGBUTTON1: 'Saada päring',
        LANDINGBUTTON2: 'Ettevõttest',

        INTROTEXT: 'Oleme tugev Eesti ettevõte, kes võtnud oma missiooniks lahendada kõik elektritöödega seotud ülesanded.Meie oskustepagas onaastatepikkuse kogemusetaustal arenenud japeensusteni lihvitud.',
        INTROSUBHEADING1: 'Elektritööd',
        INTROSUBHEADING2: 'Elektriklipide ehitus',
        INTROSUBHEADING3: 'Seadmete paigaldus',
        INTROSUBHEADING4: 'Projekteerimine',
        INTROSUBTEXT1: 'Me teeme hästi elektritöid. Me teeme hästi elektritöid. Me teeme hästi elektritöid. Me teeme hästi elektritöid.',
        INTROSUBTEXT2: 'Me teeme hästi elektritöid. Me teeme hästi elektritöid. Me teeme hästi elektritöid. Me teeme hästi elektritöid.',
        INTROSUBTEXT3: 'Me teeme hästi elektritöid. Me teeme hästi elektritöid. Me teeme hästi elektritöid. Me teeme hästi elektritöid.',
        INTROSUBTEXT4: 'Me teeme hästi elektritöid. Me teeme hästi elektritöid. Me teeme hästi elektritöid. Me teeme hästi elektritöid.',

        CREWTEXT: 'Ettevõtte võtmetegijad annavad asjalikku ja profesionaalset nõu ning meie tehtud tööd räägivad enda eest.',
        CREWPOS1: 'Juhataja',
        CREWPOS2: 'Projektijuhataja',
        CREWPOS3: 'Projektijuhataja',

        PROJECTSINSPECT:'Vaata lähemalt',
        PROJECTSMORE:'Veel projekte',

        PROJECTTEXT:'{{project.text}}',

        CONTACTHEAD1: 'Soovite infot?',
        CONTACTHEAD2: 'Võtke meiega ühendust',
        CONTACTPHONE: 'Telefon',
        CONTACTEMAIL: 'E-mail',
        CONTACTADDRESS: 'Aadress',

        FORMNAME: 'Nimi',
        FORMEMAIL: 'E-mail aadress',
        FORMMESSAGE: 'Sõnum',

        et: 'Eesti',
        en: 'English'
    })
        .translations('en', {
            LANDINGTITLE1: 'We take',
            LANDINGTITLE2: 'to new heights',
            LANDINGMESSAGE: 'electrical solutions',
            SIDEMENUHOME: 'Home',
            SIDEMENUINTRO: 'Introduction',
            SIDEMENUCREW: 'Team',
            SIDEMENUPROJECTS: 'Projects',
            SIDEMENUPARTNERS: 'Partners',
            SIDEMENUCONTACT: 'Contact',
            LANDINGBUTTON1: 'Enquiry',
            LANDINGBUTTON2: 'About the company',

            INTROTEXT: 'We are a strong Estonian company, which has taken on the task of solving all electrical work related tasks. Our fine knowledge of electrical work has been honed by years of experience.',
            INTROSUBHEADING1: 'Electrical work',
            INTROSUBHEADING2: 'Electric shield manufacturing',
            INTROSUBHEADING3: 'Installation of facilities',
            INTROSUBHEADING4: 'Planning',
            INTROSUBTEXT1: 'We do great electrical work. We do great electrical work. We do great electrical work. We do great electrical work',
            INTROSUBTEXT2: 'We do great electrical work. We do great electrical work. We do great electrical work. We do great electrical work',
            INTROSUBTEXT3: 'We do great electrical work. We do great electrical work. We do great electrical work. We do great electrical work',
            INTROSUBTEXT4: 'We do great electrical work. We do great electrical work. We do great electrical work. We do great electrical work',

            CREWTEXT: 'The key players in the company provide efficient and professional advice, and the work we do talks for itself.',
            CREWPOS1: 'Manager',
            CREWPOS2: 'Project Manager',
            CREWPOS3: 'Project Manager',

            PROJECTSINSPECT:'More info',
            PROJECTSMORE:'More projects',

            CONTACTHEAD1: 'Want more information?',
            CONTACTHEAD2: 'Contact us',
            CONTACTPHONE: 'Phone',
            CONTACTEMAIL: 'E-mail',
            CONTACTADDRESS: 'Address',

            FORMNAME: 'Name',
            FORMEMAIL: 'E-mail address',
            FORMMESSAGE: 'Message',

            et: 'Eesti',
            en: 'English'
        });

    $translateProvider.preferredLanguage('et');
});

mingiAsiCtrl.controller('mingiAsiCtrl', function ($translate) {
    var ctrl = this;

    ctrl.language = 'et';

    ctrl.languages = ['et', 'en'];

    ctrl.updateLanguage = function () {
        $translate.use(ctrl.language);
    };
});
