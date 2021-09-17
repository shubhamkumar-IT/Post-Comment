import React, { useEffect, useState } from "react";

import "./Post.css";
import { Link } from "react-router-dom";

const CList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
      .then((res) => res.json())
      .then((result) => {
        setComments(result);
      });
  }, []);

  return (
    <div>
      <div class="container ">
        <div
          class="card  "
          //   width="400px"
        >
          {comments.map((comment) => (
            <div className="card-body crd">
              <li
                key={comment.id}
                className="collection-item left-align purple lighten-2"
              >
                <p>Post ID: {comment.postId}</p>
                <p>Name: {comment.name}</p>
                <p>E-mail: {comment.email}</p>
                <p>Comment: {comment.body}</p>
              </li>
              <Link className="btn btn-primary" to="/" id="postId">
                Back
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CList;
