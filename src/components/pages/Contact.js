import React, { useState } from 'react'
import { useHistory } from 'react-router';

const Contact = () => {
    const history = useHistory();

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    })

    const InputEvent = (event) => {
        const { name, value } = event.target

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.fullname}.My mobile number is ${data.phone} and email is ${data.email}, Here is what i whant to say : ${data.msg} `
        )
        history.push("/");
    }

    return (
        <>
            <div className="main">

                <h1 style={{ fontSize: 30 }}>Contact US</h1>
                <p style={{ fontSize: 20 }}>Enter Your Details </p>

                <form className="contact " onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">
                            FullName
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="fullname"
                            value={data.fullname}
                            onChange={InputEvent}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">
                            Phone
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}
                            placeholder="mobile number"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">
                            Message
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            name="msg"
                            value={data.msg}
                            onChange={InputEvent}
                            required
                        />
                    </div>

                    <div className="col-12">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="invalidCheck"
                                required
                            />
                            <label className="form-check-label" for="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div className="contactbtnholder col-12">
                        <button className="contactbtn" type="submit">Submit form</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Contact