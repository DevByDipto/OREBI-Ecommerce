import React from 'react'

function List({className,children}) {
  return (
<li className= {`list-none text-dm text-secondary hover:text-primary text-sm hover:font-bold duration-300 cursor-pointer ${className}`} >{children}</li>
)
}

export default List