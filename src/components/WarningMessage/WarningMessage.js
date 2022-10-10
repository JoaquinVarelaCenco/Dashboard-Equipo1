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
          {/* <img src={retryImage} className="textMessageContainer__img" alt="" /> */}
          <div className="textMessageContainer__container">
            <p className="textMessageContainer__container__text">{text}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default WarningMessage;
