import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
    <div className="container">
      <a href="#" id="LogoLink">
        <span>Tigris</span>
      </a>
      <button id="MenuButton">
        <span className="material-symbols-outlined">pets</span>
      </button>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <section className="container">
      <h1>Discover the Majestic Beauty of Tiger Reservoir</h1>
      <p>
        Embark on a journey to Tiger Reservoir, a haven of natural splendor.
        Nestled in pristine landscapes, this sanctuary beckons with untamed
        beauty. Explore diverse ecosystems and witness wildlife in its
        undisturbed habitat. Immerse yourself in the serenity of nature's
        harmony, making each moment at Tiger Reservoir an unforgettable
        experience.
      </p>
      <div className="buttonHolder">
        <a href="#" className="button CalltoAction">
          Book Safari
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
        <a href="#" className="button buttonSecondary">
          Contact Us
        </a>
      </div>
    </section>
    <section id="section-about">
      <div className="container">
        <h2>About Tiger Reservoir</h2>
        <p>
          Discover Tiger Reservoir, a hidden gem where nature's wonders unfold.
          This sanctuary, teeming with biodiversity, invites you to witness the
          grace of wildlife in their natural habitat. Immerse yourself in the
          tranquility of its landscapes, creating lasting memories amid the
          untouched beauty that defines Tiger Reservoir.
        </p>
      </div>
    </section>
    <section>
      <div className="container">
        <h2>Roars and Insights</h2>
        <div className="blog-list">
          <article className="blog">
            <h3>Conserving the Majestic Felins</h3>
            <p>
              Championing the cause of majestic big cats, our mission is
              dedicated to conserving their habitats and securing a future where
              these magnificent creatures thrive in harmony with nature
            </p>
          </article>
          <article className="blog">
            <h3>Conserving the Majestic Felins</h3>
            <p>
              Championing the cause of majestic big cats, our mission is
              dedicated to conserving their habitats and securing a future where
              these magnificent creatures thrive in harmony with nature
            </p>
          </article>
          <article className="blog">
            <h3>Conserving the Majestic Felins</h3>
            <p>
              Championing the cause of majestic big cats, our mission is
              dedicated to conserving their habitats and securing a future where
              these magnificent creatures thrive in harmony with nature
            </p>
          </article>
          <article className="blog">
            <h3>Conserving the Majestic Felins</h3>
            <p>
              Championing the cause of majestic big cats, our mission is
              dedicated to conserving their habitats and securing a future where
              these magnificent creatures thrive in harmony with nature
            </p>
          </article>
          <article className="blog">
            <h3>Conserving the Majestic Felins</h3>
            <p>
              Championing the cause of majestic big cats, our mission is
              dedicated to conserving their habitats and securing a future where
              these magnificent creatures thrive in harmony with nature
            </p>
          </article>
        </div>
      </div>
    </section>
  </main>
    </>
  )
}

export default App
