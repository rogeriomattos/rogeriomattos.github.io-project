import React,{Component} from 'react';
import './styles.css';
import {githubService} from '../../services/githubService';

export class Hero extends Component{
    constructor(){
        super();
        console.log(new githubService().getAllRepositoriesByUserName());
    }
    render(){
        return(
            <div className={"hero-wrapper"}>
                <img src={require('../../images/profile.png')} className={"profile"} />
            </div>
        );
    }
}