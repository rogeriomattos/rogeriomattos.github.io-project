import React, { Component } from 'react';
import './styles.css';

import imgProfile from '../../images/profile.png';

export default class Home extends Component{
    render(){
        return(
            <div className="home-container">
                <section className="personal-details">
                    <img src={imgProfile}/>
                </section>
                <section className="medium">

                </section>
                <section className="github">
                    
                </section>
                <footer>

                </footer>
            </div>
        );
    }
}