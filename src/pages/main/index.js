import React, {Component} from 'react';
import './styles.css';

export default class Main extends Component{
    
    render(){
        return (
            <div className={"main"}>
                <div className={"section-1"}>
                    <img src={require('../../images/profile.png')} className={"profile"} />
                    <div className={"contacts"}>
                        <div>
                            <div>Email</div>
                            <div>rogeriomattos38@outlook.com</div>
                        </div>
                        <div>
                            <div>Telefone</div>
                            <div>(+55) 11 95498-0848</div>
                        </div>
                        <div>
                            <div>Medias Sociais</div>
                            <div className={"social-media"}>
                                <a href={"https://www.linkedin.com/in/rogerio-almeida-de-mattos-a8881b165/"} target={"_blank"}>
                                    <img src={require("../../images/linkedin.png")}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className={"section-2"}> 
                    <div className={"bio"}>
                        <div className={"name"}>
                            <div className={"first"}>Rogerio</div>
                            <div className={"last"}>Mattos</div>
                        </div>
                        <div className={"title"}>
                            Desenvolvedor Sharepoint e front-end
                        </div>
                        <div className={"description"}>
                            Eu sou Rogerio Mattos, amo React e desenvolvimento frontend,
                            além de amar tecnologia eu tambem escrevo sobre na plataforma Medium. 
                        </div>
                        <div className={"works"}>
                            <a className={"github"} href={"https://github.com/rogeriomattos"} target={"_blank"}>Portifólio</a>
                            <a className={"medium"} href={"https://medium.com/@rogeriomattos38"} target={"_blank"}>Medium</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}