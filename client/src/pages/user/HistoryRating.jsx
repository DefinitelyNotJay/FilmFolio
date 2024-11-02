import React, { useEffect, useState } from "react";
import { url } from "@/App";

function HistoryRating() {
  const [comments, setComments] = useState([])
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const response = await fetch(`${url}/comment/`);
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        const data = await response.json();
        setComment(data);
      } catch (error) {
        setError(error.message);
      }
    };
  
    fetchComment();
  }, []);

  if (error) return <div className="flex items-center justify-center h-screen text-white">{error}</div>;

  return ( 
    <div className="w-full bg-[#201c1c] flex flex-col px-6 pb-24">
      <div className="w-full">
        <p className="text-white my-6 text-[12px]">History Rating</p>
        <div className="flex flex-col gap-2 ">
          {comments.map((comment) => (
            <div key={index} className="bg-opacity-70 bg-[#383434] text-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[12px] mb-1">Your rating : 4 </p>
                  <p className="text-xs font-thin">date: 15/05/2002</p>
                  <p className="text-xs font-thin">rating: 3</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h3 className="font-Inter text-[11px]">Decision to leave</h3>
                  <p className="text-xs font-thin">2002</p>
                </div>
              </div>
              <div className="flex justify-end">
                <a href="#" className="text-[10px] mt-1 text-orange-400 font-thin">
                  remove
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HistoryRating;
