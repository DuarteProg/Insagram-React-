import Story from "./Story"
import Post from "./Post"
import SideBar from "./SideBar"

export default function Corpo(){
    return (
        <div>
             <div class="corpo">
        <div class="esquerda">
           <Story />
           <Post />
        </div>
       <SideBar />
      </div>
            </div>
    )
}