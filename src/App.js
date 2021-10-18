import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './components/pages/Home'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Services from './components/pages/Services'
import Update from './components/pages/Update'
import Protected from './components/pages/Protected'
import Errorpage from './components/pages/Errorpage'
import Todo from './components/Todo/Todo'
import Contact from './components/pages/Contact'

const App = () => {

  const [user, setUser] = useState(null);
  useEffect(() => {
     /*
      setInterval used in order to refresh the page constantly
  in order to have the "logout" button show immediately in place of
  "login", as soon as user logs out.
  */
    setInterval(() => {
      const a = localStorage.getItem("user-login")
      setUser(a)
    }, [])

  }, []);

  return (
    <Router>
    <>
        <Navbar user={user} />
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/todo" component={Todo} />
          <Route exact path="/services">  <Protected cmp={Services}/> </Route>
          {/* <Route exact path="/todo">  <Protected cmp={Todo}/> </Route> */}
          <Route exact path="/update">  <Protected cmp={Update}/> </Route>
          
          <Route path="*" component={Errorpage} />
        </Switch>
      </div>
        <Footer />
    </>
   </Router>
  )
}

export default App
