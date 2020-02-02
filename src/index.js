import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {usePromiseTracker} from 'react-promise-tracker';
import Loader from 'react-loader-spinner'


const LoadingIndi = props =>{
    const {promiseInProgress} = usePromiseTracker({delay:200});
    return(
        promiseInProgress &&
        <div style={{
            justifyContent:'center',
            alignItems:'center',
            width:'100',
            display:'flex'}}>
            
            <Loader type='ThreeDots' color='#ffffff' height = {100} width={100}
            
            />
        </div>
        
    )
}

ReactDOM.render(<BrowserRouter>
<App />
<LoadingIndi/>

</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
