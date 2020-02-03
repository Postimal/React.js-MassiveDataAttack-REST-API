import React from 'react'

const Pagination = ({totalPosts,postsPerPage}) => {

   const pageNumber = [];

   for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumber.push(i)
   }

    return (
        <div>

        </div>
    )
}

export default Pagination
