import React from 'react';
import {Switch, Route ,BrowserRouter} from 'react-router-dom';
import Repositories from './pages/Repositories';
import Home from './pages/Home';



export default Routes(){
    return(
       <BrowserRouter>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/repositories' component={Repositories}/>
        
        </Switch>
       </BrowserRouter>
    )
}

