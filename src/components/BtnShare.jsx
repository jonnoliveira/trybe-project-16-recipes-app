import React from 'react';
import shareIcon from '../images/icons/share.svg';
import '../css/BtnShare.css';

function BtnShare(props) {
  const { handlerClickCopy } = props;

  return (
    <button
      type="button"
      onClick={ handlerClickCopy }
      data-testid="share-btn"
      className="share-btn"
    >
      <img src={ shareIcon } alt="share icon" className="share-icon" />
    </button>
  );
}

BtnShare.propTypes = {}.isequired;

export default BtnShare;
