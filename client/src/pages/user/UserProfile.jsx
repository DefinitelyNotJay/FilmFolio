import { AuthContext } from "../../../context/userContext";
import { useContext, useState, useEffect } from "react";
import { url } from "@/App";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

export default function UserProfile() {
    const { user } = useContext(AuthContext);
    const [commentCount, setCommentCount] = useState(0); 
    const [ratingCount, setRatingCount] = useState(0); 

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const respond = await axios.get(`${url}/comment/count/${user._id}`);
                setCommentCount(respond.data.comment);
                setRatingCount(respond.data.rating);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [user]);

    return (
        <div className="flex flex-col items-center p-8 min-h-screen">
            <div className="relative mb-4 mt-10">
                <FaUserAlt className="text-gray-300 text-8xl" />
            </div>

            <div className="text-center mt-5">
                <h2 className="text-4xl font-bold text-white mb-2">
                    {user?.username || "Guest"}
                </h2>
                <p className="text-white mb-4">{user?.email || "No email available"}</p>
                <div className="flex justify-center p-4 space-x-4 mt-5">
                    <div className="bg-[#343434] p-6 rounded-lg shadow-lg flex items-center w-40 h-36 transition-transform transform hover:scale-105 flex-col justify-center">
                        <FaRegComment className="text-yellow-500 text-4xl mb-2" />
                        <h3 className="text-lg font-semibold text-gray-300">Comments</h3>
                        <p className="text-2xl text-yellow-500">{commentCount}</p>
                    </div>
                    <div className="bg-[#343434] p-6 rounded-lg shadow-lg flex items-center w-40 h-36 transition-transform transform hover:scale-105 flex-col justify-center">
                        <FaRegHeart className="text-yellow-500 text-4xl mb-2" />
                        <h3 className="text-lg font-semibold text-gray-300">Ratings</h3>
                        <p className="text-2xl text-yellow-500">{ratingCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
