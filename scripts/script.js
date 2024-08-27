
function cifrarTexto(){
    let texto = document.getElementById('encriptar').value;
    let textoCifrado = texto
                            .replace(/a/gi, 'ai')
                            .replace(/e/gi, 'enter')
                            .replace(/i/gi, 'imes')
                            .replace(/o/gi, 'ober')
                            .replace(/u/gi, 'ufat');
    if(document.getElementById('encriptar').value.length != 0){
        document.getElementById('encriptar').value = textoCifrado;
    }
}

function descifrarTexto(){
    let texto = document.getElementById('encriptar').value;
    let textoCifrado = texto
                            .replace(/ai/gi, 'a')
                            .replace(/enter/gi, 'e')
                            .replace(/imes/gi, 'i')
                            .replace(/ober/gi, 'o')
                            .replace(/ufat/gi, 'u');
    if(document.getElementById('encriptar').value.length != 0){
        document.getElementById('encriptar').value = textoCifrado;
    }
}

// let btnEn = document.getElementsByClassName('btn-encripta');
// btnEn.addEventListener('click',codificar);
// function codificar(){
//     texto = document.getElementsByClassName('area-text').value;
//     let textoCifrado = texto
//                             .replace(/ain/gi, 'a')
//                             .replace(/enter/gi, 'e')
//                             .replace(/imes/gi, 'i')
//                             .replace(/ober/gi, 'o')
//                             .replace(/ufat/gi, 'u');
//     document.getElementsById('desencripta').innerHTML = textoCifrado;

// }