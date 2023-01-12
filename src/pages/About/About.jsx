import Dropdown from '../../components/Dropdown/Dropdown'
import kasaValues from "./aboutData.json"
import Banner from '../../components/Banner/Banner'
import image from "./about-banner.png"
import imageSmall from "./about-banner-small.png"
 function About() {
	const imageSwitch = window.innerWidth > 600 ? image : imageSmall;
   return (
	<div className='about'>
		<Banner title="" imageUrl={imageSwitch} height="223px" />
		<div className='dropdowns'>
			{kasaValues.map((kasaValue) =>
			<Dropdown key={kasaValue.id} title={kasaValue.title} description={kasaValue.description} />
			)}
		</div>
	</div>
   )
}
export default About;