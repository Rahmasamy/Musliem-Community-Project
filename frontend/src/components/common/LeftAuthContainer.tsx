import React from 'react'

const   LeftAuthContainer:React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <div className='LeftLoginContainer h-full  p-9 ' >{children}</div>
  )
}
export default LeftAuthContainer;