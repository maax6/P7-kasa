import emptyStar from "./emptyStar.svg";
import fullStar from "./fullStar.svg";
// le score passé en props indique le nombre d'étoiles
export default function Rating({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate-comp">
		{stars.map((level) =>
			score >= level ? (
				<img
					key={level.toString()}
					className="star"
					src={fullStar}
					alt="rating star"
				/>
			) : (
				<img
					key={level.toString()}
					className="star"
					src={emptyStar}
					alt="rating star"
				/>
			)
		)}
	</div>
	)
} 