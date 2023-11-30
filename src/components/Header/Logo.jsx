"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
const Logo = ({ children }) => {
  const [testInServerSide, setTestInServerSide] = useState();

  //const searchParams = useSearchParams();
  // const params = useParams();
  //console.log(params);
  // console.log(searchParams);
  // console.log(searchParams.get("search"));
  // console.log(searchParams.get("value"));
  return (
    <div>
      {/* Logo {params.postId} */}
      <div>{children}</div>
    </div>
  );
};

export default Logo;
