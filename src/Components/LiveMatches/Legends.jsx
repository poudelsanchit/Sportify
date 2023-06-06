import React from 'react'
import './Legends.css'
const PopularLiveMatches = () => {
  const legends = [{
    name: ' Cristiano Ronaldo',
    img: "https://i.pinimg.com/750x/65/0a/f0/650af073c4d8b386381321e8f0bb66e8.jpg",
    goals: '835 Career Goals'
  },
   {
    name: ' Lionel Messi',
    img: "https://i.pinimg.com/564x/47/06/37/47063765bf229b2f6e4bdd5037fcb70a.jpg",
    goals: '805 Carrer Goals'


  },{
    name: ' Pelé',
    img: "https://i.pinimg.com/564x/a8/38/f9/a838f989409a5f380a9ae21f03039fc7.jpg",
    goals:'757 Career Goals'

  },
   {
    name: 'Zinedine Zidane',
    img: "https://i.pinimg.com/564x/b7/ea/e7/b7eae7e8ea6aa37a2cb1b0f2f5ad35f5.jpg",
    goals: '125 Career Goals'  
  }
  ,
   {
    name: 'Maradona',
    img: "https://i.pinimg.com/564x/83/25/53/832553dd5a4f72e408a29515de450079.jpg",
    goals: '259 Career Goals'
  }
  ,
   {
    name: 'Johan Cruyff',
    img: "https://i.pinimg.com/564x/60/16/3a/60163ad2fd44467c6db9ec5d117d079e.jpg",
    goals: '327 Career Goals'  

  }
  
  
  ]
  return (
    <>
      <div className="Legends">
        <div className="Legend-Header">Greatest Fooballers Of All Time 🐐</div>

        <div className="Legends-list">
          {legends.map(({name,img,goals})=>{
            return (
            <div className="legend-list">
              <img src={img}  className='image-icon'/>
              <p>{name} <br /> {goals}</p>
          </div>)
          })}
         
         


        </div>

      </div>
    </>
  )
}

export default PopularLiveMatches