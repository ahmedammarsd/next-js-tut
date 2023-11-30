import Link from "next/link";
import logo from "../../public/logoBestSelect.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Image
        src={logo}
        className=" w-[40px] drop-shadow-md"
        alt="best select logo"
        placeholder="blur" // that for when the image load  // Optional blur-up while loading
        quality={100}
      />
      <h1>Snhoory</h1>
      <Link href="/">Home</Link>
      <Link href="/news">news</Link>
      <Link href="/about">About</Link>
      <Link href="/post/4">post</Link>
    </nav>
  );
};

export default Navbar;
