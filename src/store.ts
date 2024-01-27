import { reactive } from "vue";

export const images = reactive({
    products: [
        'LalucBottles/BRUT.png',
        'LalucBottles/BRUT ROSE.png',
        'LalucBottles/RESERVE.png',
        'LalucBottles/EVEILLESCENCE.png',
        'LalucBottles/ratafia.png'],
    sn: ['/facebook.svg',
        './twitter.svg',
        './insta.svg',
        './linkedin.svg'],
    homePage: ['frontPage.webp'],
    map: ['mapChampagne.webp',
        'mapChampagneFocus.webp'],
    logo: ['VDC-logo.webp'],
});

export const information = reactive({
    general: {
        name: 'Laluc',
    },

    contact: {
        address: '4 rue de Bellevue',
        city: 'BRIMONT',
        postalCode: '51220',
        country: 'France',
        phone: '+33 326080416',
        phone2: '+33 622248963',
        email: 'cxlaluc@orange.fr',
        facebook: 'https://www.facebook.com/',
        instagram: 'https://www.instagram.com/champagne.xavierlaluc/'
    },
});

export const numberInList = reactive({
    products: 5,
    sn: 4,
    terroir: 3,
});

