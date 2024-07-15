import React, { useRef, useState } from 'react';
import Button from './Button';
import './modal.css';

function Modal() {
    const modalRef = useRef();
    const [username, setUsername] = useState('');  
    const [email, setEmail] = useState('');
    const [buttonText, setButtonText] = useState('Open Modal');

    const openModal = () => {
        modalRef.current.showModal();
        /*setFeedback('Modal opened!');*/
    };

    const closeModal = () => {
        modalRef.current.close();
        /*setFeedback('Modal closed!');*/
    };

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);  
    };

    const handleChangeEmail=(event)=>{
        setEmail(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if(username.trim()){
            setButtonText(`Hi ${username}`);
        }
        closeModal();
    };

    return (
        <main className="main"> 
            <Button onClick={openModal} type="button" visual="button">{buttonText}</Button>
            <dialog ref={modalRef} onClose={closeModal}>
                <form onSubmit={handleSubmit} className="modal-content">
                    <div className="modal-header">Hi {username}</div>
                    <div className="modal-body">
                        <label htmlFor="username">Username:</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={handleChangeUsername}  
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleChangeEmail}
                        />
                    </div>
                    <div className="modal-footer">
                        <Button type="submit" visual="link" className="button-style">Submit</Button>
                        <Button onClick={closeModal} type="button" visual="link" className="button-style">Close</Button>
                    </div>
                </form>
            </dialog>
        </main>
    );
}

export default Modal;
