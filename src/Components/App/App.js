import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import BookList from '../BookList/BookList';
import BookDetails from '../BookDetails/BookDetails';
import Navbar from '../Navbar/Navbar';
import NotFound from '../NotFound/NotFound';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='Bookhub' element={<Home />}> 
            <Route path='about' element={<About />}></Route>
            <Route path='book' element={<BookList />}></Route>
            <Route path='' element={<BookList />}></Route>
            <Route path='book/:id' element={<BookDetails />}></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </>
    )
  }
}
