import { useEffect, useState, useContext } from "react";
import { url } from "@/App";
import { AuthContext } from "../../../context/userContext";
import { Button } from "@/components/ui/button";
import UserRating from "@/components/UserRating";
import UserComment from "@/components/UserComment";

function HistoryRating() {
  const [ratings, setRatings] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isCommentPage, setIsCommentPage] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log(isCommentPage)
    const fetchRatings = async () => {
      if (!user || !user._id) return; 
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${url}/${isCommentPage ? "comment" : "rating"}/user/${user._id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch ratings");
        }
        const data = await response.json();
        setRatings(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRatings();
  }, [isCommentPage, user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full bg-[#201c1c] flex flex-col px-6 pb-24 pt-7">
      <div className="w-full flex gap-[2px] mb-4">
        <Button
          className={isCommentPage ? "" : "bg-gray-700"}
          onClick={() => setIsCommentPage(false)}
        >
          Rating
        </Button>
        <Button
          className={isCommentPage ? "bg-gray-700 " : ""}
          onClick={() => setIsCommentPage(true)}
        >
          Comment
        </Button>
      </div>
      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}
      <div className="flex justify-between items-center">
        <p className="text-white my-6 text-[12px]">
          History {isCommentPage ? "Comment" : "Rating"}
        </p>
        <p className="text-white my-6 text-[12px]">
          Total : {ratings.length}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {isCommentPage
          ? ratings.map((comment) => (
              <UserComment key={comment._id} comment={comment} user={user} />
            ))
          : ratings.map((rating) => (
              <UserRating key={rating._id} rating={rating} />
            ))}
      </div>
    </div>
  );
}

export default HistoryRating;
