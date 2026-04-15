// import './Netflix.css';
import styles from './Netflix.module.css';
import styled from 'styled-components';

export const SeriesCard = ({data}) => {

    const {img_url, name, rating, description, genre, cast, watch_url} = data;

    // const btn_style = {padding: "1.2rem 2.4rem", border: "none", fontSize: "1.6rem", backgroundColor: `${rating>= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    //     fontWeight: "bold", cursor: "pointer"};

    const WatchButton = styled.button({padding: "1.2rem 2.4rem", border: "none", fontSize: "1.6rem", backgroundColor: `${rating>= 8.5 ? "#7dcea0" : "#f7dc6f"}`,fontWeight: "bold", cursor: "pointer"});
    
        const ratingClass = rating>= 8.5 ? styles.super_hit : styles.average;

    return (
        <li className={styles.card}>
            <div>
                <img src={img_url} width="40%" height="40%" />
            </div>
            <div className={styles["card-content"]}>
                <h2>Name: {name}</h2>
                <h3>Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span></h3>
                <p className='text-3xl font-bold underline'>Summary: {description}</p>
                <p>Genre: {genre.join(", ")}</p>
                <p>Cast: {cast.join(", ")}</p>
                <a href={watch_url} target="_blank">
                    {/* <button style={btn_style}>Watch Now</button> */}
                    <WatchButton>Watch Now</WatchButton>
                </a>
            </div>
        </li>
    )
    
}