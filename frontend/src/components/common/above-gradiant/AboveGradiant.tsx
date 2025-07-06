
import React, { JSX, ReactNode } from 'react';
import './AboveGradiantParent.css';
import { AboveGradiantParentProps } from '../../interfaces/AboveGradiantParentProps.types'


export default function AboveGradiantParent({ children }: AboveGradiantParentProps): JSX.Element {
  return (
    <div className='AboveGradiantParent'>
      {children}
    </div>
  );
}
