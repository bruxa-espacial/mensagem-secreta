function converterParaArray(){
    const input = document.getElementById("texto-base");
    const texto = input.value;
    const textoBase = texto.split("");
    return textoBase;
}

function exibirResultado(textoBase){
    let textoConvertido = textoBase.join("");
    document.getElementById("principal__texto-resposta__texto").innerHTML = textoConvertido;
}

function obterTextoBase(){
    let texto = converterParaArray();
    for (let i = 0; i <= texto.length; i++){
        if (texto[i] == "a"){
            texto[i] = "ai"
        }
        if (texto[i] == "e"){
            texto[i] = "enter"
        }
        if (texto[i] == "i"){
            texto[i] = "imes"
        }
        if (texto[i] == "o"){
            texto[i] = "ober"
        }
        if (texto[i] == "u"){
            texto[i] = "ufat"
        }
    }
    exibirResultado(texto);
}

function descrip(){
    let texto = converterParaArray();
    for (let i = 0; i <= texto.length; i++){
        if (texto[i] == "a"){
            texto.splice(i+1,1)
        }
        if (texto[i] == "e"){
            texto.splice(i+1,4)
        }
        if (texto[i] == "i"){
            texto.splice(i+1,3)
        }
        if (texto[i] == "o"){
            texto.splice(i+1,3)
        }
        if (texto[i] == "u"){
            texto.splice(i+1,3)
        }
    }
    exibirResultado(texto);
}

function copiarResultado(){
    const copiado = document.getElementById("principal__texto-resposta__texto").textContent;
    navigator.clipboard.writeText(copiado);
    alert("Texto copiado com sucesso!");
}