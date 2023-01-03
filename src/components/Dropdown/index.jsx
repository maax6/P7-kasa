import { useState } from "react";
import { FiChevronUp } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';

export default function Dropdown(props) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="dropdown" key={props.id}>
			<button type="button" className="dropdown__button" onClick={() => setIsOpen(!isOpen)} >
				<h1 className="dropdown__button__title">{props.title}</h1>
				<span className="dropdown__button__chevron">{isOpen ? <FiChevronUp /> : <FiChevronDown /> }</span>
			</button>
			
			<div className={isOpen ? 'dropdown__infos' : 'dropdown__infos dropdown__hidden'}>
				<p>{props.description}</p>
			</div>
		</div>
	)
}








// import { useState } from "react";
// import { FiChevronUp } from 'react-icons/fi';
// import { FiChevronDown } from 'react-icons/fi';

// export default function Dropdown(props, content) {
// 	const [isOpen, setIsOpen] = useState(false);

// 	return (
// 		<div className="dropdown" key={props.id}>
// 			<button type="button" className="dropdown__button" onClick={() => setIsOpen(!isOpen)} >
// 				<h1 className="dropdown__button__title">{props.title}</h1>
// 				<span className="dropdown__button__chevron">{isOpen ? <FiChevronUp /> : <FiChevronDown /> }</span>
// 			</button>
			
// 			<div className={isOpen ? 'dropdown__infos' : 'dropdown__infos dropdown__hidden'}>
// 			{Array.isArray(content) ? (
//           <ul className="collapse__list">
//             {content.map((equipment, index) => (
//               <li key={index} className="collapse__list-element">
//                 {equipment}
//               </li>
//             ))}
//           </ul>
// 				) : (<p>{props.description}</p>
// 				)}
// 			</div>
// 		</div>
// 	)
// }