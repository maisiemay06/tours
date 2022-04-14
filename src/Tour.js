import React, { useState } from 'react';

export default function Tour({id, name, info, image, price, removeTour}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">£{price}</h4>
        </div>
        <p>
          {showMore ? info : `${info.substring(0,200)}...`}
          <button onClick={() => setShowMore(!showMore)}>{showMore?`show less`: `read more`}</button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
      </footer>
    </article>
  );
};

