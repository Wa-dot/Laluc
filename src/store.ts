import { reactive } from "vue";

export const images = reactive({
    products: [
        '/Laluc/packedBottles.jpg',
        'BottleBGless/BrutSmall.png',
        'BottleBGless/BrutRoseSmall.png',
        'BottleBGless/ReserveSmall.png',
        'BottleBGless/EveillescenceSmall.png',
        'BottleBGless//bottleWineTest.png',
        'BottleBGless//bottleWineTest.png',
        'BottleBGless//bottleWineTest.png'],
    employee: [
        '/ppTest.jpg',
        '/ppTest.jpg',
        '/ppTest.jpg',
        '/ppTest.jpg',
        '/ppTest.jpg',
        '/ppTest.jpg'],
    sn: ['/facebook.svg',
        './twitter.svg',
        './insta.svg',
        './linkedin.svg'],
    homePage: ['/Laluc/frontPage.jpg']
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
        instagram: 'https://www.instagram.com/'
    },
});

export const numberInList = reactive({
    products: 4,
    employee: 3,
    sn: 4,
    terroir: 3,
});

