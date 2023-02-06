import React from 'react';
import mealIcon from '../images/icons/food-footer.svg';
import drinkIcon from '../images/icons/drinks-footer.svg';
import '../css/Footer.css';

function Footer() {
  return (
    <div className="footer" data-testid="footer">
      <a href="/drinks">
        <img
          className="drinks-icon"
          src={ drinkIcon }
          alt="Drinks icon"
          data-testid="drinks-bottom-btn"
        />
      </a>
      <a href="/meals">
        <img
          className="food-icon"
          src={ mealIcon }
          alt="Meals icon"
          data-testid="meals-bottom-btn"
        />
      </a>
    </div>
  );
}

export default Footer;
