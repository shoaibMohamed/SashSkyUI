// Outlet id's
// Sash Cafe = 1
// Sash Sky = 2
// Sash Express =3
// Sash Urban = 4
// The id's start with 1 digit and then 2 digits for every level
export const SASH_SKY_MENU = [
    {   
        id:1,
        name: "Soups",
        description: "Enjoy our fresh soups",
        availableOutlets:[2],
        dishes:[
            {   
                id:101,
                isSelected:false,
                name:"Cream Of Chicken",
                description:"A classic go to option for chickentarians",
                price:"290",
                diet:"N",
                availableOutlets:[2]
            },
            {   
                id:102,
                isSelected:false,
                name:"Lemon And Chicken",
                description:"Balanced blend with chinese spices",
                price:"280",
                diet:"N",
                availableOutlets:[2]
            }
        ]
    },
    {   
        id:2,
        name: "Appetizers",
        description: "Enjoy our fresh appetizers",
        availableOutlets:[2],
        dishes:[
            {   
                id:201,
                isSelected:false,
                name:"Peri Peri Fries",
                description:"Served with garlic mayonnaise",
                price:"180",
                diet:"V",
                availableOutlets:[2]
            },
            {
                id:202,
                isSelected:false,
                name:"Crumfried Mushroom",
                description:"Stuffed with cheese and jalapenos and served with creamy dip",
                price:"285",
                diet:"V",
                availableOutlets:[2]
            },
            {
                id:203,
                isSelected:false,
                name:"Jalapeno Poppers",
                description:"Mouth melting balls with pepper mayonnaise",
                price:"215",
                diet:"V",
                availableOutlets:[2]
            },
            {
                id:204,
                isSelected:false,
                name:"Garlic Herbed Bun",
                description:"Inhouse bun topped with herbed garlic butter and seasoned with peri peri seasoning",
                price:"180",
                diet:"V",
                availableOutlets:[2]
            }
        ]
    },
    {
        id:3,
        name: "TandoorPot Oven",
        description: "Enjoy our freshly prepared tandoori",
        availableOutlets:[2],
        dishes: [
            {
                id:301,
                isSelected:false,
                name:"Punjabi Kukkad",
                description:"Spiced Chicken Marinated in Yougurt and Masalas, roasted in clay pot ove, finished with butter and served with tangy onion salad and mint chutney",
                price:"299/550",
                diet:"N",
                availableOutlets:[2]
            },
            {
                id:302,
                isSelected:false,
                name:"Ancestral Chicken Tikka",
                description:"The world fav indian chicken prepration made with homemade spice marinade",
                price:"325",
                diet:"N",
                availableOutlets:[2]
            },
            {
                id:303,
                isSelected:false,
                name:"Cheesy Malai Tikka",
                description:"Creamy suclent chicken roasted in claypot oven and served with tangy salad and chutney",
                price:"345",
                diet:"N",
                availableOutlets:[2]
            },
            {
                id:304,
                isSelected:false,
                name:"Tangdi Kebab",
                description:"Chicken Drumsticks marinated with chef's special masala cooked to prefection",
                price:"325",
                diet:"N",
                availableOutlets:[2]
            },
            {
                id:305,
                isSelected:false,
                name:"Tandoori wings",
                description:"Smokey Flavoured, marinated in inidan spices and yougurt and grilled to perfection, will blow your mind away",
                price:"299/399",
                diet:"N",
                availableOutlets:[2]
            },
            {
                id:306,
                isSelected:false,
                name:"Ajwaini Fish Tikka",
                description:"All time Classic Fish Tikka, laced with robust spices",
                price:"",
                diet:"N",
                availableOutlets:[2]
            },
            {
                id:307,
                isSelected:false,
                name:"Tandoori Fish Of The Day",
                description:"Please ask for chef",
                price:"",
                diet:"N",
                availableOutlets:[2]
            },
            {
                id:308,
                isSelected:false,
                name:"Achari Jhingha",
                description:"Pickled Flavour marinated Prawns, served with salad and chutney",
                price:"",
                diet:"N",
                availableOutlets:[2]
            },
            {
                id:309,
                isSelected:false,
                name:"Hara Bhara Kebab",
                description:"shallow fried vgetable patty flavored with sourthern spices",
                price:"",
                diet:"V",
                availableOutlets:[2]
            },
            {
                id:310,
                isSelected:false,
                name:"Kurkuri Cheese Kebab",
                description:"Peas and aloo patty filled with mouth melting cheese, served with mint chutney",
                price:"",
                diet:"V",
                availableOutlets:[2]
            },
            {
                id:311,
                isSelected:false,
                name:"Dahi ke Sholey",
                description:"A better version of dahi kebab",
                price:"",
                diet:"V",
                availableOutlets:[2]
            },
            {
                id:312,
                isSelected:false,
                name:"Veg Sheek",
                description:"All time favourite for vegetarians",
                price:"",
                diet:"V",
                availableOutlets:[2]
            },
            {
                id:313,
                isSelected:false,
                name:"Achari Paneer Tikka",
                description:"Punjabi pickled marinated cottage cheese, roasted in clay pot oven",
                price:"",
                diet:"V",
                availableOutlets:[2]
            },
            {
                id:314,
                isSelected:false,
                name:"Malai Broccoli",
                description:"Creamy marinated florets flavored with whole garam masala, roasted in clay pot oven",
                price:"",
                diet:"V",
                availableOutlets:[2]
            },
            {
                id:315,
                isSelected:false,
                name:"Mirchi Bhare Aluu",
                description:"Potatoes filled khoya, chilies and nuts, marinated in spicy masala and roasted in clay pot oven",
                price:"",
                diet:"V",
                availableOutlets:[2]
            },
            {
                id:316,
                isSelected:false,
                name:"Afghan Se Bulai Chap",
                description:"Soya chaap marinated with afghan flavours and roasted with smokey flavours",
                price:"",
                diet:"V",
                availableOutlets:[2]
            },
            {
                id:317,
                isSelected:false,
                name:"South Delhi Aunty Chap",
                description:"Masala marinated chaap with smokey flavours, served with green chutney",
                price:"",
                diet:"V",
                availableOutlets:[2]
            },
            {
                id:318,
                isSelected:false,
                name:"Jain Special Mangodi",
                description:"overnight soaked moondal, deepfried with chillies and nuts",
                price:"",
                diet:"V",
                availableOutlets:[2]
            }
        ]
    }
]
