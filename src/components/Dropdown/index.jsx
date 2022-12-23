import { useState, useRef, useEffect } from "react";
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
				{props.description}
			</div>
		</div>
	)
}