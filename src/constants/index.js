import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../nike_landing_assets/assets/icons";
import { Nike_Killshot1, Nike_Killshot2, Nike_Killshot3, Nike_Killshot4, Nike_Killshot5, Nike_air_1, Nike_air_2, Nike_air_3, Nike_air_4, Nike_air_5, bigShoe1, bigShoe2, bigShoe3, black_shoe1, black_shoe2, black_shoe3, black_shoe4, black_shoe5, customer1, customer2, jorden_shoe1, jorden_shoe2, jorden_shoe3, jorden_shoe4, jorden_shoe5, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../nike_landing_assets/assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {   id: 'SHOE-001',
        imgURL: black_shoe1,
        thumbnail:[black_shoe1,black_shoe2,black_shoe3,black_shoe4,black_shoe5],
        name: "Nike Revolution 6 FlyEase",
        price: "₹ 3,695.00",
        color: ['Black','White','Iron Grey'],
        size: ['UK 6(EU 40)','UK 6.5','UK 7','UK 7.5','UK 8','UK 8.5','UK 9','UK 9.5','UK 10','UK 10.5'],
        material: 'Leather and synthetic upper, rubber sole',
        desc:"Here's to new beginnings between you and the pavement. We know comfort is key to a successful run, so we made sure your steps are cushioned and flexible for a soft ride. A strap and wraparound zip makes these shoes super-easy to get on and off. It's an evolution of a favourite, with a breathable design made with at least 20% recycled content by weight.",
    },
    {
        id:'AJ-01',
        imgURL: jorden_shoe1,
        thumbnail:[jorden_shoe1,jorden_shoe2,jorden_shoe3,jorden_shoe4,jorden_shoe5],
        name: "Jordan 1 Mid",
        price: "₹ 5,995.00",
        color: ['Aquatone','White','Celestial Gold'],
        size: ['UK 2.5','UK 6(EU 40)','UK 6.5','UK 7','UK 7.5','UK 8','UK 8.5','UK 9','UK 9.5','UK 10','UK 10.5'],
        material: 'Outfit your little one with the timeless style of the AJ1 in the Jordan 1 Mid. Coming in all kinds of fun and classic colours, it has stretchy laces and a fold-over strap to let kids put on their own shoes.',
        desc:'The Jordan 1 Mid is a shoe that combines style and performance. The leather and synthetic upper provides durability and support, while the rubber sole offers excellent traction on the court. Available in black and white, this shoe is a must-have for any basketball player or sneaker enthusiast.',
    },
    {
        id:'NK-AJ01',
        imgURL: Nike_air_1,
        thumbnail:[Nike_air_1,Nike_air_2,Nike_air_3,Nike_air_4,Nike_air_5],
        name: "Nike Air Max 1",
        price: " ₹ 12,795.00",
        color: ['Black','White'],
        size: ['UK 6(EU 40)','UK 6.5','UK 7','UK 7.5','UK 8','UK 8.5','UK 9','UK 9.5','UK 10','UK 10.5'],
        material: 'Leather and synthetic upper, rubber sole',
        desc:"Meet the leader of the pack. Walking on clouds above the noise, the Air Max 1 blends timeless design with cushioned comfort. Sporting a fast-paced look, wavy mudguard and Nike Air, this classic icon hit the scene in '87 and continues to be the soul of the franchise today.",
    },
    {
        id:'AIRJORDAN-01',
        imgURL: Nike_Killshot1,
        thumbnail:[Nike_Killshot1,Nike_Killshot2,Nike_Killshot3,Nike_Killshot4,Nike_Killshot5],
        name: "Nike Killshot 2 Leather",
        price: "₹ 7,995.00",
        color: ['Sail/Gum', 'Yellow/Oil Grey'],
        size: ['UK 6(EU 40)','UK 6.5','UK 7','UK 7.5','UK 8','UK 8.5','UK 9','UK 9.5','UK 10','UK 10.5'],
        material: 'Leather and synthetic upper, rubber sole',
        desc:"Inspired by the original low-profile tennis shoe, the Nike Killshot 2 updates the upper with a variety of textured leathers to create a fresh look. From soft suedes to smooth leathers with the perfect sheen, it's court-side attitude with a modern touch. To prove you're on top, the rubber gum sole adds the cherry on bottom.",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];