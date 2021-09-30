import React from 'react';
import Search from './Search';
import { useContext } from 'react';
import ShowsContext from '../contexts/shows/ShowsContext';
import ListItem from './ListItem';

export default function SearchPage() {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;
  console.log(showsContext);
  return (
    <div className="text-light search__page">
      <Search />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="list-item__div">
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : 'http://mtd.lg.ua/img/articles/NoImageAvailable.png'
              }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : 'No rating available'
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
