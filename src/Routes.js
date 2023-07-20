import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='/'>
            <Homepage />
        </Route>
      </Switch>
      </BrowserRouter>
  )
}

