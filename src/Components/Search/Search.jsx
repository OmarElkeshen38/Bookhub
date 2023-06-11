import React, { Component, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {useGlobalContext} from '../context';
import styles from './Search.module.css';

const Search = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();
  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if ((tempSearchTerm.replace(/[^\w\s]/gi,"")).lenght === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  }


  return (
    <>
        <div className={styles.formContent}>
          <form className='' onSubmit={handleSubmit}>
            <div className={`${styles.elem} d-flex justify-content-between bg-white`}>
              <input type="text" className={styles.formControl} 
              placeholder='The Lost World ...' ref={searchText} />
              <button type='submit' onClick={handleSubmit} className='d-flex align-items-center justify-content-center'>
                <FaSearch className={styles.icon} size={26} />
              </button>
            </div>
          </form>
        </div>
      </>
  )
}

export default Search