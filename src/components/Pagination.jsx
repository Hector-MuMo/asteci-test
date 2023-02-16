import React from 'react'

const Pagination = ({ current, total, onChangePage }) => {

    const handlePrevPage = () => {
        if (current === 1) {
            onChangePage(1)
        } else {
            onChangePage(current - 1)
        }
    }

    const handleNextPages = () => {
        if (current >= total) {
            onChangePage(total)
        } else {
            onChangePage(current + 1)
        }
    }

    return (
        <div className='pagination-container'>
            <button onClick={handlePrevPage}>
                prev
            </button>
            <button onClick={handleNextPages}>
                next
            </button>
        </div>
    )
}

export default Pagination