export const products = [
    {
        id: "1",
        title: "Jeans",
        price: "10$",
        image: "/images/jeans.jpg",
    },
    {
        id: "2",
        title: "Dress",
        price: "12$",
        image: "/images/black-dress.jpg",
    },
    {
        id: "3",
        title: "Kids",
        price: "5$",
        image: "/images/kid-dress.jpg",
    },
]

export function getProduct(id) {
    return products.find((p) => p.id === id)
}