"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

//
const News = () => {
  const router = useRouter();
  return (
    <div>
      News
      <Link href="/news/detail" className="block">
        Detail News
      </Link>
      <div className=" my-2 border-t pt-3 mt-4">
        <h1 className="capitalize">List of news</h1>
        <div>
          <ul>
            <li>
              <Link href="/news/1">News 1</Link>
            </li>
            <li>
              <Link href="/news/2">News 2</Link>
            </li>
            <li>
              <Link
                prefetch={true}
                href={{
                  pathname: "/news/3",
                  query: {
                    newsTitle: "Major of The Web",
                    category: "wars",
                    noThing: JSON.stringify({
                      since: 1999,
                    }),
                  },
                }}
              >
                News 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;
