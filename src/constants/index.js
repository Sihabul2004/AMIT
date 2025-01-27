import { avatar1, avatar2, avatar3, blog1, blog2, blog3, burger1, burger2, burger3, burger4, burger5, burger6, burger7, drink1, drink2, drink3, drink4, picon1, picon2, picon4, picon5, pizza1, pizza2, pizza3, promo1, promo2, promo3, promo4, promo5, sandwich1, sandwich2 } from "../assets";
import OraimoConch2Earphones from "/products/Oraimo Conch 2 Earphones.jpg";
import OraimoNecklace4Neckband from "/products/Oraimo Nrcklace 4 Neckband.jpg";
import OraimoFreepods3C from "/products/Oraimo Freepods 3C.jpg";
import OraimoRoverRGBPortableBluetoothSpeaker from "/products/Oraimo Rover RGB Portable Bluetooth Speaker.jpg";
import OraimoFreepods4ANC from "/products/Oraimo Freepods 4 ANC.jpg";
import OraimoShark4Neckband from "/products/Oraimo Shark 4 Neckband.jpg";
import OraimoFreepodsLiteBlack from "/products/Oraimo Freepods Lite - Black.png";
import OraimoSpacebudsHybridANC from "/products/Oraimo Spacebuds Hybrid ANC TWS.jpg";
import OraimoFreepodsLiteLakeBlue from "/products/Oraimo Freepods Lite - Lake Blue.png";
import OraimoFreepodsLiteNebulaBlue from "/products/Oraimo Freepods Lite - Nebula Blue.png";
import OraimoTrumpet3Earphones from "/products/Oraimo Trumpet 3 Earphones.jpg";
import OraimoWatch2R from "/products/Oraimo Watch 2R.jpg";
import OraimoWatch4Plus from "/products/Oraimo Watch 4 Plus.jpg";
import OraimoFreepodsProPlus from "/products/Oraimo Freepods Pro+.jpg";
import OraimoHALO2SEarphones from "/products/Oraimo HALO 2S Earphones.jpg";
import OraimoWatchER from "/products/Oraimo Watch ER.jpg";
import OraimoHALO4Earphones from "/products/Oraimo HALO 4 Earphones.jpg";
import OraimoWatchES from "/products/Oraimo Watch ES.jpg";
import OraimoHaloAiryEarphones from "/products/Oraimo Halo Airy Earphones.png";
import OraimoNecklaceLite from "/products/Oraimo Necklace Lite.jpg";
import OraimoNecklaceProNeckband from "/products/Oraimo Necklace Pro Neckband.png";
import OraimoWatchLite from "/products/Oraimo Watch Lite.jpg";
import OraimoWrapPortableSpeaker from "/products/Oraimo Wrap Portable Speaker.jpg";


export const navLinks = [
    {
        id: "home",
        title: "Home",
        link : './'
    },
    {
        id: "features",
        title: "Shop",
        link : './shop'
    },
    {
        id: "product",
        title: "Account",
        link : './signup'
    },
    {
        id: "clients",
        title: "Blogs",
        link : './blogs'
    },
];

export const category =[
    {
        id: 1,
        title: "Earphones",
        icon: picon2,
        description: "Its is all about Drinks",
        img: promo2
    },
    {
        id: 2,
        title: "Neckband",
        icon: picon5,
        description: "Its is all about Meat",
        img: promo3
    },
    {
        id: 3,
        title: "Speaker",
        icon: picon5,
        description: "Its is all about Meat",
        img: promo3
    },

]

export const food = [
    {
        id: 0,
        Name: "Conch 2",
        pic: OraimoConch2Earphones,
        category: "Earphones",
        Price: 10,
        subTitle: "6 months warranty",
        discount: 10,
        O_price: 12,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 1,
        Name: "Necklace 4",
        pic: OraimoNecklace4Neckband,
        category: "Neckband",
        Price: 15,
        subTitle: "1 year warranty",
        discount: 15,
        O_price: 18,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 2,
        Name: "Freepods 3C",
        pic: OraimoFreepods3C,
        category: "Earbuds",
        Price: 25,
        subTitle: "1 year warranty",
        discount: 20,
        O_price: 30,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 3,
        Name: "Rover RGB",
        pic: OraimoRoverRGBPortableBluetoothSpeaker,
        category: "Speaker",
        Price: 35,
        subTitle: "1 years warranty",
        discount: 10,
        O_price: 40,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 4,
        Name: "Freepods 4 ANC",
        pic: OraimoFreepods4ANC,
        category: "Earbuds",
        Price: 40,
        subTitle: "1 year warranty",
        discount: 15,
        O_price: 47,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 5,
        Name: "Shark 4 Neckband",
        pic: OraimoShark4Neckband,
        category: "Neckband",
        Price: 20,
        subTitle: "6 months warranty",
        discount: 5,
        O_price: 22,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 6,
        Name: "Freepods Lite",
        pic: OraimoFreepodsLiteBlack,
        category: "Earbuds",
        Price: 18,
        subTitle: "1 year warranty",
        discount: 10,
        O_price: 20,
        clicked: false,
        brand: "Oraimo",
        color:"Black"
        
    },
    {
        id: 7,
        Name: "Hybrid ANC TWS",
        pic: OraimoSpacebudsHybridANC,
        category: "Earbuds",
        Price: 50,
        subTitle: "1 year warranty",
        discount: 10,
        O_price: 55,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 8,
        Name: "Freepods Lite",
        pic: OraimoFreepodsLiteLakeBlue,
        category: "Earbuds",
        Price: 18,
        subTitle: "1 year warranty",
        discount: 10,
        O_price: 20,
        clicked: false,
        brand: "Oraimo",
        color:"Lake Blue"
    },
    {
        id: 9,
        Name: "Freepods Lite",
        pic: OraimoFreepodsLiteNebulaBlue,
        category: "Earbuds",
        Price: 18,
        subTitle: "1 year warranty",
        discount: 10,
        O_price: 20,
        clicked: false,
        brand: "Oraimo",
        color:"Nebula Blue"
    },
    {
        id: 10,
        Name: "Trumpet 3",
        pic: OraimoTrumpet3Earphones,
        category: "Earphones",
        Price: 12,
        subTitle: "6 months warranty",
        discount: 8,
        O_price: 14,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 11,
        Name: "Watch 2R",
        pic: OraimoWatch2R,
        category: "Watch",
        Price: 60,
        subTitle: "1 years warranty",
        discount: 15,
        O_price: 70,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 12,
        Name: "Watch 4 Plus",
        pic: OraimoWatch4Plus,
        category: "Watch",
        Price: 75,
        subTitle: "1 years warranty",
        discount: 20,
        O_price: 90,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 13,
        Name: "Freepods Pro+",
        pic: OraimoFreepodsProPlus,
        category: "Earbuds",
        Price: 45,
        subTitle: "1 year warranty",
        discount: 10,
        O_price: 50,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 14,
        Name: "HALO 2S",
        pic: OraimoHALO2SEarphones,
        category: "Earphones",
        Price: 10,
        subTitle: "6 months warranty",
        discount: 10,
        O_price: 12,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 15,
        Name: "Watch ER",
        pic: OraimoWatchER,
        category: "Watch",
        Price: 65,
        subTitle: "1 years warranty",
        discount: 15,
        O_price: 75,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 16,
        Name: "HALO 4",
        pic: OraimoHALO4Earphones,
        category: "Earphones",
        Price: 15,
        subTitle: "6 months warranty",
        discount: 10,
        O_price: 17,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 17,
        Name: "Watch ES",
        pic: OraimoWatchES,
        category: "Watch",
        Price: 70,
        subTitle: "1 years warranty",
        discount: 20,
        O_price: 85,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 18,
        Name: "Halo Airy",
        pic: OraimoHaloAiryEarphones,
        category: "Earphones",
        Price: 15,
        subTitle: "6 months warranty",
        discount: 10,
        O_price: 17,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 19,
        Name: "Necklace Lite",
        pic: OraimoNecklaceLite,
        category: "Neckband",
        Price: 12,
        subTitle: "6 months warranty",
        discount: 5,
        O_price: 14,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 20,
        Name: "Necklace Pro",
        pic: OraimoNecklaceProNeckband,
        category: "Neckband",
        Price: 25,
        subTitle: "1 year warranty",
        discount: 10,
        O_price: 28,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 21,
        Name: "Watch Lite",
        pic: OraimoWatchLite,
        category: "Watch",
        Price: 40,
        subTitle: "1 years warranty",
        discount: 10,
        O_price: 45,
        clicked: false,
        brand: "Oraimo"
    },
    {
        id: 22,
        Name: "Wrap Portable Speaker",
        pic: OraimoWrapPortableSpeaker,
        category: "Speaker",
        Price: 30,
        subTitle: "1 years warranty",
        discount: 10,
        O_price: 35,
        clicked: false,
        brand: "Oraimo"
    }
];


export const people = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'web developer',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'Anna Johnson',
        job: 'web designer',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'Peter jones',
        job: 'intern',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text:
            'Sriracha literally flexitarian . Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie,lette post-ironic jianbing swag.humblebrag pickled coloring book salvia hoodie',
    },
    {
        id: 4,
        name: 'Bill Aderson',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
        id: 5,
        name: 'Annia Jhonie',
        image:avatar3,
        text:
            '. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
        id: 6,
        name: 'Jamie Clark',
        image:avatar2,
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
        id: 7,
        name: 'Tim David',
        image:avatar1,
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

export const blogcard = [
    {
        id:1,
        author : "Abdullah Assi",
        date: "1-Sep-2023",
        title: "What Do You Think About Cheese Pizza Recipes?",
        desc: "Financial experts support or help you to to find out which way you can raise your funds",
        pic :  blog1,
        time: "5 min read"
    },
    {
        id:2,
        author : "Abdullah Assi",
        date: "1-Sep-2023",
        title: "What Do You Think About Cheese Pizza Recipes?",
        desc: "Financial experts support or help you to to find out which way you can raise your funds",
        pic :  blog2,
        time: "15 min read"
    },
    {
        id:3,
        author : "Abdullah Assi",
        date: "1-Sep-2023",
        title: "What Do You Think About Cheese Pizza Recipes?",
        desc: "Financial experts support or help you to to find out which way you can raise your funds",
        pic :  blog3,
        time: "5 min read"
    },
]