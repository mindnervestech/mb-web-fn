import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import DashboardPage from './containers/DashboardPage'
import ArticlePage from './containers/ArticlePage'


export default <Route path="/user" component={App}>
 
  <Route path="/dashboard"
         component={DashboardPage} />
   <Route path="/article/:id" component={ArticlePage}/>
         
</Route>