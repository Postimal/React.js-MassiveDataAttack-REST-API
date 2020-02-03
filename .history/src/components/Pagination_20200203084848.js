import React from 'react'

const Pagination = ({total, currentPage, postsPerPage}) => {

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage

    return (
        <div>

        </div>
    )
}

export default Pagination
