import React from 'react'


// Obyektin parcalanmasi ile getirilir


interface KartlarinProps {
  shekilProps:string;
  articleProps:string;
  muellifProps:string;
}

const PersonCard:React.FC<KartlarinProps> = ({shekilProps, articleProps, muellifProps}) => {
  return (

    <div className="card">
                    <img src={shekilProps} className="card-img-top" alt={muellifProps} />
                    <div className="card-body">
                      
                      <p className="card-text">{articleProps}</p>
                      <h5 className="card-title">{muellifProps}</h5>
                    </div>
                  </div>
     
  )
}

export default PersonCard