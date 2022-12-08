import Herobanner from '../../components/Herobanner'
import DisplayProds from '../../components/DisplayProds'
import marketdata from "../../assets/templates/aboutData";

const slogan = marketdata.slogan;

export default function Home() {
   return (
      <div className="home">
          <Herobanner title={slogan} />
          <DisplayProds />
      </div>
   )
}
