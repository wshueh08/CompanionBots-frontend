import React, { useState, useEffect} from 'react';
import './buy-now.css';

function BuyNow() {
    const [formData, setFormData] = useState({
        name: '',
        mobilePhone: '',
        email: '',
        confirmEmail: '',
        purchaseItem: '',
        shippingAddress: '',
        billingAddress: '',
        isBillingSame: false
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    useEffect(() => {
  
        if (formData.email && !validateEmail(formData.email)) {
            setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
        } else {
            const newErrors = { ...errors };
            delete newErrors.email;
            setErrors(newErrors);
        }


        if (formData.email !== formData.confirmEmail) {
            setErrors(prev => ({ ...prev, confirmEmail: 'Email addresses must match!' }));
        } else {
            const newErrors = { ...errors };
            delete newErrors.confirmEmail;
            setErrors(newErrors);
        }
    }, [formData.email, formData.confirmEmail]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        setFormData(prev => ({
            ...prev,
            isBillingSame: checked,
            billingAddress: checked ? prev.shippingAddress : ''
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const requiredFields = ['name', 'email', 'confirmEmail', 'purchaseItem', 'shippingAddress'];
        if (!formData.isBillingSame) {
            requiredFields.push('billingAddress'); 
        }
    


        const emptyField = requiredFields.some(field => !formData[field]);
    
        if (emptyField) {
          setMessage('All required fields must be filled out.');
          console.log('Submit unsuccessful: Not all required fields were filled out.');
          return;
        }
    

        if (Object.keys(errors).length > 0) {
          setMessage('Please correct the errors before submitting');
          console.log('Submit unsuccessful: There are errors in the form that need to be corrected.');
          return;
        }
    
        setMessage('Form submitted successfully!');
        console.log('Submit successful: Form submitted successfully!');
    };


    return (
        <div className="buy-page">
            <form id="main-content" className="buy-now-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: <span className="required-text">*required</span></label>
                    <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} aria-label="Full name" required />
                </div>
                <div>
                    <label htmlFor="mobilePhone">Mobile Phone: </label>
                    <input id="mobilePhone" name="mobilePhone" type="text" value={formData.mobilePhone} onChange={handleChange} aria-label="Mobile phone number" />
                </div>
                <div>
                    <label htmlFor="email">Email Address: <span className="required-text">*required</span></label>
                    <input id="email" name="email" type="text" value={formData.email} onChange={handleChange} aria-label="Email address" required />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="confirmEmail">Confirm Email Address: <span className="required-text">*required</span></label>
                    <input id="confirmEmail" name="confirmEmail" type="text" value={formData.confirmEmail} onChange={handleChange} aria-label="Confirm email address" required />
                    {errors.confirmEmail && <span className="error">{errors.confirmEmail}</span>}
                </div>
                <div>
                    <label htmlFor="purchaseItem">Purchase Item: <span className="required-text">*required</span></label>
                    <select id="purchaseItem" name="purchaseItem" value={formData.purchaseItem} onChange={handleChange} aria-label="Select purchase item" required >
                        <option value="">Select a robot</option>
                        <option value="male robot">Male Robot</option>
                        <option value="female robot">Female Robot</option>
                        <option value="kid robot">Kid Robot</option>
                        <option value="pet dog robot">Pet Dog Robot</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="shippingAddress">Shipping Address: <span className="required-text">*required</span></label>
                    <textarea id="shippingAddress" name="shippingAddress" value={formData.shippingAddress} onChange={handleChange} aria-label="Shipping address" required ></textarea>
                </div>
                <div>
                    <label htmlFor="billingSame">Billing address same as shipping address:</label>
                    <input id="billingSame" type="checkbox" name="isBillingSame" checked={formData.isBillingSame} onChange={handleCheckboxChange} aria-label="Use shipping address for billing" />
                </div>
                <div>
                    <label htmlFor="billingAddress">Billing Address: <span className="required-text">*required</span></label>
                    <textarea id="billingAddress" name="billingAddress" value={formData.billingAddress} onChange={handleChange} readOnly={formData.isBillingSame} aria-label="Billing address" required={!formData.isBillingSame} ></textarea>
                </div>
                <button type="submit">Submit</button>
                {message && <p className="form-message">{message}</p>}
            </form>
        </div>
    );
}

export default BuyNow;


