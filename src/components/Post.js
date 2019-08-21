import React, { Component } from "react";
import axios from "axios";

export class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    let id = this.props.match.params.post_id; //dostep dzięki wlasnosciom Route
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
      this.setState({
        post: res.data
      });
    });
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <h1 className="center">Loading post...</h1>
    );
    return (
      <div className="container">
        <h4 className="card grey">{post}</h4>
      </div>
    );
  }
}

export default Post;
