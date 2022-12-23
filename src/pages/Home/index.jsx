import Banner from '../../components/Banner'
import DisplayProds from '../../components/DisplayProds'
import slogan from './slogan.js'

export default function Home() {
   return (
      <div className="home">
          <Banner title="Chez vous, partout et ailleurs" src="./home-banner.png" />
          <DisplayProds />
      </div>
   )
}
