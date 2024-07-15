import React, { useState } from 'react';
import Card from './Card';
import image2 from './assets/images/malerobot.jpg';
import image3 from './assets/images/femalerobot.jpg';
import image4 from './assets/images/kidrobot.jpg';
import image5 from './assets/images/dog.jpg';
import './homepage.css';


function HomePage({ setPage }) {

    const initialProducts = [
        { title: "Male Robot", img: image2, altText: "A sturdy white male robot designed for security and daily tasks", text: "Your smart, robust companion for security and daily tasks. Adapts to your life with advanced AI.", price: 460.00 },
        { title: "Female Robot", img: image3, altText: "An elegant black female AI robot offering support and management solutions", text: "Elegant, intuitive assistant offering emotional support and home management.", price: 499.99 },
        { title: "Kid Robot", img: image4, altText: "A child-friendly robot with big eyes and a cheerful smile", text: "Engaging, educational companion for children with autism.", price: 399.99 },
        { title: "Pet Dog Robot", img: image5, altText: "A cute dark gray robot dog stretching and yawning", text: "Your playful, maintenance-free robotic dog. Perfect for families and allergy sufferers.", price: 280.50 }
    ];
    
    
    const [products, setProducts] = useState(initialProducts);
    const [sortOrder, setSortOrder] = useState('recommendations');
    

    const navigateToLocation = (e) => {
        e.preventDefault(); 
        window.history.pushState({}, '', '/locations');
        setPage('/locations');
    };

    const sortProducts = (order) => {
        const sortedProducts = [...initialProducts];
        if (order === 'highToLow') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (order === 'lowToHigh') {
            sortedProducts.sort((a, b) => a.price - b.price);
        }
        setProducts(sortedProducts);
        setSortOrder(order);
    };

    
    return (
        <div className="home-page">
            <div className="filter-controls">
                Sort by: {' '}
                <select value={sortOrder} onChange={e => sortProducts(e.target.value)}>
                    <option value="recommendations">Our Recommendations</option>
                    <option value="highToLow">Price (High-Low)</option>
                    <option value="lowToHigh">Price (Low-High)</option>
                </select>
            </div>
            <div id="main-content"> 
                {products.map((product, index) => (
                    <Card key={index} className="card" onClick={() => {}}>
                        <h2 className="card__title">{product.title}</h2>
                        <img className="card__pic" alt={product.altText} src={product.img}/>
                        <p className="card__text">{product.text}</p>
                        <p className="card__price">${product.price.toFixed(2)}</p>
                        <a className="card__link" href="#locations" onClick={navigateToLocation}>
                            See where to buy
                        </a>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default HomePage;