import Banner from '@/components/Banner';
import React from 'react';
import Image from 'next/image';
import './sobre.css';

/* imagem */
import pesoasSobre from '../../../public/sobre-image.jpg';
import sorveteriaSobre from '../../../public/sorveteria.jpg';

const Sobre = () => {
  return (
    <>
      <Banner className="banner-sobre" titulo="A GELATERIA" />
      <section className="sobre">
        <article className="container">
          <h2>Sobre Nós</h2>
          <span>Nós simplesmente amamos sorvete!</span>
          <p>
            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
            sorvete produzido. Fazemos o melhor sorvete para os nossos clientes
            e gostamos de receber elogios. Estamos operando desde 2009 com as
            melhores matérias-primas para a produção final do sorvete. Vendemos
            tanto para varejo como para atacado.
          </p>
          <p>
            Nossos clientes podem comprar os nossos sorvetes e degustar na nossa
            loja ou levar para sua residência e aproveitar junto com a família.
            Também vendemos para estabelecimentos e criamos eventos como festa
            de aniversário, formaturas e eventos empresariais. Para contratar os
            nossos serviços, basta entrar em contato conosco. Iremos
            proporcionar o melhor atendimento e os melhores produtos para você
            fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
          </p>
        </article>
        <article className="galeria">
          <figure>
            <Image src={pesoasSobre} />
          </figure>
          <figure>
            <Image src={sorveteriaSobre} />
          </figure>
        </article>
      </section>
    </>
  );
};

export default Sobre;
