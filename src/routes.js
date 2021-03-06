import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import DashboardPage from './containers/DashboardPage'
import ArticlePage from './containers/ArticlePage'
import ArticleDataGrid from './containers/ArticleDataGrid'
import CreateArticle from './containers/CreateArticle'
import Editor from './containers/Editor'




export default <Route path="/user" component={App}>
 
  <Route path="/dashboard"
         component={DashboardPage} />
   <Route path="/article/:id" component={ArticlePage}/>
   <Route path="/articleGrid" component={ArticleDataGrid}/>
   <Route path="/createArticle" component={CreateArticle}/>
   <Route path="/editor" component={Editor}/>
         
</Route>
