import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import BookList from '../BookList/BookList';
import BookDetails from '../BookDetails/BookDetails';
import Navbar from '../Navbar/Navbar';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
        <Routes>
          <Route path='Bookhub' element={<Home />}></Route>
          <Route path='/' element={<Home />}> 
            <Route path='about' element={<About />}></Route>
            <Route path='book' element={<BookList />}></Route>
            <Route path='book/:id' element={<BookDetails />}></Route>
          </Route>
        </Routes>
      </>
    )
  }
}
