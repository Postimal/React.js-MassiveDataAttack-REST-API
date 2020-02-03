import React, {useState, useEffect} from "react";
import Posts from "./Posts";

function Contact() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5)



  useEffect(() => {
   const fetchData = async () =>{
     try{
      setLoading(true)
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data)
      setLoading(false)
     } catch(error){
      setLoading(false)
      setError(error.message)
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
      <Posts posts={posts}/>
      <Pagination total={posts.length} currentPage={currentPage} postsPerPage={postsPerPage} />

    </div>
  );
}

export default Contact;
