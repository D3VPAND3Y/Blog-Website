import { useEffect, useState } from "react";
import Post from "../post";

export default function IndexPage(){
    const [posts,setPosts] = useState([]);
    useEffect(() => {
      fetch('https://blog-website-api-rho.vercel.app//posts').then(response => {
        response.json().then(posts => {
          setPosts(posts);
            // console.log(posts);
        });
      });
    }, []);
    return (
        // <Post/>
      <>
        {posts.length > 0 && posts.map(post => (
          <Post {...post} key={post.id} />
        ))}
      </>
    );
}