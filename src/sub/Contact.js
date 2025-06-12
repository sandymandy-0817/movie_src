import React from 'react';
import '../css/sub.css';

function Sub2(props) {
    return (
        <section className='sub contact'>
            <h2>Contact Us</h2>
            <form>
                <p>
                    <label>Name : </label>
                    <input type='text'/>
                </p>
                <p>
                    <label>E-Mail : </label>
                    <input type='email' />
                </p>
                <p>
                    <label>Subject : </label>
                    <textarea cols='60' rows='15'></textarea>
                </p>
                <input type='submit' value='Send'/>
            </form>
        </section>
    );
}

export default Sub2;