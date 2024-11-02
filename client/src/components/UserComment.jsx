import React from 'react';
import { url } from '@/App';

const UserComment = ({ comment, user }) => {
  const handleRemoveComment = async (commentId) => {

    try {
      const response = await fetch(`${url}/comment/remove/${commentId}/${user._id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to remove comment");
      }

      window.location.reload();
      
    } catch (error) {
      console.error("Error removing comment:", error);
    }
  };

  return (
    <div
      key={comment._id}
      className="bg-opacity-70 bg-[#383434] text-white p-4 rounded-lg shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[12px] mb-1">
            Your comment: {comment.text}
          </p>
          <p className="text-xs font-thin">
            Date: {new Date(comment.createdAt).toLocaleDateString()}
          </p>
        </div>
        <button
          className="text-[10px] text-red-400"
          onClick={() => handleRemoveComment(comment._id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default UserComment;
