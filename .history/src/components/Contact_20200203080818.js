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

    </div>
  );
}

export default Contact;
