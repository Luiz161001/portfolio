import React from 'react'

export const Pagination = ({ totalProjects, numberOfProjectsPerPage, changePage, currentPage }) => {
    let pages = [];
    const maxNumOfPages = Math.ceil(totalProjects/numberOfProjectsPerPage);

    for(let i = 1; i <= maxNumOfPages; i++)
        pages.push(i);

    const handleChange = (op) => {
        op === "-"
  ? changePage(((currentPage - 2 + maxNumOfPages) % maxNumOfPages) + 1)
  : changePage((currentPage % maxNumOfPages) + 1);
    }
 
    return (
        <div className='pagination-container'> 
            <button onClick={() => handleChange("-")}>{"<"}</button>
            {pages.map((page, index) => {
                return (
                    <button key={index} onClick={() => changePage(page)} className={page===currentPage?"active-page":""}>
                        {page}
                    </button>
                )   
            })}
            <button onClick={() => handleChange("+")}>{">"}</button>
        </div>
    )
};

