import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center">
            <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-300 mb-2">
                404
            </h1>

            <h2 className="text-xl font-semibold mb-4">
                Page not found
            </h2>

            <Link 
            to="/"
            className="bg-gray-300 rounded px-6 py-2 hover:bg-gray-200 font-semibold"
            >
               Go home
            </Link>
        </div>
        </div>
    )
}