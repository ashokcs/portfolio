import React, { Component } from 'react';
import resume from '../assets/brouchere.pdf'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Alex Bangau Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Pioneer Web Services:</h2>

            <p>Pioneer Web Services is a leading tech firm building Reliable web applications using edge cutting technologies. Founded by strong management key people, who were into the domain and market for decades. We have strong and knowledgeable resources billable to the products with high availability. <br /><br />

            Pioneer Web Services has been delivering cloud based web applications to the top Tier 1 companies all over the world. We have been known as a Global Brand in the Market.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact:</h2>
                  <p className="address">
                     <span>{name}</span><br />
                     <span>{street}<br />
                        {city} {state}, {zip}
                     </span><br />
                     <span>{phone}</span><br />
                     <span><a href={`mailto:${email}?subject=The%20subject%20of%20the%20mail`}>{email}</a></span>
                  </p>
               </div>
               <div className="columns download">
                  <p>
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Download Our Brouchre</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
