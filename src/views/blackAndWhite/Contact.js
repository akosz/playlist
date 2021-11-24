import React from "react";

export class Contact extends React.Component{
    render(){
        return(
            <>
                <h1>Contact Us</h1>
                <p>Below is an example of how a contact form might look with this template:</p>
                <form action="#" method="post">
                <div className="form_settings">
                    <p><span>Name</span><input className="contact" type="text" name="your_name" value="" /></p>
                    <p><span>Email Address</span><input className="contact" type="text" name="your_email" value="" /></p>
                    <p><span>Message</span><textarea className="contact textarea" rows="8" cols="50" name="your_enquiry"></textarea></p>
                    <p><span>&nbsp;</span><input className="submit" type="submit" name="contact_submitted" value="submit" /></p>
                </div>
                </form>
                <p><br /><br />NOTE: A contact form such as this would require some way of emailing the input to an email address.</p>
            </>
        )
    }
}
