import { LogoProps } from '@/components/interfaces/logo.types'
import React, { Fragment } from 'react'
import Logo from '@/assets/imgs/logo.jpg'
const LogoComponent:React.FC<LogoProps> = ({desc}) => {
return (
    <Fragment>
        <img src={Logo} alt="Musliem Community Logo" className="w-28 h-16 rounded-xl border-2 border-orange-200" />
        {/* <h2>CRESENT HUB</h2> */}
        <p>
            <span className="span-welcome">Welcome!</span>
            {desc}
        </p>
    </Fragment>
)
}
export default LogoComponent;