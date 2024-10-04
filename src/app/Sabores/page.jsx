import Banner from '@/components/Banner';
import Sabor from '@/components/Sabor';
import React from 'react';
import './sabores.css';

/* Imagem */
import sabor1 from '../../../public/sabor-oreo.png';
import sabor2 from '../../../public/sabor-pistache.png';
import sabor3 from '../../../public/sabor-cookies-avela.png';
import sabor4 from '../../../public/sorbet-kiwi.png';
import sabor5 from '../../../public/sorbet-morango.png';
import sabor6 from '../../../public/sorbet-limao.png';

const Sabores = () => {
  const sabores = [
    {
      id: 1,
      image: sabor1,
      titulo: 'Sorvete de Oreo',
      texto: 'Delicioso sorvete sabor Oreo. Uma explosão de sabor.',
    },
    {
      id: 2,
      image: sabor2,
      titulo: 'Sorvete Pistache',
      texto: 'Cremoso sorvete sabor pistache com pedacinhos de semente.',
    },
    {
      id: 3,
      image: sabor3,
      titulo: 'Sorvete Cookies & Avelã',
      texto: 'O nosso melhor sorvete. Você vai adorar o sabor.',
    },
    {
      id: 4,
      image: sabor4,
      titulo: 'Sorvete de Kiwi',
      texto: 'Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.',
    },
    {
      id: 5,
      image: sabor5,
      titulo: 'Sorvete de Morango',
      texto: 'Sorvete de morango gourmet. Tradicional e saboroso.',
    },
    {
      id: 6,
      image: sabor6,
      titulo: 'Sorvete de Limão Siciliano',
      texto: 'O incrivel sorvete gourmet de limão siciliano vai te encantar.',
    },
  ];

  return (
    <section>
      <Banner className="banner-sabores" titulo="NOSSOS SABORES" />
      <section className="container sabores">
        <h2>SABORES DE SORVETE</h2>
        {sabores.map((sabor) => (
          <Sabor key={sabor.id} {...sabor} />
        ))}
      </section>
    </section>
  );
};

export default Sabores;
