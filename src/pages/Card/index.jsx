import { useParams } from 'react-router-dom'
import products from '../../assets/templates/products.json';
import Error from '../Error'
import Rating from '../../components/Rating' 
import Owner from '../../components/Owner' 
import Dropdown from '../../components/Dropdown'
import Tags from '../../components/Tags'
import Carousel from '../../components/Carousel'
//import rating from '../../components/Rating'
export default function Card() {
	const list = JSON.stringify(products)
	const {id}  = useParams()
	const parsedList = JSON.parse(list)
	const selectedItem = parsedList.find(item => item.id === id)
	const pictures = selectedItem.pictures;
	
	console.log(selectedItem.equipments)
	
	//console.log(selectedItem)
	//console.log(parsedList)
	
	if(!selectedItem){
		return <Error />
	}

	console.log(selectedItem.pictures)
	
	return (
		<div className='card'>
			<Carousel pictures={pictures} />
			<h1 className='card__title'>{selectedItem.title} </h1>
			<h2 className='card__location'>{selectedItem.location}</h2>
			<div className='card__tags'>
				{selectedItem.tags.map((tag, index) => (
					<Tags key={index} getTag={tag} />
					))}
			</div>
			<div className="provider">
				<Rating score={selectedItem.rating} />
				<Owner host={selectedItem.host} />
			</div>
			<Dropdown key={selectedItem.id} title="Description" description={selectedItem.description} />
			<Dropdown  key={selectedItem.id} title="Équiments" description={selectedItem.equipments} />
		</div>
	)
}


//console.log(selectedItem.id)
//console.log(selectedItem.rating)
//console.log(selectedItem.tags)
//console.log(selectedItem.description)