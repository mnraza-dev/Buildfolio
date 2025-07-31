import { useState } from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="relative flex items-center border justify-between mx-4 max-md:w-full bg-slate-800 max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-white text-sm">
            <Link to="/">
                <span className='text-2xl font-thin'>
                    Build
                </span>
                <span className='text-2xl text-green-700 font-thin'>
                    folio
                </span>
            </Link>
            <div className="hidden md:flex items-center gap-6 ml-7">
                <Link to="/products" className="relative overflow-hidden h-6 group">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Products</span>
                    <span
                        className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Products</span>
                </Link>
                <Link to="/stories" className="relative overflow-hidden h-6 group">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Stories</span>
                    <span
                        className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Stories</span>
                </Link>
                <Link to="/pricing" className="relative overflow-hidden h-6 group">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Pricing</span>
                    <span
                        className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Pricing</span>
                </Link>
                <Link to="/docs" className="relative overflow-hidden h-6 group">
                    <span className="block group-hover:-translate-y-full transition-transform duration-300">Docs</span>
                    <span
                        className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Docs</span>
                </Link>
            </div>

            <div className="hidden  ml-14 md:flex items-center justify-center gap-4">
                <button
                    className="border border-slate-600 hover:bg-slate-700 px-4 py-2 rounded-full text-sm font-medium transition">
                    Login
                </button>
                <button
                    className="bg-white hover:shadow-[0px_0px_20px_5px] shadow-[0px_0px_4px_0px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
                    Get Started
                </button>
            </div>
            <button
                onClick={toggleMobileMenu}
                className="md:hidden text-white hover:text-gray-300 transition-colors"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg p-4 flex flex-col items-center gap-4 z-50">
                    <Link className="hover:text-indigo-400 transition-colors" to="/products" onClick={() => setIsMobileMenuOpen(false)}>
                        Projects
                    </Link>
                    <Link className="hover:text-indigo-400 transition-colors" to="/stories" onClick={() => setIsMobileMenuOpen(false)}>
                        Skills
                    </Link>
                    <Link className="hover:text-indigo-400 transition-colors" to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                        Templates
                    </Link>
                    <Link className="hover:text-indigo-400 transition-colors" to="/docs" onClick={() => setIsMobileMenuOpen(false)}>
                        Settings
                    </Link>
                    <button
                        className="border border-slate-600 hover:bg-slate-700 px-4 py-2 rounded-full text-sm font-medium transition">
                        Contact
                    </button>
                    <button
                        className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    )
}

export default Navbar