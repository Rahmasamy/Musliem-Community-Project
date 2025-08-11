import React from 'react'

const   LeftAuthContainer:React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <div className='LeftLoginContainer p-2 ' >{children}</div>
  )
}
export default LeftAuthContainer;