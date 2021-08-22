import Image from "next/image";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Post from "./Post";

const Posts = () => {
  const [realtimePosts, loading, error] = useCollection(
    //the path you want react hook looking for
    //get data from field 'timestamp' and sort descending for newest posts
    db.collection("posts").orderBy("timestamp", "desc")
  );
  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
};

export default Posts;
