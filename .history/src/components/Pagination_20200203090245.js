import React from 'react'

const Pagination = ({totalPosts,postsPerPage}) => {

   const pageNumbers = [];

   for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i)
   }

    return (
        <ul style={{display:'flex'}}>
            {pageNumbers.map(number => (
            <li style={{margin: '5px', border:'1px solid blue'}} key={number}>{number}</li>
            )
            )}
        </ul>
    )
}

export default Pagination
