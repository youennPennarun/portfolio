"use strict";
import {Component} from "react";
import {Element} from "react-scroll"; 

import Input from "../material/Input"
import TextArea from "../material/TextArea"
import Button from "../material/Button"

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subject: "",
			email: "",
			content: ""
		};
	}
	isFormValid() {
		let {subject, email, content} = this.state;
		let emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		console.log("valid?", (
			subject !== "" &&
			content !== "" && 
			emailRe.test(email)
		));
		return (
			subject !== "" &&
			content !== "" && 
			emailRe.test(email)
		);
	}
	render() {
		let {subject, email, content} = this.state;

		return (
			<Element id="contact" name="contact" className="block" >
				<h1>Get in touch</h1>
				<form>
					<Input label="email" value={email} onChange={(value) => this.setState({email: value})} required/>
					<Input label="subject" value={subject} onChange={(value) => this.setState({subject: value})}/>

					<TextArea label="content" value={content} onChange={(value) => this.setState({content: value})} />

					<Button label="Send" disabled={!this.isFormValid()} />
				</form>
				<br/>
			</Element>
		);
	}


}

export default Contact;
