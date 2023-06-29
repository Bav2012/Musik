import React from 'react'

function Navbar() {
  return (
<>
<div className='container-fluid fixed-top'>
<h1 style={{color:"aqua"}} >Musik</h1>
<nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">
      Musik
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">
            Home
          </a>
        </li>
        
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-light"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Apps
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#Spotify">
                About Musik
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#Library">
                Your Library
              </a>
            </li>
            
          </ul>
        </li>
        
        <li className="nav-item">
          <a className="nav-link text-light" href="https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F%3F">
            Log In
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={("yellowgreen")} className="btn btn-info mx-2 py-3" id="green"></button>
        <button className="btn btn-outline-info" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
</div>
</>
  )
}

export default Navbar