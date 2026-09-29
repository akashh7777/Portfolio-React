import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ScrollToTop — scrolls the window to the top whenever the route changes
// Place this inside BrowserRouter so it can read the current location
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
