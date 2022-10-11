import React from "react";
import "./WarningMessage.css";
import retryImage from "../../assets/images/Retry-image.png";

function WarningMessage({ text, search }) {
  console.log("Hola");

  return (
    <div className="textMessageContainer">
      {search ? (
        <>
          <img src={retryImage} className="textMessageContainer__img" alt="" />
          <div className="textMessageContainer__container">
            <p className="textMessageContainer__container__text">{text}</p>
            <ul className="textMessageContainer__container__list-search">
              <li>Revisa la ortografia</li>
              <li>Realiza una busqueda mas generica</li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <img src={"https://cdn0.iconfinder.com/data/icons/seo-marketing-line-vol-7/52/warning__alert__danger__Error__oops__clod__datastorage-512.png"} className="textMessageContainer__img" alt="" />
          <div className="textMessageContainer__container">
            <p className="textMessageContainer__container__text">{text}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default WarningMessage;
