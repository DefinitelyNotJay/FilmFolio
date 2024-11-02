import { AuthContext } from "../../../context/userContext";
import { useContext, useState } from "react";
import { url } from "@/App";



export default function UserProfile() {
    const { user } = useContext(AuthContext);
    const [commentCount, setCommentCount] = useState(0); 

    useEffect(() => {
        const fetchUserData = async () => {
            const commentResponse = await axios.get(`${url}/comments/count/${response.data._id}`);
            setCommentCount(commentResponse.data.count);
        };

        fetchUserData();
    }, []);
    return (
        <div className="flex flex-col items-center p-10 ">
            <div className="relative w-24 h-24 mb-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                    className="absolute w-full h-full text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </div>
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-white">
                    {user?.username || "Guest"}
                </h2>
                <p className="text-gray-500">{user?.email || "No email available"}</p>
            </div>
        </div>
    );
}