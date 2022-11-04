

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
function ChngeMsr2(){
    var hundurluk= document.getElementById('height').value
    var olchu= document.getElementById('olchu2').value
    document.getElementById('main').style.height=hundurluk+olchu
}

function changeColor(){
    // let color = document.getElementById('colorInputText').value;
    let color = document.getElementById('colorInputColor').value;
    document.body.style.backgroundColor =color;
    document.getElementById('colorInputText').value=color;
  }
  





// function ChangeColor()
    // var select = document.querySelector("#my-select");
    // var body = document.body;
    // select.addEventListener('change', function() {
    //   var options = this.options;
    //   var selectedOption = options[options.selectedIndex];
    //   body.style.background = selectedOption.value;
    
    // });

function Defaultwidth(){
    document.getElementById("main").style.width="100px"
}



function GeceGunduz() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }