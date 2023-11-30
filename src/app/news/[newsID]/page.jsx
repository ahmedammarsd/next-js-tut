"use client";
import { useParams, useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
const NewsId = () => {
  const router = useRouter();
  const params = useParams();
  return (
    <div>
      <Toaster position="top-center" />
      <h1>News Id: {params.newsID}</h1>
      <button
        onClick={() => router.push("/news")}
        className=" bg-primary text-white  mt-5 rounded-md capitalize"
      >
        back to main page news
      </button>

      <button
        onClick={() => toast.success("Event has been created")}
        className=" bg-primary text-white  mt-5 rounded-md capitalize"
      >
        Notification Success
      </button>
    </div>
  );
};

export default NewsId;
