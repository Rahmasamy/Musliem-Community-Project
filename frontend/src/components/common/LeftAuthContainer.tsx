import React from 'react'

const   LeftAuthContainer:React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <div className='w-full lg:w-1/2 p-3 sm:p-4 md:p-6' >{children}</div>
  )
}
export default LeftAuthContainer;