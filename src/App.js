import React, { Component } from 'react'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import BandPage from './components/BandPage'
import TheWarOnDrugsImg from './Images/warondrugs.jpeg'
import WhiteLungImg from './Images/whitelung.jpeg'
import JimiHendrixImg from './Images/jimihendrix.jpeg'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link className="navlink" to="/">
              Home Page
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/thewarondrugs">
              The War On Drugs
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/jimihendrix">
              Jimi Hendrix
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/whitelung">
              White Lung
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/thewarondrugs">
          <BandPage
            name="The War On Drugs"
            imgSrc={TheWarOnDrugsImg}
            albumName="Deeper Understanding"
            albumYear="2017"
          />
        </Route>
        <Route exact path="/jimihendrix">
          <BandPage
            name="Jimi Hendrix"
            imgSrc={JimiHendrixImg}
            albumName="The Cry of Love"
            albumYear="1971"
          />
        </Route>
        <Route exact path="/whitelung">
          <BandPage
            name="White Lung"
            imgSrc={WhiteLungImg}
            albumName="Paradise"
            albumYear="2016"
          />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
//
