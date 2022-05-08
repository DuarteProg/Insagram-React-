function MenuSideBarUsuario(props){
  return (
  <div class="usuario">
  <img src="assets/img/catanacomics.svg" />
  <div class="texto">
    <strong>{props.texto}</strong>
    {props.nome}
  </div>
</div>
  )
}

function MenuSideBarSugestao(props){
  return (
<div class="sugestao">
              <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                  <div class="nome">{props.nome}</div>
                  <div class="razao">{props.razao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
  )
  }

  const sugestoes = [
    {img:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes", razao:"Segue você"},
    {img:"assets/img/chibirdart.svg", nome:"chibirdart", razao:"Segue você"},
    {img:"assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar", razao:"Novo no Instagram"},
    {img:"assets/img/adorable_animals.svg", nome:"adorable_animals", razao:"Segue você"},
    {img:"assets/img/smallcutecats.svg", nome:"smallcutecats", razao:"Segue você"},
  ]

export default function SideBar(){
    return (
        <div class="sidebar">
          <MenuSideBarUsuario texto="catanacomics" nome="Catana" />
          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>     
{
            sugestoes.map(sugestoes =>  
          <MenuSideBarSugestao img={sugestoes.img} nome={sugestoes.nome} razao={sugestoes.razao} />
             ) 
}
          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
        </div>
    )
}