// import React from 'react';
import './../contact_us_style.css'
import React, { Component } from 'react';
import axios from 'axios';

export default class ContactUsMeetFrom extends Component {

    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phnumber: '',
            companyname: '',
            comments: '',
            sent: false
        };
    }
    componentDidMount() { }
    handleFirstNameChange = (event) => {
        this.setState({ firstname: event.target.value });
    };

    handleLastNameChange = (event) => {
        this.setState({ lastname: event.target.value });
    };

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePhnumberChange = (event) => {
        this.setState({ phnumber: event.target.value });
    };

    handleCompanyNameChange = (event) => {
        this.setState({ companyname: event.target.value });
    };

    handleCommentsChange = (event) => {
        this.setState({ comments: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;

        axios.post('/conatact/form_send', data)
            .then(res => {
                // console.log('success')
                this.setState({
                    sent: true,
                }, this.resetForm())
            }).catch(() => {
                console.log('Error : msg not sent ');
            })
    };

    resetForm = () => {
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            phnumber: '',
            companyname: '',
            comments: ''
        })
        setTimeout(() => {
            this.setState({
                sent: false,
            })
        }, 3000)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >                
                    <div className="wrapper">
                        <div> <span className='conatactspan' >First name *</span></div>
                        <div> <span className='conatactspan'>Last name *</span></div>
                    </div>

                    <div className="wrapper">
                        <div> <input type="text"
                            name="firstname"
                            placeholder="First name"
                            required={false}
                            // pattern="[A-Za-z]"
                            onChange={this.handleFirstNameChange}
                            value={this.state.firstname}
                        />
                        </div>

                        <div> <input type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Last name"
                            required="true"
                            // pattern="[A-Za-z]"
                            onChange={this.handleLastNameChange}
                            value={this.state.lastname}
                        />
                        </div>
                    </div>


                    <div className="wrapper">
                        <div> <span className='conatactspan'>Email *</span></div>
                        <div><span className='conatactspan'>Phone number *</span></div>
                    </div>

                    <div className="wrapper">
                        <div>
                            <input type="email"
                                id="email"
                                name="email"
                                placeholder="Email id"
                                required="true"
                                onChange={this.handleEmailChange}
                                value={this.state.email}
                            />
                        </div>
                        <div>
                            <input type="number"
                                id="phnumber"
                                name="phnumber"
                                placeholder="Phone number"
                                required="true"
                                onChange={this.handlePhnumberChange}
                                value={this.state.phnumber}

                            />
                        </div>
                    </div>

                    <div className="wrapper">
                        <div><span className='conatactspan'>Company name *</span></div>
                    </div>

                    <div className="wrapper">
                        <div>
                            <input type="text"
                                id="companyname"
                                className='companytext'
                                name="companyname"
                                placeholder="Company name"
                                required="true"
                                onChange={this.handleCompanyNameChange}
                                value={this.state.companyname}
                            />
                        </div>
                    </div>

                    <div className="wrapper">
                        <div> <span className='conatactspan'>What are you looking to accomplish on this call?*</span>
                        </div>
                    </div>

                    <div className="wrapper">
                        <div>
                            <textarea
                                className='textareaa'
                                placeholder="Write something.."
                                required="true"
                                onChange={this.handleCommentsChange}
                                value={this.state.comments}
                            ></textarea>
                        </div>
                    </div>

                    {/* <div className="wrapper">

                        <p className='formdetails'>We're committed to your privacy. HubSpot uses
                            the information you provide to us to contact you
                            about our relevant content, products, and services.
                            You may unsubscribe from these communications at
                            any time.
                            For more information, check out our</p>

                    </div>

                    <div className="wrapper" >
                        <div className="center">
                            <button type="submit" className='btnstyle'>Submit</button>
                        </div>
                    </div> */}

                    <div className="wrapper">
                        <div className={this.state.sent ? 'msg msgAppear' : 'msg'}> Message sened successfully</div>
                    </div>
                </form>
            </div >
        );
    }
}