import React from 'react';
import './banner.css';

import '../../../public/banner-sabores.jpg';

const Banner = ({ titulo, className }) => {
  return (
    <section className={'banner ' + className}>
      <h1>{titulo}</h1>
    </section>
  );
};

export default Banner;
