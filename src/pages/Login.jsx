import React from 'react';
import useLogin from '../hook/useLogin';
import images from '../images/login/images';
import '../css/login.css';

function Login() {
  const { form, handlerChange, isFormValid, handlerClick } = useLogin();

  return (
    <section className="login-page">
      <div className="login-image">
        <img src="https://www.svgrepo.com/show/186339/recipe-book.svg" alt="recipe icon" />
        <h1>RECIPES app</h1>
      </div>
      <div className="images-line">
        {
          images.map(({ src, alt }) => (
            <img key={ alt } src={ src } alt={ alt } />
          ))
        }
      </div>
      <div className="form-container">
        <form className="form-login">
          <h1 className="login-title">Login</h1>
          <label htmlFor="email">
            <input
              className="input-login"
              value={ form.email }
              onChange={ handlerChange }
              data-testid="email-input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </label>
          <label htmlFor="password">
            <input
              className="input-login"
              placeholder="Password"
              value={ form.password }
              data-testid="password-input"
              onChange={ handlerChange }
              type="password"
              name="password"
              id="password"
            />
          </label>
          <button
            className="login-button"
            onClick={ handlerClick }
            type="button"
            disabled={ isFormValid() }
            data-testid="login-submit-btn"
          >
            Enter
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
