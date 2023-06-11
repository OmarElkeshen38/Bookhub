import React, { Component } from 'react';
import LoaderImg from '../../images/loader.svg';
import styles from './Loader.module.css';

export default class 
 extends Component {
  render() {
    return (
      <>
        <div className={`${styles.loader} d-flex align-items-center justify-content-center`}>
            <img src={LoaderImg} alt="loader" />
        </div>
      </>
    )
  }
}
