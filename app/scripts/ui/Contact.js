"use strict";
import React, {Component} from "react";
import {Element} from "react-scroll";
import Translate from "../Translate";

import Input from "../material/Input";
import TextArea from "../material/TextArea";
import Button from "../material/Button";
import request from "superagent";

var Dropzone = require('react-dropzone');

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subject: "",
			email: "",
			content: "",
            captchaResponse: null,
			sendMailSuccess: true,
		};

	}
	onDrop(files) {
	}
	sendMail(event) {
		this.setState({sending: true});
		event.preventDefault();
		let {subject, email, content, captchaResponse} = this.state;
		if (this.isFormValid()) {
			this.setState({sendMailSuccess: null});
			request
			  .post('/api/mail')
			  .send({
			  	from: email,
			  	subject,
			  	content,
                captchaResponse
			  }).end((err, res) => {
				this.setState({
					sending: false,
					subject: "",
					email: "",
					content: "",
                    captchaResponse: null,
					sendMailSuccess: !err,
				});
			  });
		}
	}
	isFormValid() {
		let {subject, email, content, captchaResponse} = this.state;
		let emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		return (
			subject !== "" &&
			content !== "" &&
            captchaResponse !== null &&
            captchaResponse !== "" &&
			emailRe.test(email)
		);
	}
    recaptchaCallback(response) {
        this.setState({captchaResponse: response});
    }
    componentDidMount() {
        grecaptcha.render( 'mail-captcha', {
          'sitekey' : '6Ld_LR8TAAAAALRDzkgvfgLQpC2uGRFaGJ1Np6nQ',  // required
          'theme' : 'light',  // optional
          'callback': response => this.recaptchaCallback(response)  // optional
        });
    }
	renderSendMailStatus() {
		if (this.state.sendMailSuccess === null) return null;
		if (this.state.sendMailSuccess) {
			return (<div className="status success">Thanks, I'll get back to you as soon as possible</div>);
		} else {
			return (<div className="status error">Sorry, there's been an error</div>);
		}
	}
	render() {
		let {subject, email, content, sending} = this.state;

		return (
			<Element id="contact" name="contact" className="block" >
				<Translate component="h1" content="contact.title" />
				{this.renderSendMailStatus()}
				<form action="#">
					<Input label="email" value={email} onChange={(value) => this.setState({email: value})} required/>
					<Input label="subject" value={subject} onChange={(value) => this.setState({subject: value})}/>

					<TextArea label="content" value={content} onChange={(value) => this.setState({content: value})} />
					{/*
					<Dropzone onDrop={files => this.onDrop(files)}>
		              <div>Try dropping some files here, or click to select files to upload.</div>
		            </Dropzone>
		        	*/}
                    <div id="mail-captcha" ></div>
					<Button label="Send" disabled={!this.isFormValid() || sending} onClick={(event)=> this.sendMail(event)}/>
				</form>
				<br/>
			</Element>
		);
	}


}

export default Contact;
