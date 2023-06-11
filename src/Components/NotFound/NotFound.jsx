import React, { Component } from 'react';
import notFoundImg from '../../images/notFound.jpeg';

export default class NotFound extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center">
            <img src={notFoundImg} className='w-50' alt="" />
        </div>
      </>
    )
  }
}