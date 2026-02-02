export const products = [
    {
        id: "1",
        name: "Blue Jeans",
        price: "10$",
        category: "men",
        description: "Comfortable blue jeans suitable for special day wear.",
        image: "/images/jeans.jpg",
    },
    {
        id: "2",
        name: "Black Dress",
        price: "12$",
        category: "women",
        description: "Elegant black dress perfect for party.",
        image: "/images/black-dress.jpg",
    },
    {
        id: "3",
        name: "Kids Outfit",
        price: "9$",
        category: "Kids",
        description: "Soft and colorful outfit designed for kids.",
        image: "/images/kid-dress.jpg",
    },
      {
        id: "4",
        name: "kide-dark-jeans",
        price: "$55",
        category: "kids",
        description: "Comfortable dress for your beautiful kids",
        image: "/images/kid-dark-dress.jpg",
    },
    {
        id: "5",
        name: "Formal coat",
        price: "$30",
        category: "men",
        description: "very beautiful jeans and coat.",
        image: "/images/brown.jpg",
    },
    {
        id: "6",
        name: "Brown white",
        price: "$60",
        category: "Clothing",
        description: "Warm jacket ideal for cold weather.",
        image: "/images/brown-white.jpg",
    },
]

export function getProduct(id) {
    return products.find((p) => p.id === id)
}