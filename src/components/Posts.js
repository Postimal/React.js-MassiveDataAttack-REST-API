import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({posts}) => {
    return (
        <div>
          {posts.map(post =>(
          <div className="post card grey" key={post.id}>
            <div className="card-content">
              <h5>{post.id}</h5>
              <Link to={"/" + post.id}>
                <span className="card-title white-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      )}
        </div>
    )
}

export default Posts
