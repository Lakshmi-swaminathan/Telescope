

import guitar from './images/Guitar.jpeg';
import umbrella from './images/Umbrella.jpeg';
import shades from './images/Shades.jpeg';
import chair from './images/Chair.jpeg';
import table from './images/Table.jpeg';
import HomePagestyle from './style/HomePage.css'

const items = [
    {
        name: 'Acoustic Guitar',
        price: '$300',
        condition: 'New',
        tags: ['Music', 'Instrument', 'String'],
        image: guitar,
    },
    {
        name: 'Umbrella',
        price: '$15',
        condition: 'Used',
        tags: ['Rain', 'Accessories'],
        image: umbrella,
    },
    {
        name: 'Sunglasses',
        price: '$50',
        condition: 'New',
        tags: ['Fashion', 'Eyewear'],
        image: shades,
    },
    {
        name: 'Armchair',
        price: '$150',
        condition: 'Used',
        tags: ['Furniture', 'Comfort'],
        image: chair,
    },
    {
        name: 'Coffee Table',
        price: '$80',
        condition: 'Used',
        tags: ['Furniture', 'Living Room'],
        image: table,
    },
];

const HomePage = () => {
    return (
        <div className="HomePage">
            {items.map((item, index) => (
                <div className="item" key={index}>
                    <div className="image-container">
                        <img src={item.image} alt={item.name} width="250" height="200" />
                    </div>
                    <div className="item-details">
                        <h3>{item.name}</h3>
                        <p>Price: {item.price}</p>
                        <p>Condition: {item.condition}</p>
                        <p>Tags: {item.tags.join(', ')}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomePage;





// // import guitar from './components/guitar.jpeg'
// import guitar from './images/Guitar.jpeg';
// import umbrella from './images/Umbrella.jpeg';
// import shades from './images/Shades.jpeg';
// import chair from './images/Chair.jpeg';
// import table from './images/Table.jpeg';
// import HomePagestyle from './style/HomePage.css'




// const HomePage = () => {
//     return ( 

//         <div className="HomePage">
//             <div className="image-container">
//                 <img src={guitar} width="250" height="200" alt="an image" />
//             </div>

//             <div className="image-container">
//                 <img src={umbrella} width="250" height="200" alt="an image" />
//             </div>

//             <div className="image-container">
//                 <img src={shades} width="250" height="200" alt="an image" />
//             </div>

//             <div className="image-container">
//                 <img src={chair} width="250" height="200" alt="an image" />
//             </div>

//             <div className="image-container">
//                 <img src={table} width="250" height="200" alt="an image" />
//             </div>

//         </div>

// // // {/* <div class="image-container">
// // // <a href="https://www.youtube.com/watch?v=hlSIGK7S8Is&list=PLofmCZWRdOtl1dM2XQPx2_8KxveP6KbTt">
// // //     <img src="jazz.jpeg" alt="Image 2" width="200" height="150">
// // //     <span class="label">Jazz</span> */}
// // </a>
// // </div>
//      );
// }
 
// export default HomePage;