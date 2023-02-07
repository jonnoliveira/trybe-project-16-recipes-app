import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../css/BtnStartRecipe.css';
import useRecipeAPI from '../hook/useRecipeAPi';

function BtnStartRecipe() {
  const { pageId } = useRecipeAPI();
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [food, setFood] = useState('');
  const [recipeMade, setRecipeMade] = useState(false);
  const location = useLocation();
  const doneRecipe = JSON.parse(localStorage.getItem('doneRecipes'));
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));

  const redirectTo = () => {
    history.push(`/${food}/${pageId}/in-progress`);
  };

  const attFood = () => {
    if (location.pathname.includes('/meals')) {
      setFood('meals');
    } else {
      setFood('drinks');
    }
  };

  const isDisabled = () => {
    if (inProgress !== null && location.pathname.includes('/meals')) {
      const storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const keys = Object.keys(storage.meals);
      const find = keys.some((key) => key === pageId.toString());
      setProceed(find);
    }

    if (inProgress !== null && location.pathname.includes('/drinks')) {
      const storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
      const keys = Object.keys(storage.drinks);
      const find = keys.some((key) => key === pageId.toString());
      setProceed(find);
    }

    if (doneRecipe) {
      const find = doneRecipe.find((recipe) => recipe.id === pageId);
      setDisabled(find);
      return setRecipeMade(find);
    }
  };

  useEffect(() => {
    attFood();
    isDisabled();
  }, [proceed]);

  return (
    <div className="container-btnStart">
      {
        recipeMade
          ? (
            <button
              className="btnStart"
              type="button"
              disabled={ disabled }
              onClick={ redirectTo }
              data-testid="start-recipe-btn"
            >
              Recipe made
            </button>
          )
          : (
            <div className="container-btnStart">
              {
                !proceed
                  ? (
                    <button
                      className="btnStart"
                      type="button"
                      disabled={ disabled }
                      onClick={ redirectTo }
                      data-testid="start-recipe-btn"
                    >
                      Start Recipe
                    </button>
                  )
                  : (
                    <button
                      className="btnStart"
                      type="button"
                      disabled={ disabled }
                      onClick={ redirectTo }
                      data-testid="start-recipe-btn"
                    >
                      Continue Recipe
                    </button>
                  )
              }
            </div>
          )
      }
    </div>
  );
}

BtnStartRecipe.propTypes = {}.isRequired;

export default BtnStartRecipe;
