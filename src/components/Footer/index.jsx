import Logo from "../Logo"
import styled from "styled-components"

const FooterLogo = styled.div`
	color: hsl(0, 0%, 100%);
	filter:brightness(10)
`
export default function Footer() {
	const effectiveYear = new Date().getFullYear();
	return (
		<footer className="footer">
			<FooterLogo ><Logo / ></FooterLogo >
			<p className="footer__text">
			©{effectiveYear} Kasa. All rights reserved
		</p>
		</footer>
	)
}
