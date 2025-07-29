import React from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className="flex items-center border mx-4 max-md:w-full bg-primary max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-white text-sm">
            <Link to="#">
                Portfolio
            </Link>
            <div className="hidden md:flex items-center gap-6 ml-7">
                <Link to="#" className="relative overflow-hidden h-6 group">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Products</span>
                    <span
                        className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Products</span>
                </Link>
                <Link to="#" className="relative overflow-hidden h-6 group">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Stories</span>
                    <span
                        className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Stories</span>
                </Link>
                <Link to="#" className="relative overflow-hidden h-6 group">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Pricing</span>
                    <span
                        className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Pricing</span>
                </Link>
                <Link to="#" className="relative overflow-hidden h-6 group">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Docs</span>
                    <span
                        className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Docs</span>
                </Link>
            </div>

            <div className="hidden ml-14 md:flex items-center gap-4">
                <button
                    className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
                    Contact
                </button>
                <button
                    className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
                    Get Started
                </button>
            </div>
            <button id="menuToggle" className="md:hidden text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div id="mobileMenu" className="absolute hidden top-48 text-base left-0 bg-black w-full flex-col items-center gap-4">
                <Link className="hover:text-indigo-600" to="#">
                    Products
                </Link>
                <Link className="hover:text-indigo-600" to="#">
                    Customer Stories
                </Link>
                <Link className="hover:text-indigo-600" to="#">
                    Pricing
                </Link>
                <Link className="hover:text-indigo-600" to="#">
                    Docs
                </Link>
                <button
                    className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
                    Contact
                </button>
                <button
                    className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
                    Get Started
                </button>
            </div>
        </nav>


    )
}

export default Navbar