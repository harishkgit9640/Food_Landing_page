import React from 'react';
import './form.css';

const Contact = () => {
    return (
        <>
            <form action="">
                <div className="row1">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" placeholder='Enter You Name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" placeholder='Enter Your Mobile' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" placeholder='Enter You Name' />
                    </div>
                </div>
                <div className="row1">
                    <div className="form-group">
                        <label htmlFor="person">For How Many Person</label>
                        <select name="person" id="person">
                            <option value="1">single</option>
                            <option value="2">double</option>
                            <option value="3">family Pack</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input type="time" />
                    </div>
                </div>
                <button className='btn'>Submit</button>
            </form>
        </>
    )
}

export default Contact
