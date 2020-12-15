import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            {/* Row 1 */}
            <div className="home__row">
                <Product 
                id="1231241"
                title="Think Like a Monk"
                rating={5}
                price={260}
                image="https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg"
                />

                <Product 
                    id="433462"
                    title="Vivo Y20 (Purist Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
                    rating={4}
                    price={12999}
                    image="https://images-na.ssl-images-amazon.com/images/I/51GkdMbNKfL._SL1200_.jpg"
                /> 
            </div>

            {/* Row 2 */}
            <div className="home__row">
                <Product 
                    id="4563426"
                    title="Adidas Men's Hellion Z M Running Shoes"
                    rating={4}
                    price={1748.90}
                    image="https://images-na.ssl-images-amazon.com/images/I/712AsoD8uTL._UL1500_.jpg"
                /> 
                <Product 
                    id="57858"
                    title="Harry Potter and the Prisoner of Azkaban Paperback – 8 October 2020"
                    rating={5}
                    price={657.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/91N+Bg7B5OL.jpg"
                /> 
                <Product 
                    id="47356"
                    title="Bajaj Rex Mixer Grinder, 500W, 3 Jars (White)"
                    rating={4}
                    price={1999.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/7176dXpdwrL._SL1500_.jpg"
                /> 
                
            </div>

            {/* Row 3 */}
            <div className="home__row">
                <Product 
                    id="47356"
                    title="Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)"
                    rating={5}
                    price={34990.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/81lpllAGcBL._SL1500_.jpg"
                /> 
            </div>

            {/* Row 4 */}
            <div className="home__row">
                <Product 
                    id="4563426"
                    title="Apple AirPods with Charging Case"
                    rating={4}
                    price={12490.90}
                    image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._SL1500_.jpg"
                /> 
                <Product 
                    id="57858"
                    title="Fossil Nate Chronograph Analog Black Dial Men's Watch - JR1401"
                    rating={5}
                    price={11295.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/81MYLtWb5cL._UL1500_.jpg"
                /> 
                <Product 
                    id="4563426"
                    title="Sapiens: A Brief History of Humankind Paperback – 11 June 2015"
                    rating={4}
                    price={248.90}
                    image="https://images-na.ssl-images-amazon.com/images/I/41X8OYTbLZL._SX324_BO1,204,203,200_.jpg"
                /> 
                
                
            </div>

            
        </div>

        
    )
}

export default Home
