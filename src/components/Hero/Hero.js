import React,{Component} from 'react';
import './Hero.css';
import {githubService} from '../../services/githubService';
export class Hero extends Component{
    constructor(){
        super();
        console.log(new githubService().getAllRepositoriesByUserName());
    }
    render(){
        return(
            <div className={"hero-wrapper"}>
                <div className={"title"}>
                    Rogerio Almeida de Mattos
                </div>
                <a
                    className={"link-repositories"}
                    href="https://github.com/rogeriomattos"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Veja os meus projetos aqui
                </a>
            </div>
        );
    }
}