import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.scss'
import SchoolLogo from '../assets/school-logo.jpg'

const Navbar = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div className='navigation'>
      <div className="nav-head">
        <div className="nav-head-contact">
          <a href=""><i class="fa-solid fa-envelope"></i> rusulnurzanov@gmail.com</a>
          <a href="tel: +998(94)598-07-47"><i class="fa-solid fa-phone"></i> +998(94)598-07-47</a>
        </div>
        <div className="nav-head-networks">
          <a href=""><i class="fa-brands fa-telegram"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
      <nav className="navbar">
        <h1 className="logo">
          <i class="fa-solid fa-school"></i> 10-maktab
        </h1>
        <ul className={click ? 'nav active' : 'nav'}>
          <li>
            <Link>
              <i class="fa-solid fa-house"></i> Bosh sahifa
            </Link>
          </li>
          <li>
            <Link>
              <i class="fa-solid fa-circle-info"></i> Biz haqqimizda
            </Link>
          </li>
          <li>
            <Link>
              <i class="fa-solid fa-people-roof"></i> Rahbariyat
            </Link>
          </li>
          <li>
            <Link>
              <i class="fa-solid fa-chalkboard-user"></i> O`qituvchilar ro`yhati
            </Link>
          </li>
          <li>
            <Link>
              <i class="fa-solid fa-book-open-reader"></i> Oquvchilar Soni
            </Link>
          </li>
          <li>
            <Link>
              <i class="fa-solid fa-address-book"></i> Bog'lanish
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;