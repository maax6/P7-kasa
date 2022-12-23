import Dropdown from '../../components/Dropdown'
import kValues from "./aboutData.json"
import Banner from '../../components/Banner'
import image from "./about-banner.png"
export default function About() {
   return (
	<div className='about'>
		<Banner title="Chez vous, partout et ailleurs" imageUrl={image} />
		<div className='about'>
			{kValues.map((kValue) =>
			<Dropdown key={kValue.id} title={kValue.title} description={kValue.description} />
			)}
		</div>
	</div>
   )
}
