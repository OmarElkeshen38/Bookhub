import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BookList.module.css';

const Book = (book) => {
  return (
            <div className={`${styles.bookItem} d-flex flex-column justify-content-between`}>
                <div className={styles.bookItemImg}>
                    <img src={book.cover_img} alt="book cover" />
                </div>
                <div className={`${styles.bookInfo} text-center`}>
                    <Link to={`/book/${book.id}`} {...book} >
                        <div className={`${styles.bookInfoItem} ${styles.title} ${styles.fWhite} ${styles.fSiiize}`}>
                            <span>{book.title}</span>
                        </div>
                    </Link>
                    <div className={`${styles.bookInfoItem} ${styles.author} ${styles.fSize}`}>
                        <span className={`text-capitalize ${styles.fWhite}`}>Author: </span>
                        <span>{book.author.join(", ")}</span>
                    </div>
                    <div className={`bookInfoItem edCount ${styles.fSize}`}>
                        <span className={`text-capitalize ${styles.fWhite}`}>Total Editions: </span>
                        <span>{book.edition_count}</span>
                    </div>
                    <div className={`bookInfoItem ${styles.puYear} ${styles.fSize}`}>
                        <span className={`text-capitalize ${styles.fWhite}`}>First Publish Year: </span>
                        <span>{book.first_publish_year}</span>
                    </div>
                </div>
            </div>
  )
}

export default Book