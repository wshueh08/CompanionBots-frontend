import React from 'react';
import './faq.css'; 
import faqImage from './assets/images/FAQ.jpg'; 

function FAQ() {
    return (
        <div id="main-content">
            <div className="faq">
                <h4>Frequently Asked Questions</h4>
                <div className="faq-item">
                    <h5>How do I contact customer service?</h5>
                    <p>You can contact our customer service by calling +1 234-567-890 or emailing support@example.com.</p>
                </div>
                <div className="faq-item">
                    <h5>What is the return policy?</h5>
                    <p>Our products can be returned within 30 days of the original purchase of the product. A new product may be exchanged for another product or returned for a refund.</p>
                </div>
                <div className="faq-item">
                    <h5>Do you offer international shipping?</h5>
                    <p>Yes, we ship internationally. Shipping costs will vary depending on the destination and the size of the order.</p>
                </div>
                <div className="faq-item">
                    <h5>What payment methods do you accept?</h5>
                    <p>We accept various payment methods for your convenience. You can pay using major credit cards including Visa, MasterCard, and American Express. Additionally, we support payments through PayPal and bank transfers.</p>
                </div>
                <div className="faq-item">
                    <h5>How can I check the status of my order?</h5>
                    <p>Once your order is shipped, you will receive a shipping confirmation email that contains tracking information. You can use this information to track your order through our website or directly on the courier's website. If you have an account with us, you can also view the status of your order in the "My Orders" section of your account dashboard.</p>
                </div>
            </div>
            <img src={faqImage} alt="A white robot standing on the street" className="faq-image" />
        </div>
    );
}

export default FAQ;
