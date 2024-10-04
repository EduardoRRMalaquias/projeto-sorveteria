import Image from 'next/image';
import Link from 'next/link';
import './rodape.css';

/* Imagens */
import logo from '../../../public/logo.png';

const Rodape = () => {
  const informacoes = [
    {
      titulo: 'ENDEREÇO',
      info: ['Rua Ernesto Bassini, 404', 'Vitoria, Espirito Santo'],
    },
    {
      titulo: 'CONTATO',
      info: ['malaquiaseduardo10@gmail.com', 'Tel: (27) 99891-1499'],
    },
    {
      titulo: 'HORARIOS',
      info: ['ABERTO TODOS OS DIAS', '09:00 - 18:00'],
    },
  ];

  return (
    <footer className="rodape">
      <address className="container">
        <Link href="/">
          <Image className="logo-footer" src={logo} />
        </Link>
        {informacoes.map(({ titulo, info }) => (
          <div className="info" key={titulo}>
            <h3>{titulo}</h3>
            <ul>
              {info.map((info) => (
                <li key={info}>{info}</li>
              ))}
            </ul>
          </div>
        ))}
      </address>
      <p className="container">
        &#169; Gelateria. Orgulhosamente desenvolvido por Eduardo Rodrigues
        Rangel Malaquias
      </p>
    </footer>
  );
};

export default Rodape;
