import Banner from '../../components/Banner'
import DisplayProds from '../../components/DisplayProds'
import image from './home-banner.png'
const text = 'Chez vous, partout et ailleurs'
export default function Home() {
   return (
      <div className="home">
         <Banner title={text} imageUrl={image} />
         <DisplayProds />
      </div>
   )
}
