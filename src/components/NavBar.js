import React,{useEffect,useState} from 'react'
import { NavLink,Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
      useEffect(() => {
        if (isOpen) {
          document.body.classList.add('menu-open');
        } else {
          document.body.classList.remove('menu-open');
        }
      }, [isOpen]);
  return (
    <nav className='navbar container mx-auto p-8 '>
        <div className='flex justify-between'>

        
      <div className='logo'>
        <Link to="/">Anwar Ismail</Link>
      </div>
      <div className='navlinks space-x-10 hidden md:flex'>
        <NavLink to="/" className="">Home</NavLink>
        <NavLink to="/education" className="hover:text-secondary">Education</NavLink>
        <NavLink to="/projects" className="hover:text-secondary">Projects</NavLink>
        <NavLink to="/experience" className="hover:text-secondary">Experience</NavLink>
        </div>
        <div>
            <NavLink to="/contact" className='hidden md:flex rounded-full text-secondary border-2 px-4 py-2 border-secondary'>Contact Me</NavLink>
        </div>
        <button id="menu-btn" className={`hamburger ${isOpen ? 'open' : ''} block md:hidden focus:outline-none`} onClick={toggleMenu} >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        </div>
        <div className='md:hidden'>
        <div className={`${isOpen ? 'block' : 'hidden'} flex flex-col py-4 mt-8 space-y-6 font-bold  sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
        <NavLink to="/" className="" onClick={toggleMenu}>Home</NavLink>
        <NavLink to="/education"onClick={toggleMenu} className="hover:text-secondary">Education</NavLink>
        <NavLink to="/projects" onClick={toggleMenu} className="hover:text-secondary">Projects</NavLink>
        <NavLink to="/experience" onClick={toggleMenu} className="hover:text-secondary">Experience</NavLink>
        <NavLink to="/contact" className=''onClick={toggleMenu}>Contact Me</NavLink>
            </div>

        </div>
    </nav>
  )
}

export default NavBar
