import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'
import dataTxt from "../../assets/templates/aboutData.js"

console.log(dataTxt.respect)
console.log(Object.keys(dataTxt))
console.log(Object(dataTxt))
console.log(Object.keys(dataTxt))
const info = dataTxt[0]
const description =dataTxt["fiability"];
export default function About(props) {; 
	const infos = props.dataTxt;
	const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex cum rem dolores. Beatae laudantium excepturi quaerat! Possimus sed natus odio est at fugit nobis? Libero inventore nesciunt nemo numquam voluptatibus.";
	// console.log(dataTxt)
   return (
	<div className='about'>
		<Banner />
		<Dropdown title={info} text={description} />
   	</div>
   )
}
