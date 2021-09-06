import React, { Component } from 'react'

import {Header,Navbar,Logotipo,List,A,HeaderButton,Btn,Welcome,Datas,H1,P,Img,Parrafo,Article,Icon,Projects,Project,Image,Card,CardH2,CardP,CardButtons,Btn1,Btn2 } from '../styled/PortafolioStyled'
export default class Portafolio extends Component {
    render() {
        return (
            <div>
               <Header>
        <Logotipo>LOGO</Logotipo>
        <Navbar>
            <List>
                <li>
                    <A href="#welcome-section">Hola</A>
                    <A href="#projects">Proyectos</A>
                    <A href="#testimonios">Testimonios</A>
                    <A href="#contact">Contacto</A>
                </li>
            </List>
        </Navbar>
        <HeaderButton >
            <Btn>Descargar Curriculum</Btn>
        </HeaderButton >
    </Header>

    <Welcome>
        <Datas>
            <H1>¡Hola a todos!
                Soy David Cardona</H1>

            <P>Soy un desarrollador Front-End, que le fascina crear las mejores interfaces 
                para los usuarios
            </P>
            <Icon class="icon" alt="logo" src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1630790350/arrow-down_dkrk3m.png"></Icon>
        </Datas>
        <Img></Img>
    </Welcome>


    <section>
        <Parrafo>Parece magia,funciona con código</Parrafo>
        <Article>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</Article>
    </section>

<Projects>
    <Project>
        <div class="project-1">
           <Image alt= "text" src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1630791904/peoject1_yjmhil.png"></Image>
             <Card>
                <CardH2 class="p-card">FIXMOVIE</CardH2>
                <CardP> Es una de las plataformas de series y peliculas más famosas del mundo</CardP>
                    <CardButtons>
                       <Btn1>Ver proyecto completo</Btn1>
                        <Btn2>Ver código</Btn2>
                     </CardButtons>
             </Card>
        </div>

        <div class="project-2">
            
        </div>
    </Project>
</Projects>
            </div>
        )
    }
}
