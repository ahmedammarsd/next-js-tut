import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="text-center">
      <h2>There Was a Problem</h2>
      <p className="capitalize">
        we could not find the page you were looking for.
      </p>
      <p className="capitalize">
        go back to the <Link href="/">Home</Link>
      </p>
    </main>
  );
};

export default NotFound;
