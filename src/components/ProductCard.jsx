import { Link } from "react-router-dom"

export default function ProductCard({ product }) {
    return (
        <section className="border border-gray-100 rounded shadow hover:shadow-lg transition p-3 mx-5">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded mb-2"
                />
                <div className="pl-5">
                    <h2 className="font-semibold text-lg">{product.title}</h2>
                    <p className="text-gray-600">{product.price}</p>
                    <div className="flex justify-center mt-2">
                        <Link
                            to={`/products/${product.id}`}
                            className="bg-gray-300 px-4 py-1 rounded"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
        </section>
    )
}