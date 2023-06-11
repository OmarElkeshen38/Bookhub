import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo1.png';
import styles from './Navbar.module.css';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img className={styles.logoImg} src={ logoImg } alt="bookhub logo" />
                    <span className={`${styles.logotitle} mx-2 text-uppercase`}>bookhub</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`${styles.navItem} nav-link active text-uppercase`} aria-current="page" to="book">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${styles.navItem} nav-link text-uppercase`} to="about">about</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </>
    )
  }
}
