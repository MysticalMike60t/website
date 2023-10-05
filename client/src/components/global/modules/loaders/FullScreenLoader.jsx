import React from 'react'
import { DefaultLoader } from '.'

const FullScreenLoader = () => {
  return (
    <div className="container__page flex-center p-20 bg-default">
      <DefaultLoader />
    </div>
  )
}

export default FullScreenLoader