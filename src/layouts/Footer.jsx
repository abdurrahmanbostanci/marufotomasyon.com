import { useLocation } from 'react-router-dom'
import ShortFooter from '../pages/ShortFooter'
import NormalFooter from '../pages/NormalFooter'

export default function Footer() {
  const location = useLocation()

  if (location.pathname === '/contact') {
    return <ShortFooter/>
  } else {
  return <NormalFooter/>
  }
  
}

