"use client";
import { useParams } from "next/navigation";

const CategoryID = () => {
  const params = useParams();
  const categoryID = params.categoryID;
  return <div>CategoryID : {categoryID}</div>;
};

export default CategoryID;
