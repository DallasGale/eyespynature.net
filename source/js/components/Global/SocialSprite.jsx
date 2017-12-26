import React from 'react';

export const SocialSprite = (props) => {
  return (
    <li
      key={ props.id }
      className={`c-social-nav__item  c-social-nav--${ props.class }`}>
      <a className='c-social-nav__link'
        href={ props.url }
        alt={ props.alt }>
      </a>
    </li>
  );
}
