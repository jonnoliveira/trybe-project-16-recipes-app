import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/icons/food-footer.svg';
import drinkIcon from '../images/icons/drinks-footer.svg';
import '../css/Footer.css';

function Footer() {
  return (
    <div className="footer" data-testid="footer">
      <Link to="/drinks">
        <img
          className="drinks-icon"
          src={ drinkIcon }
          alt="Drinks icon"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/meals">
        <img
          className="food-icon"
          src={ mealIcon }
          alt="Meals icon"
          data-testid="meals-bottom-btn"
        />
      </Link>
    </div>
  );
}

export default Footer;
