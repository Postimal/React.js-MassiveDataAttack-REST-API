import React, {useState, useEffect} from "react";

function Contact() {

  const [posts, setPosts] = useState([]);



  useEffect(() => {
   async function fetchData = () => {

    }
  }, [])



  return (
    <div className="container">
      <h4 className="center white-text">Contact</h4>
      <p className="white-text">Learn of pagination concept in progress</p>

    </div>
  );
}

export default Contact;