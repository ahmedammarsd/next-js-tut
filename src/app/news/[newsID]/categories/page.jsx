"use client";
import { useParams } from "next/navigation";

const Categories = () => {
  const params = useParams();
  const newsID = params.newsID;
  return (
    <div>
      Categories
      <span> it is con to newsID : {newsID}</span>
    </div>
  );
};

export default Categories;
