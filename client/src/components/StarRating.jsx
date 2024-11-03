function StarRating({ rating, size = 14 }) {
	const renderStars = () => {
		return Array.from({ length: 5 }, (_, index) => (
			<span key={index} className={`text-[${size}px]`}>
				{index < parseInt(rating) ? '★' : '☆'}
			</span>
		));
	};

	return <div>{renderStars()}</div>;
}

export default StarRating;
