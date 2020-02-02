import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import PlayerRender from './PlayerRender'
import PlayerData2 from './PlayerData2'


const PlayerInput = ({getData, handleChange,position, picture, country, 
    agent, wage, favKit, dateOb, description, birthCountry,club, shirtN, playMaker, errorData,
     pic2, pic3, playName, data, position1, picture1, country1, 
     agent1, wage1, favKit1, dateOb1, description1, birthCountry1,club1, shirtN1, playMaker1,
      pic21, pic31, playName1,errorData1,position2, picture2, country2, 
    agent2, wage2, favKit2, dateOb2, description2, birthCountry2,club2, shirtN2, playMaker2,
     pic22, pic32, playName2, hanleReset
    }) => {
      
        function errorFunc () {
           if(errorData && errorData1){
               return <div className="row">
                   <div className="col-sm-6 offset-sm-3">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
               <strong>There is no player with that name found on this server. Check the name again </strong>
               <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>

                   </div>
               </div>
           }
       }
    return (
        <React.Fragment>
        <div className='top center'>
            <h3 className='text-center text-white'>Lets get through with this</h3>
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
            <form onSubmit={(getData)}  className='form-group'>
            <input onChange={handleChange} className='form-control' type="text" placeholder='your favorite player' value={playMaker} required/>
            <button className='btn btn-outline-success btn-lg shift' >search</button>
            </form>

                </div>
            </div>
        </div>
        {errorFunc()}
        <PlayerRender
        position={position}
        picture={picture}
        country={country}
        agent={agent}
        wage={wage}
        favKit={favKit}
        dateOb={dateOb}
        description={description}
        birthCountry={birthCountry}
        club={club}
        shirtN={shirtN}
        pic2={pic2}
        pic3={pic3}
        playName={playName}
        data={data}
        />
        <hr/>
        <PlayerData2
        position1={position1}
        picture1={picture1}
        country1={country1}
        agent1={agent1}
        wage1={wage1}
        favKit1={favKit1}
        dateOb1={dateOb1}
        description1={description1}
        birthCountry1={birthCountry1}
        club1={club1}
        shirtN1={shirtN1}
        pic21={pic21}
        pic31={pic31}
        playName1={playName1}
        errorData1={errorData1}
        />

        </React.Fragment>
    );
}

export default PlayerInput;
