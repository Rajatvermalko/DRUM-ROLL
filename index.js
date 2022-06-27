var value=document.querySelectorAll(".drum").length;
for(var i=0;i<value;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
function name() {
var valuechecker=this.innerHtml;
switch (valuechecker) {
    case "w":
        var audio=new Audio("sounds/tom-z.mp3");
        audio.play();
        break;

    default:
        break;
}
}
}