import { useState, useRef, useEffect } from "react";
import { FiChevronUp } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';
export default function Dropdown({title, text}) {
	const [isOpen, setIsOpen] = useState(false);
	console.log(isOpen)
	return (
		<div className="dropdown">
			<button className="dropdown__button" type="button" onClick={() => setIsOpen(!isOpen)} >
				<span className="dropdown__button__title">{title}</span>
				<div className="dropdown__button__chevron">{isOpen ? <FiChevronUp /> : <FiChevronDown /> }</div>
			</button>
			<div className={isOpen ? 'dropdown__infos' : 'dropdown__infos dropdown__hidden'}>
				{text}
			</div>
		</div>
	)
}