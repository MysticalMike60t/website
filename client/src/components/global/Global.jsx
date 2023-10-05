import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
    return(
        <header className="container__header" id="header">
            <ul className="header__ul">
                <li className="ul__li">
                    <Link className="li__Link">Placeholder</Link>
                </li>
            </ul>
        </header>
    )
}

const Layout = () => {
  return (
    <div className="container">
        <Header />
        <Outlet />
    </div>
  )
}

const NoPage = () => {
    return(
        <div className="container__page nopage">
            <h1 className="page__title">
                "{window.location.pathname}" does not exist.
            </h1>
            <Link className='page__Link' to="/"></Link>
        </div>
    )
}

export { Layout, Header, NoPage }