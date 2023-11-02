import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return <div className='full-page'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary header">
      <div className="container">
        <Link href={'/'} className="navbar-brand">
          Proyecto Final - Fase 1
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href={'/'} className={`nav-link ${router.route === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href={'/ingredientes'} className={`nav-link ${router.route === '/ingredientes' ? 'active' : ''}`}>
                Ingredientes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container main-body">
      <Component {...pageProps} />
    </div>
    <footer className="py-3 my-4 footer">
    <div className="nav justify-content-center border-bottom pb-3 mb-3">
      <div>Universidad Da Vinci de Guatemala</div>
    </div>
    <p className="text-center text-muted">Nombre: Juan Fernando Barrios Barrera</p>
    <p className="text-center text-muted">Carnet: 202102655</p>
  </footer>
  </div>
}
