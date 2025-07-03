import React from 'react'

const   RightAuthContainer:React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <div className='AvatarLoginContainer h-full p-8 flex flex-col overflow-hidden justify-center items-center' >{children}</div>
  )
}
export default RightAuthContainer;