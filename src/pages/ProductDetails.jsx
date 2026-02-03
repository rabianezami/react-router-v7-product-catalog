import { Link, useNavigate, useParams } from "react-router-dom"
import { getProduct } from "../data/data"

export default function ProductDetails() {
    const { id } = useParams()
    const navigate = useNavigate()

    const product = getProduct(id)

    if (!product) {
        <div className="text-center mt-10">
            <h2 className="text-xl font-semibold mb-2">
                Product not found
            </h2>
            <p className="text-gray-600 mb-4">
                The product you are looking not exist.
            </p>
            <Link
                to="/products"
                className="underline"
            >
                Back to Products
            </Link>
        </div>
    }

    return (
        <div className="max-w-xl mx-auto border border-gray-200 shadow rounded p-6 mt-10">
            <h1 className="font-bold text-3xl mb-2">
                {product.name}
            </h1>

            <p className="text-gray-700 mb-1">
                <strong>Price:</strong> {product.price}
            </p>

            <p className="text-gray-700 mb-1">
                <strong>Category:</strong> {product.category}
            </p>

            <p className="text-gray-600 mt-3">
                {product.description}
            </p>

            <button
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 mt-4"
                onClick={() => navigate(-1)}
            >
                ⬅ Back
            </button>
        </div>
    )
}