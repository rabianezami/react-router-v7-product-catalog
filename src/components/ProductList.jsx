import { products } from "../data/data"
import ProductCard from "./ProductCard";

export default function ProductList() {
    return (
        <div className="max-w-6xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6 pl-5 text-gray-800">
                Products
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {products.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    )
}