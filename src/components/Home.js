import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 8)
      });
    });
  }

  handleClick = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      const postsLength = this.state.posts.length;
      const newPosts = res.data.slice(postsLength, postsLength + 8);
      this.setState({
        posts: [...this.state.posts, ...newPosts]
      });
    });
  };

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card grey" key={post.id}>
            <div className="card-content">
              <h5>{post.id}</h5>
              <Link to={"/" + post.id}>
                <span className="card-title white-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <h1 className="center overlay">LOADING ...</h1>
    );

    return (
      <div className="container">
        <h4 className="center white-text">
          Massive data, common e-commerce method
        </h4>
        {postList}
        <button
          className="waves-effect waves-light btn"
          onClick={this.handleClick}
        >
          Show more
        </button>
      </div>
    );
  }
}

export default Home;
