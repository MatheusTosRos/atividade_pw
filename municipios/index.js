let procura = new URLSearchParams(location.search)
uf = procura.get("uf")
document.title = `Municípios do UF ${uf}`

const body = document.getElementById("body")

async function BuscarImagem(){
    const ufEstado = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}`)
    const dadosEstado = await ufEstado.json()
     
    let texto = document.getElementById("texto")
    texto.innerHTML = dadosEstado.nome

    /*
    let link = document.getElementById("estado12")
    link.innerHTML = dadosEstado.nome
    let info = document.getElementById("informacoes")
    let strongElement = document.createElement("strong");
    strongElement.innerHTML = `Informações sobre: ${procura.get("nome")}`
    info.appendChild(strongElement);

    let elementoPai = document.getElementById("header")

    let titulo = document.createElement("h1")
    titulo.innerHTML = `${procura.get("nome")}`
    elementoPai.appendChild(titulo)*/
}

BuscarImagem()