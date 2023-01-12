import { useParams } from 'react-router-dom'
import products from '../../assets/templates/products.json';
import Error from '../Error/Error'
import Rating from '../../components/Rating/Rating' 
import Owner from '../../components/Owner/Owner' 
import Dropdown from '../../components/Dropdown/Dropdown'
import Tags from '../../components/Tags/Tags'
import Carousel from '../../components/Carousel/Carousel'
export default function Card() {
	const list = JSON.stringify(products)
	const {id}  = useParams()
	const parsedList = JSON.parse(list)
	const selectedItem = parsedList.find(item => item.id === id)

	if (!selectedItem) {
		return <Error />
	}
	const pictures = selectedItem.pictures;
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
			<Dropdown   title="Équiments" equipments={selectedItem.equipments} />
		</div>
	)
}