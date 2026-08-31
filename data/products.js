    class Product{

        constructor(productDetails){
           this.id = productDetails.id,
           this.category = productDetails.category,
           this.name = productDetails.name,
           this.image = productDetails.image,
           this.price = productDetails.price
        }
    }

    export const products = [
        {
        id : 'jersey-1',
        category : 'jerseyChales',
        name : 'Jersey Lycra - Pistache',
        image : 'images/jersey/jerseyPistachio.jpg',
        price : 80.00,
    },
    {
        id : 'jersey-2',
        category : 'jerseyChales',
        name : 'Jersey Lycra - Camel',
        image : 'images/jersey/jerseyCamel.jpg',
        price : 80.00,
    },
    {
        id : 'jersey-3',
        category : 'jerseyChales',
        name : 'Jersey Lycra - Blanche Neige',
        image : 'images/jersey/jesrseyLuxWhite.webp',
        price : 80.00,
    },
     
     
     {
        id : 'jersey-4',
        category : 'jerseyChales',
        name : 'Jersey Lycra - Sage',
        image : 'images/jersey/jerseySage.webp',
        price : 80.00,
    },
     {
        id : 'jersey-5',
        category : 'jerseyChales',
        name : 'Jersey Lycra - Mauve',
        image : 'images/jersey/jerseyMauve.webp',
        price : 80.00,
    },
    {
        id : 'jersey-6',
        category : 'jerseyChales',
        name : 'Jersey Lycra - Classic Noir',
        image : 'images/jersey/jerseyBlack.webp',
        price : 80.00,
    },



     {
        id : 'chalesSilks-1',
        category : 'chalesSilks',
        name : 'Chales Silks - Silk Autumn',
        image : 'images/silkChale/silkAutumn.jpg',
        price : 120.00,
    },
    {
       id : 'chalesSilks-2',
       category : 'chalesSilks',
        name : 'Chales Silks - Silk Cream',
        image : 'images/silkChale/silkCream.jpg',
        price : 120.00,
    },
    {
        id : 'chalesSilks-3',
        category : 'chalesSilks',
        name : 'Chales Silks - Silk Pink',
        image : 'images/silkChale/silkPink.jpg',
        price : 120.00,
    },
     
     
     {
        id : 'chalesSilks-4',
        category : 'chalesSilks',
        name : 'Chales Silks - Silk Luxury',
        image : 'images/silkChale/silkLuxury.jpg',
        price : 120.00,
    },
     {
        id : 'chalesSilks-5',
        category : 'chalesSilks',
        name : 'Chales Silks - Silk Violet',
        image : 'images/silkChale/silkViolet.jpg',
        price : 120.00,
    },


       {
        id : 'foulardsAMotifs-1',
        category : 'foulardsAMotifs',
        name : 'Foulards A Motifs - Foulard Red Rose',
        image : 'images/silkSquare/squareRedRose.png',
        price : 120.00,
    },
    {
        id : 'foulardsAMotifs-2',
        category : 'foulardsAMotifs',
        name : 'Foulards A Motifs - Foulard Automn',
        image : 'images/silkSquare/squareAutumn.png',
        price : 120.00,
    },
    {
        id : 'foulardsAMotifs-3',
        category : 'foulardsAMotifs',
        name : 'Foulards A Motifs - Foulard Pink Rose',
        image : 'images/silkSquare/squarePinkRose.png',
        price : 120.00,
    },
     
     
     {
        id : 'foulardsAMotifs-4',
        category : 'foulardsAMotifs',
        name : 'Foulards A Motifs - Foulard Blue',
        image : 'images/silkSquare/squareBlue.png',
        price : 120.00,
    },
     {
        id : 'foulardsAMotifs-5',
        category : 'foulardsAMotifs',
        name : 'Foulards A Motifs - Foulard Dual',
        image : 'images/silkSquare/squareDual.png',
        price : 120.00,
    }

].map((productDetails) => {
    return new Product(productDetails);
})

console.log(products);