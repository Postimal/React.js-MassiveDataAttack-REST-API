import React from 'react'

const Pagination = ({total, currentPage, postsPerPage}) => {

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage

    return (
        <div>

        </div>
    )
}

export default Pagination
