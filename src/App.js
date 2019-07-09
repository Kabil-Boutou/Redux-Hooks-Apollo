import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const About = lazy(() => import('./hooks/about'))
const Home = lazy(() => import('./hooks/home'))

const App = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback="loading ...">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Suspense>
      </Switch>
    </Router>
  )
}

export default App
