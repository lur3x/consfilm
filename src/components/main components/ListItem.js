import { Link } from 'react-router-dom';

export default function ListItem({ image, name, rating, id }) {
  return (
    <Link to={`/singleshow/${id}`} className="list-item">
      <img src={image} alt={name} className="list-item__image" />
      <div className="list-item__info text-center">
        <h4 className="info__name">{name}</h4>
        <h4 className="info__rating">{rating}</h4>
      </div>
    </Link>
  );
}
