import React from 'react'
import {NavLink} from "react-router-dom";
import { DropdownButton, Dropdown,  } from 'react-bootstrap';

import styles from './menu.module.scss'

const menu = () => (
    <nav>
        <DropdownButton id="dropdown-basic-button" className={styles.dropdown} title="">
            <Dropdown.Item><NavLink to="/informacje" className={styles.menuLink}>Informacje</NavLink></Dropdown.Item>
            <Dropdown.Item><NavLink to="/ceremonia" className={styles.menuLink}>Ceremonia</NavLink></Dropdown.Item>
            <Dropdown.Item ><NavLink to="/galeria" className={styles.menuLink}>Galeria</NavLink></Dropdown.Item>
            <Dropdown.Item><NavLink to="/śpiewnik" className={styles.menuLink}>Śpiewnik</NavLink></Dropdown.Item>
        </DropdownButton>
        <div id="menuToggle" className={styles.menuToggle}>
            <div className={styles.menuTogglePad}></div>
            <span className={styles.menuSpan}></span>
            <span className={styles.menuSpan}></span>
            <span className={styles.menuSpan}></span>
        </div>

        <nav className={styles.mainNav}>
            <NavLink to="/informacje" className={styles.menuLink}>Informacje</NavLink>
            <NavLink to="/ceremonia" className={styles.menuLink}>Ceremonia</NavLink>
            <NavLink to="/galeria" className={styles.menuLink}>Galeria</NavLink>
            <NavLink to="/śpiewnik" className={styles.menuLink}>Śpiewnik</NavLink>
        </nav>
    </nav>
)

export default menu