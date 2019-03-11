function down(){
    var elem =document.querySelector(".myAnimation");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame(){
        if (pos == 175) {
            clearInterval(id);
        }
        else {
            if(pos == 175){
                clearInterval(id);
                
            }else{
        
                pos++;
                elem.style.top = `${pos}px`
            }
            
        }
    }
}
function right(){
    var elem =document.querySelector(".myAnimation");
    var pos = document.getElementById("myAnimation");
    var id = setInterval(frame, 5);
    function frame(){
        if (pos == 175) {
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.left = `${pos}px`
        }
    }
}
function up(){
    var elem =document.querySelector(".myAnimation");
    var pos = document.getElementById("myAnimation").style.position.value;
    var id = setInterval(frame, 5);
    function frame(){
        if (pos == 175) {
            clearInterval(id);
        }
        else {
            pos++;
            elem.style.bottom = `${pos}px`
            elem.style.left = `${pos}px`
        }
    }
}