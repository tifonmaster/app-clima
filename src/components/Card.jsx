import React from 'react';
import './Card.css';

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="card">
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="btn-close" >X</button>
      </div>
      <div className="card-body">
        <h1 className="card-title">{name}</h1>
        <div className="row">
          <div className="container-temp">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="container-temp">
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <div className="container-temp">
            <img className="iconoClima" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
