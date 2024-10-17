import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            validateEmail(value);
        }

        if (value.trim() !== '') {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }))
        }

        setFormState({ ...formState, [name]: value });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Enter a valid email address.'
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: ''}));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        Object.keys(formState).forEach((key) => {
            if (formState[key].trim() === '') {
                newErrors[key] = 'This field is required.';
            }
        })

        if (!errors.email && formState.email.trim() !== '') {
            validateEmail(formState.email);
        }

        if (Object.keys(newErrors).length > 0 || error.email) {
            setErrors({ ...errors, ...newErrors });
            return;
        }

        setFormState({ 
            name: '', 
            email: '', 
            message: '' 
        })

        alert('Message sent.')
    }

    return (
        <section className='contact'>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formState.name}
                        onChange={handleChange}
                        onBlur={handleChange}
                        required
                    />
                    {errors.name && <span className='error-text'>{errors.name}</span>}
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email Address:</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        value={formState.email}
                        onChange={handleChange}
                        onBlur={handleChange}
                        required
                    />
                    {errors.email && <span className='error-text'>{errors.email}</span>}
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Message:</label>
                    <textarea
                        id='message'
                        name='message'
                        value={formState.message}
                        onChange={handleChange}
                        onBlur={handleChange}
                        required
                    />
                    {errors.message && <span className='error-text'>{errors.message}</span>}
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </section>
    );
}

export default Contact;