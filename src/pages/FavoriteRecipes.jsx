import { useState, useEffect } from 'react';
import FavButtons from '../components/FavButtons';
import Header from '../components/Header';
import '../css/FavoriteRecipes.css';
import BtnBackProfile from '../components/BtnBackProfile';
import Footer from '../components/Footer';
import mealNDrink from '../images/meal-n-drink.svg';
import food from '../images/food.svg';
import drinks from '../images/drinks.svg';
import Loading from '../components/Loading';

const categButtons = [
  { categ: 'all', src: mealNDrink },
  { categ: 'meal', src: food },
  { categ: 'drink', src: drinks },
];

function FavoriteRecipes() {
  const [receivedRecipes, setReceivedRecipes] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const isLoadingFunc = () => {
    if (receivedRecipes) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };

  const removeFavorite = (idRef) => {
    const answer = receivedRecipes.filter(({ id }) => id !== idRef);
    setReceivedRecipes(answer);
  };

  useEffect(() => {
    const answer = localStorage.getItem('favoriteRecipes');
    if (answer) setReceivedRecipes(JSON.parse(answer));
  }, []);

  useEffect(() => {
    const answer = JSON.stringify(receivedRecipes);
    localStorage.setItem('favoriteRecipes', answer);
    isLoadingFunc();
  }, [receivedRecipes]);

  const filterButtons = (
    <div className="favoriteFilters">
      {categButtons.map(({ categ, src }) => (
        <div key={ categ }>
          <button
            className="filters-btn"
            src={ src }
            alt={ categ }
            type="image"
            onClick={ () => setFilter(categ) }
            data-testid={ `filter-by-${categ}-btn` }
          >
            <img src={ src } alt={ categ } />

          </button>
        </div>
      ))}
    </div>
  );
  const elements = (
    <ul className="favoriteElements">
      {receivedRecipes
        .filter(({ type }) => {
          if (filter === 'all') return type;
          return type === filter;
        })
        .map(({
          id,
          type,
          nationality,
          category,
          alcoholicOrNot,
          name,
          image,
        }, index) => {
          const URL = `http://localhost:3000/${type}s/${id}`;

          let text = alcoholicOrNot;
          if (type === 'meal') text = `${nationality} - ${category}`;

          return (
            <li key={ id }>
              <a href={ URL }>
                <img
                  src={ image }
                  alt={ name }
                  data-testid={ `${index}-horizontal-image` }
                />
              </a>

              <div className="favoriteInfo">
                <div className="favoriteText">
                  <a href={ URL }>
                    <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
                  </a>

                  <p data-testid={ `${index}-horizontal-top-text` }>{text}</p>
                </div>
                <FavButtons
                  index={ index }
                  URL={ URL }
                  remove={ () => removeFavorite(id) }
                />
              </div>
            </li>
          );
        })}
    </ul>
  );

  return (
    <div>
      {
        isLoading
          ? <Loading />
          : (
            <>
              <Header />
              <BtnBackProfile />
              {filterButtons}
              {elements}
              <Footer />
            </>
          )
      }

    </div>
  );
}

export default FavoriteRecipes;
