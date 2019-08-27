import React, {Component} from 'react';
import axios from 'axios';

class ContactForm extends Component{
  
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3020/send", 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                console.log('Thanks For The E-Mail!')
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
            <div>
                <div className="head">
                <h1>Contact Me!</h1>
                </div>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label>Name</label><br/>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label><br/>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label>Message</label><br/>
                        <textarea className="form-control" rows="5" id="message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm; 