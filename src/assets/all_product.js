import p1_img from '../assets/p1_img.avif'
import p2_img from '../assets/p2_img.avif'
import p3_img from '../assets/p3_img.webp'
import p4_img from '../assets/p4_img.jpg'
import p5_img from '../assets/p5.png'
import p6_img from '../assets/p6_img.webp'
import p7_img from '../assets/kid1.jpg'
import p8_img from '../assets/kid4.webp'
import kids_image5 from '../assets/Kids_image5.jpg'
import kids_image6 from '../assets/Kids_image6.jpg'
import kids_image7 from '../assets/Kids_image7.jpg'
import kids_image8 from '../assets/Kids_image8.jpg'
import kids_image9 from '../assets/kids_image9.jpg'
import mens_image_8 from '../assets/mens_image_8.jpg'
import mens_image_6 from '../assets/mens_image_6.jpg'
import mens_image_7 from '../assets/mens_image_7.jpg'
import mens_image_5 from '../assets/mens_image5.jpg'


//import p12_img from '../assets/women6.webp'
//import p13_img from '../assets/men7.jfif'
//import p14_img from '../assets/women7.webp'
//import p15_img from '../assets/men8.jpg'
//import p16_img from '../assets/women8.jfif'
// import p17_img from '../assets/p1.jpg'
// import p18_img from '../assets/p1.jpg'
// import p19_img from '../assets/p1.jpg'
// import p20_img from '../assets/p1.jpg'
//import p21_img from '../assets/kid1.jpg'
// import p22_img from '../assets/p1.jpg'
//import p23_img from '../assets/kid2.jfif'
// import p24_img from '../assets/p1.jpg'
//import p25_img from '../assets/kid3.jfif'
// import p26_img from '../assets/p1.jpg'
//import p27_img from '../assets/kid4.webp'
// import p28_img from '../assets/p1.jpg'
//import p29_img from '../assets/kid5.jfif'
// import p30_img from '../assets/p1.jpg'
//import p31_img from '../assets/kid6.jfif'
// import p32_img from '../assets/p1.jpg'
//import p33_img from '../assets/kid7.webp'
// import p34_img from '../assets/p1.jpg'
//import p35_img from '../assets/kid8.jfif'
// import p36_img from '../assets/p1.jpg'
let all_product = [
    {
        id: 1,
        name: "Kurti",
        category: "women",
        image: p1_img,
        new_price: 50.0,
        old_price: 80.5
    },

    { id: 2, name: "Jeans", category: "Men", image:p2_img, new_price: 60.0, old_price: 90.5 },
    { id: 3, name: "Dress", category: "Women", image:p3_img, new_price: 75.0, old_price: 120.0 },
    { id: 4, name: "Jersey", category: "Men", image: p4_img, new_price: 90.0, old_price: 140.0 },
    { id: 5, name: "T-Shirt", category: "Men", image: p5_img, new_price: 45.0, old_price: 70.0 },
    { id: 6, name: "Saree", category: "Women", image: p6_img, new_price: 85.0, old_price: 130.0 },
    { id: 7, name: "Shirt", category: "Kids", image: p7_img, new_price: 95.0, old_price: 150.0 },
    { id: 8, name: "Top", category: "Kids", image: p8_img, new_price: 55.0, old_price: 100.0 },
    { id: 9, name: "Frock", category: "Kids", image: kids_image5, new_price: 55.0, old_price: 100.0 },
    { id: 10, name: "Jacket", category: "Kids", image: kids_image6, new_price: 65.0, old_price: 100.0 },
    { id: 11, name: "Jeans", category: "Kids", image: kids_image7, new_price: 75.0, old_price: 100.0 },
    { id: 12, name: "Frock/jacket-combo", category: "Kids", image: kids_image8, new_price: 87.0, old_price: 100.0 },
    { id: 13, name: "jeans", category: "Kids", image: kids_image9, new_price: 90.0, old_price: 100.0 },
    { id:15, name: "Jym_outfit", category: "Men", image:p1_img, new_price: 60.0, old_price: 90.5 },
    { id:16, name: "Jeans", category: "Men", image:mens_image_8, new_price: 60.0, old_price: 90.5 },
     { id:17, name: "Shirt", category: "Men", image:mens_image_6, new_price: 60.0, old_price: 90.5 },
    { id:18, name: "Coat_paint", category: "Men", image:mens_image_7, new_price: 60.0, old_price: 90.5 },
        { id:19, name: "print_shirt", category: "Men", image:mens_image_5, new_price: 60.0, old_price: 90.5 },
    
          
   // { id: 9, name: "Shirt", category: "men", image: p9_img, new_price: 70.0, old_price: 110.0 },
    //{ id: 10, name: "Jumpsuit", category: "women", image: p10_img, new_price: 88.0, old_price: 135.0 },
   // { id: 11, name: "Sweater", category: "men", image: p11_img, new_price: 92.0, old_price: 145.0 },
    //{ id: 12, name: "Gown", category: "women", image: p12_img, new_price: 99.0, old_price: 160.0 },
    //{ id: 13, name: "Shorts", category: "men", image: p13_img, new_price: 40.0, old_price: 65.0 },
    //{ id: 14, name: "Top", category: "women", image: p14_img, new_price: 52.0, old_price: 85.0 },
    //{ id: 15, name: "Kurta", category: "men", image: p15_img, new_price: 78.0, old_price: 115.0 },
    //{ id: 16, name: "Skirt", category: "women", image:p16_img, new_price: 73.0, old_price: 110.0 },

    //{ id: 21, name: "Denim Shirt", category: "kid", image: p21_img, new_price: 85.0, old_price: 140.0 },
   
    //{ id: 23, name: "Cargo Pants", category: "kid", image:p23_img , new_price: 88.0, old_price: 130.0 },
    
    //{ id: 25, name: "Trousers", category: "kid", image:p25_img , new_price: 76.0, old_price: 120.0 },
    //{ id: 27, name: "Tank Top", category: "kid", image: p27_img, new_price: 49.0, old_price: 80.0 },
   
    //{ id: 29, name: "Formal Pants", category: "kid", image:p29_img, new_price: 98.0, old_price: 160.0 },

    //{ id: 31, name: "Leather Jacket", category: "kid", image: p31_img, new_price: 150.0, old_price: 250.0 },

    //{ id: 33, name: "Gym Shorts", category: "kid", image: p33_img, new_price: 55.0, old_price: 90.0 },
  
    //{ id:35, name: "Casual Blazer", category: "kid", image: p35_img, new_price: 105.0, old_price: 170.0 },
    
]

export default all_product;