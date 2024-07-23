// const rental1 = require('./upload/images/newrental1.jpg');
// const rental2 = require('./upload/images/newrental2.jpg');
// const rental3 = require('./upload/images/newrental3.jpg');
// const rental4 = require('./upload/images/newrental4.jpg');
// const rental5 = require('./upload/images/newrental5.jpg');
// const rental6 = require('./upload/images/newrental6.jpg');
// const rental7 = require('./upload/images/newrental7.jpg');
// const rental8 = require('./upload/images/newrental8.jpg');
// const rental9 = require('./upload/images/newrental9.jpg');
// const rental10 = require('./upload/images/newrental10.jpg');
// const rental11 = require('./upload/images/newrental11.jpg');
// const rental12 = require('./upload/images/newrental12.jpg');
// const rental13 = require('./upload/images/newrental13.jpg');
// const rental14 = require('./upload/images/newrental14.jpg');
// const rental15 = require('./upload/images/newrental15.jpg');
// const rental16 = require('./upload/images/newrental16.jpg');
// const rental17 = require('./upload/images/newrental17.jpg');
// const rental18 = require('./upload/images/newrental18.jpg');
// const rental19 = require('./upload/images/newrental19.jpg');
// const rental20 = require('./upload/images/newrental20.jpg');
// const rental21 = require('./upload/images/newrental21.jpg');
// const rental22 = require('./upload/images/newrental22.jpg');
// const rental23= require('./upload/images/newrental23.jpg');
// const rental24 = require('./upload/images/newrental24.jpg');
// const rental26 = require('./upload/images/newrental26.jpg');
// const rental31 = require('./upload/images/newrental31.jpg');



const list_items = [
    {
        _id: "1",
        name: "Honda Activa",
        //image: rental1,
        price: 500,
        description: "Well maintained vehicle giving an average of 30-35km/litre",
        category: "Scooty"
    },
    {
        _id: "2",
        name: "TVS Jupiter",
       // image: rental2,
        price: 660,
        description: "Well maintained vehicle giving an average of 37-40km/litre",
        category: "Scooty"
    },
    {
        _id: "3",
        name: "Suzuki Access 125",
       // image: rental3,
        price: 460,
        description: "Well maintained vehicle giving an average of 45-50km/litre",
        category: "Scooty"
    }, 
    {
        _id: "4",
        name: "TVS Ntorq 125",
      // image: rental4,
        price: 550,
        description: "Well maintained vehicle giving an average of 40-45km/litre",
        category: "Scooty"
    },
    {
        _id: "5",
        name: "Hero Splendor Plus",
       // image: rental5,
        price: 800,
        description: "Well maintained vehicle giving an average of 70-75km/litre",
        category: "Bike"
    },
    {
        _id: "6",
        name: "Honda CB Shine",
       // image: rental6,
        price: 850,
        description: "Well maintained vehicle giving an average of 72-75km/litre",
        category: "Bike"
    }, 
    {
        _id: "7",
        name: "Bajaj Platina",
       // image: rental7,
        price: 900,
        description: "Well maintained vehicle giving an average of 65-70km/litre",
        category: "Bike"
    }, 
    {
        _id: "8",
        name: "Bajaj Pulsar",
       // image: rental8,
        price: 900,
        description: "Well maintained vehicle giving an average of 65-70km/litre",
        category: "Bike"
    },
    {
        _id: "9",
        name: "Bajaj Chetak",
       // image: rental9,
        price: 1000,
        description: "hello",
        category: "Electric"
    },
    {
        _id: "10",
        name: "Ola Electric S1",
       // image: rental10,
        price: 1200,
        description: "hello",
        category: "Electric"
    }, 
    {
        _id: "11",
        name: "Ampere Magnus Pro",
       // image: rental11,
        price: 970,
        description: "hello",
        category: "Electric"
    },
    {
        _id: "12",
        name: "TVS iQube Electric",
      //  image: rental12,
        price: 950,
        description: "hello",
        category: "Electric"
    },
    {
        _id: "13",
        name: "Maruti Suzuki Swift",
      //  image: rental13,
        price: 3000,
        description: "Well maintained vehicle giving an average of 18-20km/litre",
        category: "5seater"
    },
    {
        _id: "14",
        name: "Hyundai i20",
      //  image: rental14,
        price: 2500,
        description: "Well maintained vehicle giving an average of 15-17km/litre",
        category: "5seater"
    }, 
    {
        _id: "15",
        name: "Maruti Suzuki Baleno",
      //  image: rental15,
        price: 3000,
        description: "Well maintained vehicle giving an average of 23-25km/litre",
        category: "5seater"
    },
    {
        _id: "16",
        name: "Maruti Suzuki Wagonr",
      //  image: rental16,
        price: 3000,
        description: "Well maintained vehicle giving an average of 20-25km/litre",
        category: "5seater"
    }, 
    {
        _id: "17",
        name: "Maruti Suzuki XL6",
     //   image: rental17,
        price: 4000,
        description: "Well maintained vehicle giving an average of 7-9km/litre",
        category: "7seater"
    }, 
    {
        _id: "18",
        name: "Maruti Suzuki Ertiga",
        //image: rental18,
        price: 4500,
        description: "Well maintained vehicle giving an average of 8-10km/litre",
        category: "7seater"
    },
    {
        _id: "19",
        name: "Toyota Innova Crysta",
        //image: rental19 ,
        price: 5000,
        description: "Well maintained vehicle giving an average of 6-7km/litre",
        category: "7seater"
    },
    {
        _id: "20",
        name: "Tata Safari",
      //  image: rental20,
        price: 5500,
        description: "Well maintained vehicle giving an average of 6-8km/litre",
        category: "7seater"
    }, 
    {
        _id: "21",
        name: "Avenger",
      //  image: rental21,
        price: 1400,
        description: "Well maintained vehicle giving an average of 25-30km/litre",
        category: "Bullet"
    },
    {
        _id: "22",
        name: "Royal Enfield Classic 350",
       // image: rental22,
        price: 2200,
        description: "Well maintained vehicle giving an average of 30-35km/litre",
        category: "Bullet"
    },
    {
        _id: "23",
        name: "Himalayan",
     //   image: rental23,
        price: 1150,
        description: "Well maintained vehicle giving an average of 35-40km/litre",
        category: "Bullet"
    },
    {
        _id: "24",
        name: "Interceptor",
       // image: rental24,
        price: 1700,
        description: "Well maintained vehicle giving an average of 30-40km/litre",
        category: "Bullet"
    },
    {
        _id: "25",
        name: "Maruti Suzuki Swift",
      //  image: rental13,
        price: 3000,
        description: "Well maintained vehicle giving an average of 5-8km/litre",
        category: "Manual"
    },
    {
        _id: "26",
        name: "Hyundai i10 ",
       // image: rental26,
        price: 2200,
        description: "Well maintained vehicle giving an average of 6-7km/litre",
        category: "Manual"
    },
    {
        _id: "27",
        name: "Maruti Suzuki Wagonr",
       // image: rental16,
        price: 3000,
        description: "Well maintained vehicle giving an average of 6-7km/litre",
        category: "Manual"
    }, 
    {
        _id: "28",
        name: "Hyundai i20",
       // image: rental14,
        price: 2500,
        description: "Well maintained vehicle giving an average of 5-6km/litre",
        category: "Manual"
    },
    {
        _id: "29",
        name: "Maruti Suzuki Baleno",
       // image: rental15,
        price: 3000,
        description: "Well maintained vehicle giving an average of 3-5km/litre",
        category: "Automatic"
    },
    {
        _id: "30",
        name: "Maruti Suzuki Ertiga",
       // image: rental18,
        price: 4500,
        description: "Well maintained vehicle giving an average of 4-6km/litre",
        category: "Automatic"
    }, 
    {
        _id: "31",
        name: "Hyundai Creta CVT",
       // image: rental31,
        price: 2450,
        description: "Well maintained vehicle giving an average of 5-6km/litre",
        category: "Automatic"
    }, 
    {
        _id: "32",
        name: "Tata Safari",
       // image: rental26,
        price: 5500,
        description: "Well maintained vehicle giving an average of 3-4km/litre",
        category: "Automatic"
    }
]
module.exports={list_items};