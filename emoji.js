window.onload = function(){
alert("Click anywhere!");
let color = ["#f00","#0f0","#00f","#ff0","#0ff","#f0f"]
document.body.style.backgroundColor = "#000";
document.body.style.height = "99vh";
document.body.style.width = "99%";
let content = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🥲', '☺', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😜', '😝', '😛', '🤑', '🤪', '🤨', '🧐', '🤓', '😎', '🥸', '🤩', '🥳', '🤡', '🤠', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😤', '😠', '🤯', '😦', '😯', '😑', '😐', '🥶', '😶', '😧', '😮', '😲', '🥱', '😵', '😳', '😨', '😢', '😥', '🤤', '😭', '😓', '😪', '😴', '🙄', '🤔', '🤭', '🤫', '🤥', '😬', '😈', '👿'];;
function put(){  
        let s = document.createElement("div");
          s.innerHTML = content[Math.floor(Math.random()*80)];
          document.body.appendChild(s);
          s.style.position ="absolute";
        s.style.top = event.pageY-25+"px";
    s.style.left = event.pageX-25+"px";
             s.style.fontSize = "50px";
             s.style.boxShadow = "0px 0px 30px" +color[Math.floor(Math.random()*6)];
             s.style.borderRadius = "50%";
             setInterval(function(){
                 s.style.display = "none";
             },2500)
    }    
document.addEventListener("click",put)
}