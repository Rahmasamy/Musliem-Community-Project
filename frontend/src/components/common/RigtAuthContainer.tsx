import React from 'react'

const   RightAuthContainer:React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  return (
    <div className='AvatarLoginContainer w-full lg:w-1/2 h-full flex flex-col overflow-hidden justify-center items-center p-3 sm:p-4 md:p-6' >{children}</div>
  )
}
export default RightAuthContainer;