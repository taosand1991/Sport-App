import React from 'react';



const PlayerData2 = ({position1, picture1, country1, 
    agent1, wage1, favKit1, dateOb1, description1, birthCountry1,club1, shirtN1, pic21, pic31, playName1,
data}) => {
        function loadPic3(){
            if(pic31){
                return <div class="carousel-item">
                <img src={pic31} class="d-block w-100" alt="..."></img>
              </div>
            }
        }
        const wageList =()=>{
            if(wage1){
                return <h6>WAGE: {wage1}</h6>
            }
        }
        const listItem = ()=> {
            if(pic31){
                return <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            }
        };
        const displayEr = () =>{
            if(favKit1 && club1 && shirtN1 && playName1 ){
               return       <div><h6>FAVORITE KIT : {favKit1}</h6>
                            <h6>CLUB: {club1}</h6>
                            <h6>AGENT : {agent1}</h6>
                            <h6>SHIRT NUMBER: {shirtN1}</h6>
                            </div>
            }
                    
            
        };
        function loadData(){
            if(picture1 && pic21 && description1 && position1 && dateOb1 && country1
                && birthCountry1){
                return <div className="row ml-9 ">
                    <div className="col-sm-4">
                        <div className="card ml-3 " style={{width:'30rem'}}>
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    {listItem()}
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={picture1} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item ">
      <img src={pic21} class="d-block w-100" alt="..."></img>
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
                    <div className="col-sm-4 ml-3">
                        <div className="card ">
                            <div className="card-header">
                            <h5 className='text-center'>{playName1}</h5>
                            </div>
                        <div className='card-body' id='ontop3'>
                        <p className='card-text'>{description1}</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-header">
                                <h5 className='text-center'>Player Details</h5>
                            </div>
                            <div className="card-body">
                            <h6>POSITION PLAYED : {position1}</h6>
                            <h6>DATE OF BIRTH : {dateOb1}</h6>
                            {wageList()}
                            <h6>NATIONALITY : {country1}</h6>
                            <h6>PLACE OF BIRTH : {birthCountry1}</h6>
                                {displayEr()}

                            </div>
                        </div>
                    </div>
                </div>
            }
        }
        const getYou = loadData()
    return (
        <div>
        {getYou}
        </div>
    );
};




export default PlayerData2;