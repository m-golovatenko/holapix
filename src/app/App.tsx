import './styles/variables.css'
import './styles/fonts.css'
import './styles/globals.css'
import { Hero } from '../components/Hero/Hero.tsx'
import { ShowReel } from '../components/ShowReel/ShowReel.tsx'
import { Gallery } from '../components/Gallery/Gallery.tsx'
import { Footer } from '../components/Footer/Footer.tsx'

function App() {
  return (
    <div className={'body'}>
      <Hero />
      <ShowReel />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
