import { useState, useRef, useEffect } from "react";

export default function Dropdown({title, text}) {
	const [isOpen, setIsOpen] = useState(false);
	console.log(isOpen)
	return (
		<div className="dropdown">
			<button className="dropdown__button" type="button" onClick={() => setIsOpen(!isOpen)} >
				{title}
			{/* chevron qui se retourne à rajouter  */}
			</button>
			<div className={isOpen ? 'dropdown__infos' : 'dropdown__infos dropdown__hidden'}>
				{text}
			</div>
		</div>
	)
}