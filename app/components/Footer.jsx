import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { theme, toggleTheme } = useTheme()


  return (
    <footer className={`container-fluid bg-dark-${theme} p-2 fixed-bottom`}>
      <p className='m-0'>Footer</p>
    </footer>
  )
}
