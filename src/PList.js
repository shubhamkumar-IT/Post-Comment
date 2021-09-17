import React, { useEffect, useState } from "react";

import "./Post.css";

import { Link } from "react-router-dom";
const Post = () => {
  const [posts, setPosts] = useState([]);
  const [item, setItem] = useState(0);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);

  function getid(e) {
    setItem(e.target.postId);
    console.log(item);
  }

  return (
    <div>
      <div class="container ">
        <div
          class="card  "
          //   width="400px"
        >
          {posts.map((post) => (
            <div className="card-body crd">
              <h4>{post.title}</h4>
              <p class="card-text">{post.body}</p>
              <Link
                className="btn btn-primary"
                to="/Comment-list/"
                id="postId"
                onClick={getid}
              >
                See Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Post;
