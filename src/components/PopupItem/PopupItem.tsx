import React from 'react';

import style from './PopupItem.module.css';

interface Props {
  searchText: string;
  planetName: string;
}

const PopupItem = ({searchText, planetName}: Props) => {

  const getName  = (name: string) => {
    const parts = name.split(new RegExp(`(${searchText})`, 'gi'))

    return parts.map((part) => {
      if(part.toLowerCase() === searchText.toLowerCase()){
        return <b>{part}</b>
      }
      return part
    })
  }

  return (
    <button className={style.btn}>
      <p className={style.btnText}>{getName(planetName)}</p>
    </button>
  );
}

export default PopupItem;
