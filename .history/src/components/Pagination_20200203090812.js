import React from 'react'

const Pagination = ({totalPosts,postsPerPage, paginate}) => {

   const pageNumbers = [];

   for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i)
   }

    return (
        <ul style={{display:'flex'}}>
            {pageNumbers.map(number => (
            <li
                style={{minWidth:'20px',margin: '5px',padding:'2px', border:'1px solid blue', textAlign:'center'}}
                key={number}>{number}
                onClick={}
            </li>
            )
            )}
        </ul>
    )
}

export default Pagination
