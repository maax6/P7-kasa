import Dropdown from '../../components/Dropdown'
import kValues from "./aboutData.json"
import Banner from '../../components/Banner'
import image from "./about-banner.png"
 function About() {
   return (
	<div className='about'>
		<Banner title="" imageUrl={image} />
		<div className='dropdowns'>
			{kValues.map((kValue) =>
			<Dropdown key={kValue.id} title={kValue.title} description={kValue.description} />
			)}
		</div>
	</div>
   )
}
export default About;