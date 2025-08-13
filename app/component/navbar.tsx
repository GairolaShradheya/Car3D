import React from 'react'

function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#0d0d0d] shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 h-[10vh] flex items-center justify-between">
                <div className="text-2xl font-bold text-red-500">Car3D</div>
                <nav className="space-x-6 text-sm uppercase tracking-wide font-bold">
                    <a href="#home" className="hover:text-red-400 transition">Home</a>
                    <a href="Cars/1" className="hover:text-red-400 transition">Models</a>
                    {/* <a href="#gallery" className="hover:text-red-400 transition">Gallery</a> */}
                    <a href="#about" className="hover:text-red-400 transition">About</a>
                    <a href="#contact" className="hover:text-red-400 transition">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
