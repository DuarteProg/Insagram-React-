import ReactDom from "react-dom";
import NavBar from "./NavBar";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";


function App() {
    return (
<div>
<NavBar />
<Corpo />
<FundoMobile />
</div>
    )
}

const elemento = document.querySelector(".root")
ReactDom.render(<App />, elemento)