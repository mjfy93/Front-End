import { Outlet } from 'react-router'
import HtmlShell from './components/HtmlShell.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <HtmlShell>
        <main className='container mt-4'>
          <Outlet />
        </main>
      </HtmlShell>
    </ThemeProvider>
  )
}

export function ErrorBoundary({ error }) {
  return (
    <ThemeProvider>
      <HtmlShell>
        <div className='container'>
          <h2>Error!</h2>
          <h4>{error.message}</h4>
        </div>
      </HtmlShell>
    </ThemeProvider>
  )
}
