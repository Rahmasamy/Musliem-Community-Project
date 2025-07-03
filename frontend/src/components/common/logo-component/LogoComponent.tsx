import { LogoProps } from '@/components/interfaces/logo.types'
import React, { Fragment } from 'react'
import Logo from '@/assets/imgs/logo.png'
const LogoComponent:React.FC<LogoProps> = ({desc}) => {
return (
    <Fragment>
        <img src={Logo} alt="Muliem Community Logo" className="w-28 h-16" />
        <h2>MCUS</h2>
        <p>
            <span className="span-welcome">Welcome!</span>
            {desc}
        </p>
    </Fragment>
)
}
export default LogoComponent;