import React from 'react'
import styles from './Pagination.module.scss'

const Pagination = ({pageNumber,setPageNumber}) => {
  let next = () => {
    setPageNumber(x => x + 1);
  } ;

  let prev = () => {
    if(pageNumber === 1 ) return ;
    setPageNumber(x => x - 1);
  } ;
  return (
    <div className="{styles.pagination} d-flex justify-content-center gap-5 my-5"> 
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  )
}

export default Pagination