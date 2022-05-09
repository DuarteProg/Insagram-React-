import React from "react"
function MenuPost(props){

const [name, setName] = React.useState("heart-outline")

  function imgclick(photo){
    if(photo === "photo"){
      setName("heart")}
    }
    
    function deslike(heart){
      if(heart === "heart"){
        setName("heart-outline")}
      }

 return(
  <div class="post">
  <div class="topo">
    <div class="usuario">
      <img src={props.img} />
      {props.nome}
    </div>
    <div class="acoes">
      <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
  </div>

  <div class="conteudo" onClick={() => imgclick("photo") } >
    <img src={props.img2}/>
  </div>

  <div class="fundo">
    <div class="acoes">
      <div>
        <ion-icon onClick={() => deslike("heart")} name={name}></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>

    <div class="curtidas">
      <img src={props.img3} />
      <div class="texto">
        Curtido por <strong>{props.nome2}</strong> e <strong>outras 101.523 pessoas</strong>
      </div>
    </div>
  </div>
</div>
 )
}

const posts = [
  {img:"assets/img/meowed.svg", nome:"meowed", img2:"assets/img/gato-telefone.svg",
   img3:"assets/img/respondeai.svg", nome2:"respondeai"},
  {img:"assets/img/barked.svg", nome:"barked", img2:"assets/img/dog.svg",
    img3:"assets/img/adorable_animals.svg", nome2:"adorable_animals"}
]

export default function Post(){
  return (
        <div class="posts">
           {
           posts.map(posts =>
            <MenuPost img={posts.img} nome={posts.nome}  img2={posts.img2} img3={posts.img3} nome2={posts.nome2}/>
           )
           }
          </div>
    )
}