import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

import { url } from "@/App";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export default function EditMovie() {
  const { id } = useParams();
  const [selectCategories, setSelectCategories] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/movie/categories`)
      .then((res) => setSelectCategories(res.data));
  }, []);

  const { register, handleSubmit } = useForm({
    defaultValues: async () => {
      const {data} = await axios.get(`${url}/movie/${id}`);
      setCategory(data.category)
      return data
    },
  });

  const submitHandler = async (data) => {
    console.log(data);
    console.log({ ...data, category: category });
  };

  return (
    <div className="px-4 py-4">
      <h1 className="font-bold text-2xl text-[#e7e7e7]">Movies details</h1>
      <div className="w-full">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="w-1/2 flex flex-col gap-3 text-[#e7e7e7]"
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              {...register("title")}
              type="text"
              className="outline-none border-none px-2 bg-[#333533] text-[#E8EDDF] focus:bg-[#E8EDDF] py-1 focus:text-[#242423] rounded"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="synopsis">Synopsis</Label>
            <Textarea
              {...register("synopsis")}
              id="synopsis"
              type="text"
              className="resize-none overflow-visible outline-none border-none px-2 bg-[#333533] text-[#E8EDDF] focus:bg-[#E8EDDF] py-1 focus:text-[#242423] rounded"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="year">Year</Label>
            <Input
              {...register("year")}
              type="number"
              className="outline-none border-none px-2 bg-[#333533] text-[#E8EDDF] focus:bg-[#E8EDDF] py-1 focus:text-[#242423] rounded"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="category">Category</Label>
            <select
              {...register("category")}
              className="outline-none border-none px-2 py-2 bg-[#333533] text-[#E8EDDF] rounded"
              onChange={(e) => {
                setCategory((prev) => {
                  if (!prev.includes(e.target.value))
                    return [...prev, e.target.value];
                  else return prev;
                });
              }}
            >
              {selectCategories.map((cate) => (
                <option key={cate._id} value={cate.name}>
                  {cate.name}
                </option>
              ))}
            </select>
            {category && (
              <div className="flex gap-2">
                {category.map((cate) => (
                  <p
                    className="px-3 py-2 hover:bg-[#f5cb5c] hover:text-[#333] rounded w-fit hover:cursor-pointer"
                    onClick={(e) =>
                      setCategory((prev) => {
                        return prev.filter(
                          (item) => item !== e.target.textContent
                        );
                      })
                    }
                    key={cate}
                  >
                    {cate}
                  </p>
                ))}
              </div>
            )}
          </div>
          <Button type="submit" className="bg-[#f5cb5c]">
            SAVE CHANGES
          </Button>
        </form>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}
