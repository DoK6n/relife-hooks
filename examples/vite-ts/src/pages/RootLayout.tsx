import { Link, Outlet, useNavigate } from 'react-router-dom'
import { styler } from '../lib/utils'

const createRandomPostId = () => Math.floor(Math.random() * 251) + 1

export default function RootLayout() {
  const navigate = useNavigate()

  return (
    <main style={styles.main}>
      <nav style={styles.nav}>
        <Link to='/lifecycle' style={styles.link}>
          life cycle hook
        </Link>
        <button
          onClick={() => {
            navigate(`/message/${createRandomPostId()}`)
          }}
          style={{ ...styles.button, ...styles.link }}
        >
          use hook
        </button>
      </nav>

      <div style={styles.outletWrapper}>
        <Outlet />
      </div>
    </main>
  )
}

const styles = styler({
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  nav: {
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-around',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  },
  outletWrapper: {
    flex: 1,
    padding: '2rem',
    backgroundColor: '#ffffff',
  },
  button: {
    border: 'none',
    background: 'none',
    padding: 0,
    margin: 0,
    font: 'inherit',
    cursor: 'pointer',
    outline: 'none',
  },
})
