import React from 'react'

const Pagination = ({totalPosts,postsPerPage}) => {

   const pageNumbers = [];

   for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i)
   }

    return (
        <ul style={{}}>
            {pageNumbers.map(number => (
            <li key={number}>{number}</li>
            )
            )}
        </ul>
    )
}

export default Pagination
