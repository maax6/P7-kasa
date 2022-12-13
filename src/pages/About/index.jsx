import Dropdown from '../../components/Dropdown'
import dataTxt from "../../assets/templates/aboutData.js"
import Herobanner from '../../components/Herobanner'
export default function About(props) {; 
   return (
	<div className='about'>
		<Herobanner />
		 <Dropdown title="Fiabilité" text={dataTxt.fiability} />
		 <Dropdown title="Respect" text={dataTxt.respect} />
		 <Dropdown title="Service" text={dataTxt.service} />
		 <Dropdown title="Sécurité" text={dataTxt.security} />
   	</div>
   )
}
