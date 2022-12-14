import Dropdown from '../../components/Dropdown'
import kValues from "./aboutData.json"
import Herobanner from '../../components/Herobanner'
export default function About() {
   return (
	<div className='about'>
		{kValues.map((kValue) => 
		 <Dropdown key={kValue.id} title={kValue.title} description={kValue.description} />
		)}
   	</div>
   )
}
