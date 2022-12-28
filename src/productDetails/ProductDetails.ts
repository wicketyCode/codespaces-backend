const productDetails = [
    {
        id: 1,
        name: "T-shirt",
        price: 25,
        description: "A comfortable cotton t-shirt",
        images: [
            "https://picsum.photos/id/10/200/300",
            "https://picsum.photos/id/11/200/300",
            "https://picsum.photos/id/12/200/300",
        ],
        availableSizes: ["S", "M", "L", "XL"],
        material: "Cotton",
        brand: "Nike",
        madeIn: "USA",
        reviews: [
            {
                user: "John",
                rating: 5,
                review: "Great t-shirt! Comfortable and stylish.",
            },
            {
                user: "Sarah",
                rating: 4,
                review: "Good t-shirt. A little pricey though.",
            },
        ],
    },
    {
        id: 2,
        name: 'Jeans',
        price: 50,
        description: 'A classic pair of jeans',
        images: [
            'https://picsum.photos/id/20/200/300',
            'https://picsum.photos/id/21/200/300',
            'https://picsum.photos/id/22/200/300'
        ],
        availableSizes: ['28', '30', '32', '34'],
        material: 'Denim',
        brand: 'Levis',
        madeIn: 'Mexico',
        reviews: [
            {
                user: 'Mike',
                rating: 4,
                review: 'Good quality jeans. Fit well.'
            },
            {
                user: 'Jessica',
                rating: 3,
                review: 'Just okay. Not worth the price.'
            }
        ]
    },
    {
        id: 3,
        name: 'Dress',
        price: 75,
        description: 'A stylish dress for any occasion',
        images: [
            'https://picsum.photos/id/30/200/300',
            'https://picsum.photos/id/31/200/300',
            'https://picsum.photos/id/32/200/300'
        ],
        availableSizes: ['XS', 'S', 'M', 'L', 'XL'],
        material: 'Polyester',
        brand: 'Calvin Klein',
        madeIn: 'China',
        reviews: [
            {
                user: 'Emily',
                rating: 5,
                review: 'Love this dress! So comfortable and looks great on.'
            },
            {
                user: 'Alex',
                rating: 3,
            },
            {
                user: 'Katie',
                rating: 4,
                review: 'I really like this dress. It fits well and is very flattering.'
            }
        ]
    }
];

export default productDetails;
