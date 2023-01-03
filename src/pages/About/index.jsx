import Dropdown from '../../components/Dropdown'
import kasaValues from "./aboutData.json"
import Banner from '../../components/Banner'
import image from "./about-banner.png"
 function About() {
   return (
	<div className='about'>
		<Banner title="" imageUrl={image} />
		<div className='dropdowns'>
			{kasaValues.map((kasaValue) =>
			<Dropdown key={kasaValue.id} title={kasaValue.title} description={kasaValue.description} />
			)}
		</div>
	</div>
   )
}
export default About;