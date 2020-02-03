import React, {useState, useEffect} from "react";

function Contact() {

  const [posts, setPosts] = useState([]);



  useEffect(() => {
   const fetchData = async () =>{
     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
     const data = await response.json();
     setPosts(data)
   }
   fetchData()
    }
  , [])



  return (
    <div className="container">
      <h4 className="center white-text">Contact</h4>
      <p className="white-text">Learn of pagination concept in progress</p>
      {console.log(posts)}
      {posts.map(post =>(
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
      )
      )}

    </div>
  );
}

export default Contact;
