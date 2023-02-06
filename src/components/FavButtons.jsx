import propTypes from 'prop-types';
import { useState } from 'react';
import '../css/FavButtons.css';

import heartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/icons/share.svg';

function FavButtons({ index, URL, remove }) {
  const [copied, setCopied] = useState(false);

  const clipboard = () => {
    const TIME = 5000;
    navigator.clipboard.writeText(URL);
    setCopied(true);
    setTimeout(() => setCopied(false), TIME);
  };

  return (
    <div className="favoriteFavShareButtons">
      <input
        type="image"
        src={ shareIcon }
        alt="Share Icon"
        onClick={ () => clipboard() }
        data-testid={ `${index}-horizontal-share-btn` }
        className="share-btn-fav"
      />

      <input
        type="image"
        src={ heartIcon }
        alt="Heart Icon"
        onClick={ remove }
        data-testid={ `${index}-horizontal-favorite-btn` }
      />

      {copied && <p className="alert-copie">Link copied!</p>}

    </div>
  );
}

FavButtons.propTypes = {
  index: propTypes.string,
  URL: propTypes.string,
  remove: propTypes.func,
}.isRequired;

export default FavButtons;
