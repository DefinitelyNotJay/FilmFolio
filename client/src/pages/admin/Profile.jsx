import React from "react";

export default function Profile() {
  return (
    <div className="">
      <div className="px-4 py-4 text-white ml-[2%] mt-[2%] max-w-sm">
        <p className="text-2xl font-bold">Account Settings</p>
        <section>
          <p className="text-xl font-medium my-4">Profile</p>
          <form action="" className="flex flex-col gap-3 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Username
              </label>
              <input className="outline-none px-2 bg-[#333533] text-[#E8EDDF] focus:bg-[#E8EDDF] py-1 focus:text-[#242423] rounded" type="text" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Email address
              </label>
              <input className="outline-none px-2 bg-[#333533] text-[#E8EDDF] focus:bg-[#E8EDDF] py-1 focus:text-[#242423] rounded" type="text" />
            </div>
            <button className="w-fit shadow-sm hover:bg-[#c4a24a] text-sm font-medium px-2 py-1 bg-[#F5CB5C] text-[#242423] rounded">
              SAVE CHANGES
            </button>
          </form>
        </section>
        <section className="mt-8">
          <p className="text-xl font-semibold mb-3">Password</p>
          {/* <p>Change password</p> */}
          <form action="" className="flex flex-col gap-3 ">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Current password
              </label>
              <input className="outline-none px-2 bg-[#333533] text-[#E8EDDF] focus:bg-[#E8EDDF] py-1 focus:text-[#242423] rounded" type="text" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                New password
              </label>
              <input className="outline-none px-2 bg-[#333533] text-[#E8EDDF] focus:bg-[#E8EDDF] py-1 focus:text-[#242423] rounded" type="text" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Confirm new password
              </label>
              <input className="outline-none px-2 bg-[#333533] text-[#E8EDDF] focus:bg-[#E8EDDF] py-1 focus:text-[#242423] rounded" type="text" />
            </div>
            <button className="w-fit shadow-sm hover:bg-[#c4a24a] text-sm font-medium px-2 py-1 bg-[#F5CB5C] text-[#242423] rounded">
              CHANGE
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

// yellow: {
//           100: "#fdf5de",
//           200: "#fbeabe",
//           300: "#f9e09d",
//           400: "#f7d57d",
//           500: "#f5cb5c",
//           600: "#c4a24a",
//           700: "#937a37",
//           800: "#625125",
//           900: "#312912"
// },
