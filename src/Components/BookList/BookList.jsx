import React from 'react';
import { useGlobalContext } from '../context';
import Loading from '../Loader/Loader';
import Book from '../BookList/Book';
import coverImg from '../../images/cover_not_found.jpg';
import styles from './BookList.module.css';
import Loader from '../Loader/Loader';

// https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, loading, resultTile} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ... singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loader />;

  return (
    <section className={`${styles.booklist}`}>
      <div className="container">
        <div className="sec-title">
          <h2>{resultTile}</h2>
        </div>
        <div className={`${styles.booklistContent}`}>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList