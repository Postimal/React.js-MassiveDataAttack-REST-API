import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    console.log('fetching')
    this.props.fetchPosts();
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
    const { posts } = this.props;
    console.log(this.props)
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
  


const mapStateToProps = state => ({
  posts: state.posts.items
})

export default  connect(mapStateToProps, { fetchPosts })(Home);
