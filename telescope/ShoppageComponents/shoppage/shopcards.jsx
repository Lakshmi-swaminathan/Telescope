import React, { useState, useEffect} from 'react';
import '../../styles/shopcards.css';
// import Data from './data'

export default function Card(props) {
  const [stars, setStars] = useState(0)
  const [data, setData] = useState([])


  useEffect(() => {
    fetch('/api/data?availability=In Stock&price=Low to High&sort=Newest')
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);


  // function handleClick(i) {
  //   if (i === stars) {
  //     setStars(0);
  //   } else {
  //     setStars(i);
  //   }
  // }
  const numberofStars = parseInt(props.rating, 10);
  console.log(numberofStars)
  return (
    
    <div className="card">
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="stars">
            <p>{'★'.repeat(props.rating)}</p>
        </div>


        <div className="price">{props.price}</div>
        <button className="buy">Buy Now</button>
    </div>
   
    
  );
}
