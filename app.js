function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
console.log(section);

let resultados = ""

for (let dado of dados) {
    resultados += `
        <div class="item-resultado" id="${dado.id}">
        <img src="${dado.imagem}" alt="${dado.titulo}">
        <div class="item-alinhamento">
            <h2>${dado.titulo}</h2>
            <table class="descricao-meta">
                <tr>
                    <td>${dado.musicas[0]}</td>
                    <td>${dado.musicas[1]}</td>
                    <td>${dado.musicas[2]}</td>
                </tr>
                <tr>
                    <td>${dado.musicas[3]}</td>
                    <td>${dado.musicas[4]}</td>
                    <td>${dado.musicas[5]}</td>
                </tr>
                <tr>
                    <td>${dado.musicas[6]}</td>
                    <td>${dado.musicas[7]}</td>
                    <td>${dado.musicas[8]}</td>
                </tr>
                <tr>
                    <td>${dado.musicas[9]}</td>
                    <td>${dado.musicas[10]}</td>
                    <td>${dado.musicas[11]}</td>
                </tr>
                <tr>
                    <td>${dado.musicas[12]}</td>
                    <td>${dado.musicas[13]}</td>
                    <td>${dado.musicas[14]}</td>
                </tr>
                <tr>
                    <td>${dado.musicas[15]}</td>
                    <td>${dado.musicas[16]}</td>
                    <td>${dado.musicas[17]}</td>
                </tr>
            </table>
        </div>
        </div>
`
}
section.innerHTML = resultados

}
