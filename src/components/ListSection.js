import React from "react";
import { nanoid } from "nanoid";

export default function ListSection({ list }) {
  return list.map((item) => {
    const id = nanoid();
    const { title, image, description, link } = item;
    return (
      <a key={id} href={link} target="_blank" className="list-item">
        <div className="list-image-wrapper">
          <img className="list-image" src={image} loading="lazy" />
        </div>
        <div className="list-content">
          <h2 className="list-title">{title}</h2>
          <p className="list-description">{description}</p>
        </div>
      </a>
    );
  });
}
