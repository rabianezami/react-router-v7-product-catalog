import Navbar from "./components/Navbar";

const navLinks = [
    {name: "Home", path: "/"},
    {name: "Products", path: "/products"},
    {name: "Dashboard", path: "/dashboard"},
]

export default function App() {
   return (
    <Navbar links={navLinks}/>
   )
}