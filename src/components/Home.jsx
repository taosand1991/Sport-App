import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'


const Home = () => {
    return (
        <React.Fragment>       
<section>
    <div className="row center ">
        <div className="col-sm-6 offset-sm-3 border">
        <p className='text-white bolder '>
        <span id='bold'>Legacy Sport App</span>  let you search for your favorite player and team all around the
        world, providing best results pertaining to the team and player. The web app is solely 
        designed to search only for those two and on the player part, if the player details is not
        found, then you have to enter the full name to get the full result.
        Thank you as you browse through with my web app. 
    </p>
        </div>
    </div>  
</section>
<footer>
    <p className='text-center text-white bolder' style={{marginTop:'200px'}}>Designed by Legacy Graphics@2020</p>
</footer>
        </React.Fragment>
    );
}

export default Home;
