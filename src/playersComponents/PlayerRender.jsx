import React from 'react';
import PlayerData2 from './PlayerData2';



const PlayerRender = ({position, picture, country, 
    agent, wage, favKit, dateOb, description, birthCountry,club, shirtN, pic2, pic3, playName,
data}) => {
        function loadPic3(){
            if(pic3){
                return <div class="carousel-item">
                <img src={pic3} class="d-block w-100" alt="..."></img>
              </div>
            }
        }
        const wageList =()=>{
            if(wage){
                return <h6>WAGE: <span id='go'>{wage}</span></h6>
            }
        }
        const listItem = ()=> {
            if(pic3){
                return <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            }
        };
        const displayEr = () =>{
            if(favKit && club && shirtN && playName ){
               return       <div><h6>FAVORITE KIT : <span id='go'>{favKit}</span></h6><br/>
                            <h6>CLUB: <span id='go'>{club}</span></h6><br/>
                            <h6>AGENT : <span id='go'>{agent}</span></h6><br/>
                            <h6>SHIRT NUMBER: <span id='go'>{shirtN}</span></h6><br/>
                            </div>
            }
                    
            
        };
        function loadData(){
            if(picture && pic2 && description && position && dateOb && country
                && birthCountry){
                return <div className="row ">
                    <div className="col-12 col-sm-6 col-xl-4">
                        <div className="card m-2" >
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    {listItem()}
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={picture} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item ">
      <img src={pic2} class="d-block w-100" alt="..."></img>
    </div>
    {loadPic3()}
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4 ">
                        <div className="card m-2">
                            <div className="card-header">
                            <h5 className='text-center'>{playName}</h5>
                            </div>
                        <div className='card-body' id='ontop3'>
                        <p className='card-text'>{description}</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4">
                        <div className="card m-2">
                            <div className="card-header">
                                <h5 className='text-center'>Player Details</h5>
                            </div>
                            <div className="card-body">
                            <h6>POSITION PLAYED : <span id='go'>{position}</span></h6><br/>
                            <h6>DATE OF BIRTH : <span id='go'>{dateOb}</span></h6><br/>
                            <div>{wageList()}</div><br/>
                            <h6>NATIONALITY : <span id='go'>{country}</span></h6><br/>
                            <h6>PLACE OF BIRTH : <span id='go'>{birthCountry}</span></h6><br/>
                                {displayEr()}

                            </div>
                        </div>
                    </div>
                </div>
            }
        }
        const getMe = loadData()
    return (
        <div>
        {getMe}
        <PlayerData2
        data={data}/>
        </div>
    );
};




export default PlayerRender;
