import React, { Component } from 'react';
import Search from '../Search/Search';
import styles from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
      <>
        <header className={styles.homeBackGround}>
          <div className="container">
            <div className={`${styles.content} text-center d-flex align-items-center justify-content-center`}>
              <h2 className={`${styles.title} text-capitalize`}>find your book of choice.</h2><br />
              <p className={styles.prg}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti accusantium quisquam vel neque, vitae ad cum necessitatibus molestias dolorum exercitationem, recusandae expedita soluta aliquam quam.</p>
              <Search />
            </div>
          </div>
        </header>
      </>
    )
  }
}
