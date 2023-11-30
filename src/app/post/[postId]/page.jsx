import Logo from "@/components/Header/Logo";

const fetchPost = async (postId) => {
  //   console.log("start Post ID " + postId);
  const post = await fetch(`https://jsonplaceholder.org/posts/${postId}`, {
    method: "GET",
    //cache: "no-store" // default -- for cache : "force-cache"
    // TO UPDATE OR FETCH AGEAIN THE DATA OR UPDATE REQU AUTMATC OR MANUAL
    // next: {
    //     revalidate: 5000,
    // }
  });

  return post.json();
};
export async function generateMetadata({ params }) {
  const post = await fetchPost(params.postId);
  //const newData = JSON.parse(data);
  //console.log(post);
  return {
    title: post?.title,
    description: post?.content,
    url: post?.url,
    siteName: "Snhoory",
  };
}

const PostID = ({ params, searchParams }) => {
  console.log(params, searchParams.type);
  return (
    <div>
      PostID {params.postId}
      <div>
        get logo from header to test client side in server side
        <Logo>
          <span className=" text-blue-600">From Post ID</span>
        </Logo>
      </div>
    </div>
  );
};

export default PostID;
