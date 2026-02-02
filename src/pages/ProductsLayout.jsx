import { Outlet } from "react-router-dom";

export default function ProductLayout() {
    return (
        <section className="max-w-6xl mx-auto py-8">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    Products
                </h1>
            </header>

            <Outlet />
        </section>
    )
}