import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import styles from './BookDetails.module.css';
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if(data){
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if(loading) return <Loading />;

  return (
    <section className={styles.bookDetails}>
      <div className='container'>
        <button type='button' className={`d-flex justify-content-center align-items-center ${styles.backBtn}`} onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className={`${styles.fS} ${styles.ffffWf}`}>Go Back</span>
        </button>

        <div className={`${styles.bookDetailsContent} d-grid`}>
          <div className={styles.bookDetailsImg}>
            <img src = {book?.cover_img} alt = "book cover image" />
          </div>
          <div className={styles.bookDetailsInfo}>
            <div className={`${styles.bookDetailsItem} title`}>
              <span className={`${styles.ffffWf} ${styles.fsS}`}>{book?.title}</span>
            </div>
            <div className={`${styles.bookDetailsItem} ${styles.description}`}>
              <span className={styles.fmfmfm}>{book?.description}</span>
            </div>
            <div className={styles.bookDetailsItem}>
              <span className={styles.ffffWf}>Subject Places: </span>
              <span className={`${styles.fmfmfm} text-italic`}>{book?.subject_places}</span>
            </div>
            <div className={styles.bookDetailsItem}>
              <span className={styles.ffffWf}>Subject Times: </span>
              <span className={`${styles.fmfmfm} text-italic`}>{book?.subject_times}</span>
            </div>
            <div className={styles.bookDetailsItem}>
              <span className={styles.ffffWf}>Subjects: </span>
              <span className={styles.fmfmfm}>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails