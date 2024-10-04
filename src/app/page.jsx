import Banner from '@/components/Banner';
import Image from 'next/image';
import './home.css';

/*Imagens*/
import homeSabores from '../../public/banner-sabores.jpg';
import homeEventos from '../../public/eventos-image.jpg';
import homeSobre from '../../public/sobre-image.jpg';

export default function Home() {
  const propagandas = [
    {
      id: 1,
      image: homeSabores,
      titulo: 'NOSSOS SABORES',
      subtitulo: 'Novos e deliciosos!',
      texto:
        'Sorvete bom é aquele feito com os melhores ingredientes! Aqui na' +
        'Gelateria todos os nossos produtos são naturais, à base de' +
        'frutas e sem nenhum conservante! Também temos opções sem lactose' +
        'e sem açúcar. Venha conhecer e perceber que tem como o sorvete' +
        'ser delicioso e saudável ao mesmo tempo!',
    },
    {
      id: 2,
      image: homeEventos,
      titulo: 'NOSSOS EVENTOS',
      subtitulo: 'Delicias com sorvete!',
      texto:
        'Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui' +
        'prontinhos para te atender e oferecer os melhores eventos com os' +
        'melhores sorvete da sua vida! Venha nos conhecer e passar um tempo' +
        'aqui com a gente',
    },
    {
      id: 3,
      image: homeSobre,
      titulo: 'SOBRE NÓS',
      subtitulo: 'Alegria em cada casquinha!',
      texto:
        'Venha tomar o melhor sorvete da região aqui com a gente! Nós' +
        'estamos há anos no mercado produzindo o que tem de melhor para o' +
        'nosso cliente e você não pode ficar fora dessa. Venha nos fazer' +
        'uma visita e aproveite o melhor atendimento e o melhor sorvete da' +
        'cidade.',
    },
  ];

  return (
    <main>
      <Banner className="banner-home" titulo="SORVETE ARTESANAL" />
      <section>
        {propagandas.map(({ id, image, titulo, subtitulo, texto }) => (
          <div className="home" key={id}>
            <figure>
              <Image src={image} />
            </figure>
            <article>
              <h2>{titulo}</h2>
              <span>{subtitulo}</span>
              <p>{texto}</p>
            </article>
          </div>
        ))}
      </section>
    </main>
  );
}
