import React from 'react';
import { url } from '@/App';

const UserRating = ({ rating }) => {
  const handleRemoveRating = async (ratingId) => {
    try {
      const response = await fetch(`${url}/rating/remove/${ratingId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to remove rating");
      }

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {rating && (
        <div
          key={rating._id}
          className="bg-opacity-70 bg-[#383434] text-white p-4 rounded-lg shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] mb-1">Your rating: {rating.rating}</p>
              <p className="text-xs font-thin">
                Date: {new Date(rating.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-Inter text-[11px]">
                {rating.movieId && rating.movieId.title ? rating.movieId.title : 'No title'}
              </h3>
              <p className="text-xs font-thin mt-1">
                {rating.movieId && rating.movieId.year ? rating.movieId.year : 'N/A'}
              </p>
            </div>
            <button
              className="text-[10px] text-red-400"
              onClick={() => handleRemoveRating(rating._id)}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRating;
