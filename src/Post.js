/* eslint-disable no-undef */
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import CommentList from "./Comment-list";

import "./Post.css";

class Postlist extends React.Component {
  getButtonId = (e) => {
    console.log(e.Target.value);
    // console.log(e);
  };

  onSubmit = () => {
    this.props.history.push("/Comment-list/");
  };

  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div>
        <div class="container ">
          <div
            class="card  "
            //   width="400px"
          >
            {this.state.posts.map((post) => (
              <div className="card-body crd">
                <h4>{post.title}</h4>
                <p class="card-text">{post.body}</p>
                <Link
                  className="btn btn-primary"
                  to="/Comment-list/"
                  id="postId"
                  onClick={(e) => {
                    console.log(e.target.userId);
                  }}
                >
                  See Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Postlist;
