import React from 'react'
import './Pagination.css';

const Pagination = ({totalPosts,postsPerPage, paginate, currentPage}) => {

   const pageNumbers = [];

   for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i)
   }

    return (
        <ul style={{display:'flex', justifyContent:'center'}}>
            <button>previous page</button>
            {pageNumbers.map(number => (
            <li
                className={number === currentPage?"active-page": "page"}
                key={number}
                onClick={()=>paginate(number)}
                >
                    {number}
            </li>
            )
            )}
            <button>next page</button>
        </ul>
    )
}

export default Pagination