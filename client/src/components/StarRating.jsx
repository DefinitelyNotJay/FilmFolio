function StarRating({ rating }) {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className="text-sm"
      >
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  return <div>{renderStars()}</div>;
}

export default StarRating;
