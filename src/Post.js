function MenuPost(props){
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

  <div class="conteudo">
    <img src={props.img2} />
  </div>

  <div class="fundo">
    <div class="acoes">
      <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>

    <div class="curtidas">
      <img src="assets/img/respondeai.svg" />
      <div class="texto">
        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
      </div>
    </div>
  </div>
</div>
 )
}

const posts = [
  {img:"assets/img/meowed.svg", nome:"meowed", img2:"assets/img/gato-telefone.svg"},
  {img:"assets/img/barked.svg", nome:"barked", img2:"assets/img/dog.svg"}
]

export default function Post(){
    return (
        <div class="posts">
           {
           posts.map(posts =>
            <MenuPost img={posts.img} nome={posts.nome}  img2={posts.img2}/>
           )

           }
          </div>
    )
}