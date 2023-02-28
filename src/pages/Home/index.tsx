import { Intro } from './components/intro'
import { OurCoffes } from './components/OurCoffees'
import { HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffes />
    </HomeContainer>
  )
}
