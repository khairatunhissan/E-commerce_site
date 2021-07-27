import React from 'react'
import './Home.css'
import Product from './Product'
import img1 from './image/img1.jpg'
import img3 from './image/img3.jpg'
import img4 from './image/img4.jpg'

function Home() {
    return (
        <div className="home">
            <div className='home_container'>
                <img className="home_image"
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'/>

             <div className='home_row'>
                 <Product
                 id='12321341'
                 title='The Lean Startup: How Innovation Creates Radically Successful Business Paperback'
                 price={11.96}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
                 />

             
             <Product
                 id='49538094'
                 title='kenwood kMix Stand Mixer for Baking, Stylish Kichen Mixer with K-beater , Dough Hook and Whisk, 5 Litre Glass Bowl'
                 price={239.0}
                 rating={4}
                 image={img1}
                 />

             </div>
             <div className='home_row'>
             <Product
                 id='4903850'
                 title='Samsung Watch'
                 price={199.99}
                 rating={3}
                 image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                 />

               <Product
                 id='23445930'
                 title='Amazon Echo (3rd generation)| Smart Speaker with Alexa, Charcoal Fabric'
                 price={98.96}
                 rating={5}
                 image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
                 />

                <Product
                 id='3264554345'
                 title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
                 price={589.99}
                 rating={4}
                 image={img3}
                 />

             </div>
             <div className='home_row'>
             <Product
                 id='4112345'
                 title='Samsung Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD x 1440'
                 price={1094.98}
                 rating={4}
                 image={img4}
                 />
                 </div>
            </div>
            
        </div>
    )
}

export default Home
