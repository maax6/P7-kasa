import Banner from '../../components/Banner'
import '../../../src/styles/index.css'
import DisplayProds from '../../components/DisplayProds'
export default function Home() {
   return (
      <div className="home">
         <Banner />
         <DisplayProds />
      </div>
   )
}
