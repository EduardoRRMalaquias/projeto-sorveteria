import Image from 'next/image';
import Link from 'next/link';
import './topo.css';

/* Imagens */
import logo from '../../../public/logo.png';

const Topo = () => {
  return (
    <header className="header">
      <div className="container">
        <Link href="/">
          <Image
            className="logo"
            src={logo}
            alt="Gelateria"
            title="Gelateria"
          />
        </Link>
        <nav>
          <menu>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Sabores">Sabores</Link>
            </li>
            <li>
              <Link href="/Sobre">Sobre</Link>
            </li>
          </menu>
        </nav>
      </div>
    </header>
  );
};

export default Topo;
