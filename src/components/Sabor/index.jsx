import Image from 'next/image';
import React from 'react';
import './sabor.css';

const Sabor = ({ image, titulo, texto }) => {
  return (
    <article className="sabor">
      <figure>
        <Image src={image} />
      </figure>
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </article>
  );
};

export default Sabor;
