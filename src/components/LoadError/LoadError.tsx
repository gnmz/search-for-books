import React, { FC } from 'react'

import './LoadError.css'

interface ILoadErrorProps{
    message: string
}

const LoadError:FC<ILoadErrorProps> = ({message}) => {
    return (
        <div className='load-error'>
            <h2>{message}</h2>
        </div>
    )
}

export default LoadError
