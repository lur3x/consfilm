import React from 'react';
import { useEffect, useContext } from 'react';
import ShowsContext from '../contexts/shows/ShowsContext';
import '../styles.css';

export default function SinglePage({ match }) {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);
  useEffect(() => {
    getSingleShow(match.params.id);
  }, []);

  const removeTags = (text) => {
    if (text === null || text === '') {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, '');
  };
  return (
    <>
      {loading ? (
        <h2>LOADING</h2>
      ) : (
        <div className="single-show__page text-light">
          <img
            src={
              singleShow.image
                ? singleShow.image.medium
                : 'http://mtd.lg.ua/img/articles/NoImageAvailable.png'
            }
            alt={singleShow.name}
          />
          <div className="single-show__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="single-show__info__genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong> Status: </strong>
              {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating: </strong>
              {singleShow.rating
                ? singleShow.rating.average
                : 'No rating available'}
            </p>
            <p>
              <strong>Official Site: </strong>
              {singleShow.officialSite ? (
                <a
                  href={singleShow.officialSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officialSite}
                </a>
              ) : (
                'No site available'
              )}
            </p>
            <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
          </div>
        </div>
      )}
    </>
  );
}
