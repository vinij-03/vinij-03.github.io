import { useState } from 'react';
import Button from '../assets/Button';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Work", link: "/work" },
        { name: "Feed", link: "/feed" },
    ];
    let [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    const navigate = useNavigate();

    return (
        <div className='shadow-md w-full sticky top-0 z-10'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 relative'>
                <div onClick={() => navigate('/')} className='logo font-bold cursor-pointer flex items-center'>
                    <img src="/Vineet_transparent.png" alt="logo" className='w-15 h-10' />
                </div>

                <div onClick={toggleMenu} className='text-3xl absolute right-8 top-6 cursor-pointer  md:hidden'>
                    <span name={open ? 'close' : 'menu'}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 18c.55 0 1 .45 1 1s-.45 1-1 1h-14c-.55 0-1-.45-1-1s.45-1 1-1h14m0-2h-14c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3zM19 11c.55 0 1 .45 1 1s-.45 1-1 1h-14c-.55 0-1-.45-1-1s.45-1 1-1h14m0-2h-14c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3zM19 4c.55 0 1 .45 1 1s-.45 1-1 1h-14c-.55 0-1-.45-1-1s.45-1 1-1h14m0-2h-14c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3z"></path>
                        </svg>
                    </span>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:relative bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-full z-50' : 'top-[-400px] md:top-0 md:z-auto hidden md:flex'}`}>
                    {Links.map((link, idx) => (
                        <li key={idx} onClick={() => navigate(`${link.link}`)} className='md:ml-8 text-m md:my-0 my-7'>
                            <Button>{link.name}</Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
