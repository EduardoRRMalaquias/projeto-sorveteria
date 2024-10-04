import Topo from '@/components/Topo';
import './global.css';
import Rodape from '@/components/Rodape';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
