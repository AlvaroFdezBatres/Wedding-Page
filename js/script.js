//DOCUMENTO JAVASCRIPT
let botones = document.getElementsByClassName("navChange");
let zoom = document.getElementsByClassName("miniContainer");
let inputRojo = document.getElementsByTagName("input");
let mensaje = document.getElementById("inputText");
let alertaMostrada = false;

for(let i=0; i<botones.length; i++){
    botones[i].addEventListener("mouseenter",()=>{
        botones[i].style.color = "gold";
    })

    botones[i].addEventListener("mouseleave",()=>{
        botones[i].style = "";
    })
}

for(let j=0; j<zoom.length; j++){
    zoom[j].addEventListener("mouseenter",()=>{
        zoom[j].style.scale = "1.1";
        zoom[j].style.transition = "scale 0.3s ease";
    })
    zoom[j].addEventListener("mouseleave",()=>{
        zoom[j].style = "";
        zoom[j].style.transition = "scale 0.3s ease";
    })
}

for(let n=0; n<inputRojo.length; n++){
    inputRojo[n].addEventListener("click",()=>{
        for (let k = 0; k < inputRojo.length; k++) {
            if (k !== n) {
              inputRojo[k].style.borderColor = ""; // Restablece el estilo inicial del borde
            }
          }
          inputRojo[n].style.borderColor = "#f00444";
          inputRojo[n].style.outline = "none";
        
          inputRojo[0].addEventListener("keydown", (event)=>{
            var codigoTecla = event.keyCode;
            while(codigoTecla < 48 && codigoTecla > 57 || codigoTecla < 96 && codigoTecla > 105){
                String.fromCharCode(codigoTecla);
            }
            if(codigoTecla >= 48 && codigoTecla <= 57 || codigoTecla >= 96 && codigoTecla <= 105){
                event.preventDefault(codigoTecla);
            }
          })

          inputRojo[4].addEventListener("input", () => {
            if (inputRojo[n].value.toLowerCase().includes("primerodedam") && !alertaMostrada) {
              alert('¡Has escrito "primerodedam"!');
              alertaMostrada = true;
            }
          });

          inputRojo[3].addEventListener("keydown", (event) => {
            if (event.key === "@") {
              event.preventDefault();
            }
          });
    })
}


