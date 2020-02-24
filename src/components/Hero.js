import React,{Component} from 'react';
import './Hero.css';

export class Hero extends Component{
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