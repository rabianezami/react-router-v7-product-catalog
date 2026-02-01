import { NavLink } from "react-router-dom"

export default function Navbar({ links }) {
    return (
       <nav className="bg-gray-100 text-gray-900">
         <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
            <h1 className="font-semibold text-lg">Product App</h1>

            <div className=" flex gap-6">
                {links.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) => 
                         isActive
                           ? "text-gray-700 font-medium"
                           : "hover:underline underline-offset-8"
                       } 
                    >
                      {link.name}
                    </NavLink>
                ))}
            </div>
         </div>
       </nav>
    )
}