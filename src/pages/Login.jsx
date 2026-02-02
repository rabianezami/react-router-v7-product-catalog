import { useLocation, useNavigate } from "react-router-dom";

export default function Logout({ onLogin }) {
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/dashboard"

    function handleLogin() {
        onLogin()
        navigate(from, { replace: true })
    }

    return (
        <div className="min-h-[70vh] flex items-center justify-center">
            <div className="w-full max-w-sm border border-gray-200 p-6 shadow">
                <h1 className="text-2xl font-semibold mb-2 text-center">
                    Login
                </h1>

                <p className="text-gray-600 text-sm mb-6 text-center">
                    Click below to simulate login.

                </p>

                <button
                    onClick={handleLogin}
                    className="w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded font-semibold"
                >
                    Login
                </button>
            </div>
        </div>
    )
}