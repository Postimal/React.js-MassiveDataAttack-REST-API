import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { fetchMorePosts } from '../actions/postActions'
import { Link } from "react-router-dom";
import PostForm from './PostForm'

class Home extends Component {
  componentDidMount() {
    console.log('fetching')
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  handleClick = () => {
    const postsLength = this.props.posts.length;
    this.props.fetchMorePosts(postsLength);
      console.log(this.props)
    };
  ;

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
        <PostForm/>
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
  posts: state.posts.items,
  newPost: state.posts.item
})

export default  connect(mapStateToProps, { fetchPosts, fetchMorePosts })(Home);
