import { useNavigate, useParams } from "react-router-dom"
import { getProduct } from "../data/data"

export default function ProductDetails() {
    const { id } = useParams()
    const navigate = useNavigate()

    const product = getProduct(id)

    if (!product) {
        return <p>Product Not found!</p>
    }

    return (
        <div className="max-w-xl mx-auto border border-gray-200 shadow rounded p-6 mt-10">
            <h1 className="font-bold text-3xl mb-2">
                {product.name}
            </h1>
            <p className="text-gray-600">{product.description}</p>

            <button
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 mt-4"
                onClick={() => navigate(-1)}
            >
                ⬅ Back
            </button>
        </div> 
    )
}