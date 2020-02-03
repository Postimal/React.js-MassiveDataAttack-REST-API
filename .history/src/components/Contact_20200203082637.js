import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

function Contact() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const [page, setPage] = useState(1);



  useEffect(() => {
   const fetchData = async () =>{
     try{
      setLoading(true)
      const response = await fetch("https://jsonplaceholder.typicode.com/pos");
      const data = await response.json();
      setPosts(data)
      setLoading(false)
     } catch(error){
       setError(error)
     }

   }
   fetchData()
    }
  , [])


  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
  return <div>we got en {error}</div>
  }




  return (
    <div className="container">
      <h4 className="center white-text">Contact</h4>
      <p className="white-text">Learn of pagination concept in progress</p>
      {posts ?
      (posts.map(post =>(
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
      )) : null}
    </div>
  );
}

export default Contact;