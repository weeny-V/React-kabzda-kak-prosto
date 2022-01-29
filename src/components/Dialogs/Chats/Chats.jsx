import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from './Chats.module.css'

const Chats = (props) => {

  const Chat = () => {
    return props.dataDialogs.chatsData.map((elem, index) => {
      return (
        <NavLink 
        className={({ isActive }) => isActive ? `${style.active} ${style.chats}` : style.chats}
          to={`/dialogs/${elem.id}`} key={index} >
          <div className={style.chats__avatar} style={{ backgroundImage: `url(${elem.image})` }}></div>
          <p className={style.chats__item}>{elem.text}</p>
        </NavLink>
      )
    })
  }

  return (
    <div className={style.dialogs__chats}>
      <Chat />
    </div>
  )
}

export default Chats