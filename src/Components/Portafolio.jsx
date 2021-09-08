import React, { Component } from 'react'
import {Header,Navbar,Logotipo,List,A,HeaderButton,Btn,Welcome,Datas,H1,P,Img,Parrafo,Article,Icon,Projects,Project,Image,Card,CardH2,CardP,CardButtons,Btn1,Btn2 } from '../styled/PortafolioStyled'
import {Card2,Project2,Img2,CardPro2,PCard2, Card3, Img3, CardPro3,PCard3,Products,Services,Service,ServiceT,ContainerS,Columns,ColumnP,Column2,Column3,BtnD} from '../styled/PortafolioStyled2'
import{Testimonios,TestiT,Testimonio1,Comentario,NameC,ComeP,Testimonio2,ImgF,Formulario, CardFormu,CardInputs,InputT,InputP,InputName,InputEmail,InputTextarea,InputBtn,Footer,LogoF,Pfooter,PAF,Social,Redes} from '../styled/PortafolioStyled3'
export default class Portafolio extends Component {
    render() {
return (
            <div>
               <Header>
        <Logotipo>LOGO</Logotipo>
        <Navbar>
            <List>
                <li>
                    <A href="#Hola">Hola</A>
                    <A href="#Projects">Proyectos</A>
                    <A href="#Testimonios">Testimonios</A>
                    <A href="#Contacto">Contacto</A>
                </li>
            </List>
        </Navbar>
        <HeaderButton >
            <Btn>Descargar Curriculum</Btn>
        </HeaderButton >
    </Header>

    <Welcome>
        <Datas>
            <H1 id="Hola">¡Hola a todos!
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

<Projects id="Projects">
    <Project>
        <div class="project-1">
           <Image alt= "text" src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1630791904/peoject1_yjmhil.png"></Image>
             <Card>
                <CardH2 class="p-card">FIXMOVIE</CardH2>
                <CardP> Es una de las plataformas de series y peliculas más famosas del mundo</CardP>
                    <CardButtons>
                       <Btn1 id="bnt1" onClick={this.Redirect}>Ver proyecto completo</Btn1>
                        <Btn2 id="btn2">Ver código</Btn2>
                     </CardButtons>
             </Card>
        </div>
    </Project>

    <Card2>
            <Project2>
                <Img2 alt="principe" src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1631013994/principe_ure8t3.png"></Img2>
                <CardPro2>
                    <PCard2>Principe Fresco</PCard2>
                    <PCard2>La serie esta protagonizada por will smith como una versión ficticia de el</PCard2>
                    <CardButtons>
                        <Btn1 id="btn3">Ver proyecto completo</Btn1>
                         <Btn2 id="btn4">Ver código</Btn2>
                      </CardButtons>
                </CardPro2>
            </Project2>
    </Card2>

    <Card3>
        <Img3 alt="project3" src="https://cdn.andro4all.com/files/2020/03/Huawei-P40-Pro-fondo-de-pantalla.jpg"></Img3>
            <CardPro3>
                    <PCard3>TECH.SHOP</PCard3>
                    <PCard3>Es una tienda online con los más grandes estandares de calidad en sus productos</PCard3>
                    <CardButtons>
                        <Btn1 id="btn5">Ver proyecto completo</Btn1>
                         <Btn2 id="btn6"> Ver código</Btn2>
                      </CardButtons>
            </CardPro3>
    </Card3>
    <Products id="btn7">Ver más productos  <i class="fas fa-arrow-right"></i></Products>
</Projects>

<Services>
    <Service>
        <ServiceT>Servicios</ServiceT>
        <ContainerS> 
            <Columns>
               <ColumnP>
                 <h1>Diseño</h1>
                 <p>Experiencia de usuario</p>
                 <p>Interfaz de usuario</p>
                 <p>Aplicaciones web</p>
                 <p>Prueba de concepto</p>
                 <BtnD>Ver servicios de diseño <i class="fas fa-arrow-right"></i></BtnD>
                </ColumnP>
                <Column2>
                    <h1>Desarrollo</h1>
                    <p>Aplicaciones Moviles</p>
                 <p>Sitios Web</p>
                 <p>Aplicaciones web progresivas</p>
                 <BtnD>Ver servicios de diseño <i class="fas fa-arrow-right"></i></BtnD>
                </Column2>
                <Column3>
                    <h1>Marca</h1>
                    <p>Identidad de la marca</p>
                 <p>Estrategia de marca</p>
                 <BtnD>Ver servicios de diseño <i class="fas fa-arrow-right"></i></BtnD>
                </Column3>
            </Columns>
        </ContainerS>
    </Service>
</Services>

<Testimonios id="Testimonios"> 
    <TestiT>Testimonios</TestiT>
<Testimonio1> 
     <Comentario>
            <NameC>Cristian Sanchez</NameC>
            <ComeP>Soy compañero de trabajo de David, con 5 años de experiencia y día a día me sorprende con su manejo de React</ComeP>
        </Comentario>
        <div class="comentario-2">
            <NameC>Melissa Góez</NameC>
            <ComeP>David me motiva cada día a ser mejor, con los proyectos que hace me inspira a alcanzar su nivel y crear mejores proyectos que él</ComeP>
        </div>
        <div class="comentario-3">
            <NameC>Yeiner Aguirre</NameC>
            <ComeP>Soy Amigo y compañero laboral de David, cada día sorprende con su manejo y desarrollo de código, mejorando la calidad de la empresa y de sus compañeros</ComeP>
        </div>
    </Testimonio1>
<Testimonio2>
    <div class="comentario">
        <NameC>David Herrera</NameC>
        <ComeP>Comparti el curso de desarrollo Front-End con David, en el cuál se destaco y me aporto mucho a mi proceso</ComeP>
    </div>
    <div class="comentario-2">
        <NameC>Jenny Montoya</NameC>
        <ComeP>Fui la profesora de David en el curso de Front-End el cuál obtuvo un gran desempeño con desarrollador</ComeP>
    </div>
    <div class="comentario-3">
        <NameC>Cristian Alzate</NameC>
        <ComeP>En mi proceso de aprendizaje he tenido la suerte de compartir con David, quien me ha contagiado de su amor por la programación y su manera en la cual se desempeña</ComeP>
    </div>
</Testimonio2>

</Testimonios>

<ImgF alt="fond"  src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1631019455/img_uk9wtz.png"></ImgF>

<Formulario id="Contacto"> 
    <CardFormu> 
        <CardInputs>
            <InputT>CONTACTO</InputT>
            <InputP>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</InputP>
               <InputName>
                   <input class="name" type="text" name="name" placeholder="Nombre Completo"/>
               </InputName>
               <InputEmail>
                    <input class="email"  type="email" name="email" placeholder="Correo Electrónico"/>
               </InputEmail>
               <InputTextarea>
                    <textarea type="textarea" name="mensaje" placeholder="Mensaje"></textarea>
               </InputTextarea>
               <InputBtn>Enviar Mensaje</InputBtn>
        </CardInputs>
    </CardFormu>
</Formulario>

<Footer>
    <LogoF>LOGO</LogoF>
    <Pfooter>
        <PAF>Hecho con <i class="fas fa-heart"></i> de David. Copyright 2021-Todos los derechos reservados</PAF>
    </Pfooter>
        <Social>
            <Redes> <A class="git" href="https://github.com/DavidCardonaG"><i class="fab fa-github"></i></A></Redes>
            <Redes> <A class="insta" href="#"><i class="fab fa-instagram"></i></A></Redes>
            <Redes><A class="twi" href="#"><i class="fab fa-twitter"></i></A></Redes>
        </Social>
    {/* </div> */}
</Footer>


            </div>
        )
    }
}
