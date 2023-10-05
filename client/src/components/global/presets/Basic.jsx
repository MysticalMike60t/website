import React from 'react'

const Basic = () => {
  return (
    <div className="container__page basic">
        <h1 className="page__title">
            {window.location.pathname.replace("/","")}
        </h1>
    </div>
  )
}

export default Basic