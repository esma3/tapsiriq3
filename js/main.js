

function activeChat(){
    document.getElementById('chatbox').style.right="0px"
}
function deactivateChat(){
    document.getElementById('chatbox').style.right="-400px"
}



function Changebg(){
    document.getElementById('main').style.animationName="go" 
}
function StAni(){
    document.getElementById('main').style.animationName="" 
}

function ChngeMsr(){
    var eni= document.getElementById('width').value
    var olchu= document.getElementById('olchu').value
    document.getElementById('main').style.width=eni+olchu
}
function Defaultwidth(){
    document.getElementById("main").style.width="100px"
}



function GeceGunduz() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }