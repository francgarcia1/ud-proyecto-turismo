"use client";
import React, { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import styles from "./navbar.module.scss";
import Link from "next/link";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const ResponsiveNavbar = () => {
    return (
      <div className={styles.navbar}>
        <ul className={`${styles.navList} flex`}>
          <li className={styles.navItem}>
            <a href="" className={styles.navLink}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="" className={styles.navLink}>
              Acerca de
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="" className={styles.navLink}>
              Contactanos
            </a>
          </li>
          <Link href="/">
            <button className="btn">
              <a href="">Login</a>
            </button>
          </Link>
        </ul>
        {/* <div className={styles.closeNavbar}>
          <IoIosCloseCircle className={styles.icon} />
        </div> */}
      </div>
    );
  };
  const showNav = () => {
    setActive(!active);
  };
  return (
    <section className="navBarSection">
      <header className={`${styles.header} flex`}>
        <div className="logoDiv">
          <a href="" className={`${styles.logo} flex`}>
            <h1>
              <MdOutlineTravelExplore className={styles.icon} />
              Safe Journey
            </h1>
          </a>
        </div>
        {active ? <ResponsiveNavbar /> : <></>}
        <div onClick={showNav} className={styles.toggleNavBar}>
          <TbGridDots className={styles.icon} />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
