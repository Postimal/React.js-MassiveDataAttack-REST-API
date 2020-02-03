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
                style={{minWidth:'22px',margin: '5px',padding:'2px', border:'1px solid blue', textAlign:'center', cursor:'pointer', justifyContent:'center'}}
                key={number}
                onClick={()=>paginate(number)}
                >
                    {number}
            </li>
            )
            )}
        </ul>
    )
}

export default Pagination