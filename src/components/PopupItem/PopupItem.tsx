import React, {useCallback} from 'react';

import style from './PopupItem.module.css';

interface Props {
  searchText: string;
  planetName: string;
  onClick: (planetName: string) => void;
}

const PopupItem = ({searchText, planetName, onClick}: Props) => {

  const getName  = (name: string) => {
    const parts = name.split(new RegExp(`(${searchText})`, 'gi'))

    return parts.map((part) =>
      part.toLowerCase() === searchText.toLowerCase()
        ? <b>{part}</b>
        : part
    )
  }

  const handleClick = useCallback(
    () => {
      onClick(planetName)
    },
    [onClick, planetName],
  )


  return (
    <button className={style.btn} onClick={handleClick}>
      <p className={style.btnText}>{getName(planetName)}</p>
    </button>
  );
}

export default PopupItem;
