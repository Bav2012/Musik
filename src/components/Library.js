import React from 'react'

function Library() {

  return (
    <>
    <>
    <div className="container text-center" id="Library"></div>
    
  <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
      <title>Bootstrap</title>
      
   
  </svg>
  <main>
    <h1 className="visually-hidden">Features examples</h1>
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Your library</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#collection" />
            </svg>
          </div>
          <h3 className="fs-2">Believer</h3>
          <p>
            A song by rock band Imagine Dragons to express an emotion about how it feels to be lonely,embarrassed and stripped of your values and your life
          </p>
          <a href="#" className="icon-link d-inline-flex align-items-center">
            Tap to play
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#people-circle" />
            </svg>
          </div>
          <h3 className="fs-2">Kings and Queens</h3>
          <p>
           A song by Ava Max to signify the importance of women let anyone know that you're never alone.It is a self mottivator to let you know you will always get stronger.

          </p>
          <a href="#" className="icon-link d-inline-flex align-items-center">
            Tap to play
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#toggles2" />
            </svg>
          </div>
          <h3 className="fs-2">Flowers</h3>
          <p>
           By making this song, Miley Cyrus has reminded everyone that anyone can be independant and have thier own life.
          </p>
          <a href="#" className="icon-link d-inline-flex align-items-center">
            Tap to play
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="b-example-divider" />
    <div className="container px-4 py-5" id="hanging-icons">
      <h2 className="pb-2 border-bottom">Add to your Library!,Here are some popular songs!</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="col d-flex align-items-start">
          <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#toggles2" />
            </svg>
          </div>
          <div>
            <h3 className="fs-2">I'm Good</h3>
            <p>
             A song made by Bebe Rexha is to just enjoy the feeling of going out having the best time you can.

            </p>
            <a href="#" className="btn btn-primary">
               Tap to Add to Your Library
            </a>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#cpu-fill" />
            </svg>
          </div>
          <div>
            <h3 className="fs-2">Bad Habits</h3>
            <p>
              Bad Habits is by Ed Sheeran and it is purely loved because of it's melodious acoustics and rythmic tune.

            </p>
            <a href="#" className="btn btn-primary">
              Tap to Add to Your Library
            </a>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg className="bi" width="1em" height="1em">
              <use xlinkHref="#tools" />
            </svg>
          </div>
          <div>
            <h3 className="fs-2">Anti-Hero</h3>
            <p>
            Taylor Swift herself said that the song was a way to a hear persons nightmare scenarios and intrusive thoughts play out in real time. 
            </p>
            <a href="#" className="btn btn-primary">
              Tap to Add to Your Library
            </a>
          </div>
        </div>
      </div>
    </div>
   
  </main>
</>

    </>
  )
}

export default Library