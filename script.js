const inputTexto = document.querySelector(".input-text")
const mensaje = document.querySelector(".mensajes")


function botonEncriptar(){
    const mensajeEncriptado = encriptar(inputTexto.value);
    mensaje.value = mensajeEncriptado;
    document.getElementById("imagen").style.display = "none";
    document.getElementById("mnsj").style.display = "none";
    inputTexto.value = "";
    
}

function botonDesencriptar(){
    const mensajeEncriptado = desencriptar(inputTexto.value);
    mensaje.value = mensajeEncriptado;
    mensaje.style.imagen="none";
    inputTexto.value = "";
    
}

function encriptar(textoencriptado){
   
   let letras = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
   textoencriptado = textoencriptado.toLowerCase();
    
    for (let i = 0; i < letras.length; i++){
        if (textoencriptado.includes(letras[i][0])){
            textoencriptado = textoencriptado.replaceAll(letras[i][0],letras[i][1])
        }
        
    } 
    return textoencriptado; 
   
    
}

function desencriptar(textoencriptado){
   
    let letras = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoencriptado = textoencriptado.toLowerCase();
     
     for (let i = 0; i < letras.length; i++){
         if (textoencriptado.includes(letras[i][0])){
             textoencriptado = textoencriptado.replaceAll(letras[i][1],letras[i][0])
         }
        
     } 
     return textoencriptado;  
 }

 function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""
    alert("Texto copiado")

 }

