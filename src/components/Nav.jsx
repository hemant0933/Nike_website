import {headerLogo} from '../nike_landing_assets/assets/images'
import {hamburger} from '../nike_landing_assets/assets/icons'
import { navLinks } from '../constants';
import { useState } from 'react';
import Button from './Button';

const Nav = () => {
    const [open, setOpen] = useState(false);

    let backgroundColor = 'bg-coral-red'
    // const [close, setClose] = useState(false);

    const handleNavMenu = () => {
        setOpen(!open)
    }

  return(
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex relative justify-between items-center max-container'>
            <a href="/">
                <img
                    src={headerLogo}
                    alt='Logo'
                    width={130}
                    height={29}
                />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.id}>
                        <a href={item.href}
                          className='font-montserrat 
                          leading-normal text-lg
                           text-slate-gray p-3 hover:border border-slate-gray  rounded-full border-double'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className={`hidden ${open ? `${backgroundColor} p-2 rounded-lg`:'bg-none p-2'} max-lg:block cursor-pointer`} onClick={handleNavMenu}>
                <img
                    src={hamburger}
                    alt='Hamburger'
                    width={25}
                    height={25}
                />
            </div>

              {open &&  
              <div className='absolute transition-all right-[8%] top-[80%] w-[150px] h-[190px] flex z-20 items-center bg-coral-red'>
                <div className='flex-col w-full h-[180px] flex justify-start items-center'>
                {navLinks.map((item) => (
                    <li key={item.id} className='list-none flex justify-center items-center w-full h-20 hover:bg-white'>
                        <a href={item.href}
                          className='font-montserrat 
                          leading-normal text-lg
                           text-slate-gray'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
                </div>
              </div>}      
            
        </nav>
    </header>
  );
};

export default Nav;
