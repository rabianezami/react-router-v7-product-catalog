import { NavLink, Outlet } from "react-router-dom";
import Navbar from "..components/Navbar";

export default function Layout({ isAuth }) {
    return (
        <div>
            <Navbar isAuth={isAuth} links={NavLink}/>
            <main className="max-w-6xl mx-auto px-4 py-4">
                <Outlet />
            </main>
        </div>
    )
}