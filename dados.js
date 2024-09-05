let dados = [
    {
        titulo: "Utopia",
        musicas: [],
        imagem: "Utopia.jpg"
    },
    {
        titulo: "Astroworld",
        musicas: [],
        imagem: "astroworld.jpg"
    },
    {
        titulo: "DBR",
        musicas: [],
        imagem: "Days-Before-Rodeo.jpg"
    }
];

// Acessa todos os elementos td presentes na table
const tdMusicas = document.querySelectorAll('.descricao-meta td');

// Intera cada elemento td
for (let i = 0; i < tdMusicas.length; i++) {
    const td = tdMusicas[i];
    const musicaNome = td.textContent;

    // Determina o index do objeto do dicionario baseado no parent element ID da table
    const tituloAlbum = td.closest('.item-resultado');
    const index = dados.findIndex(album => album.titulo === tituloAlbum.id);

    // Adiciona os nomes das musicas nos correspondentes objetos do dicionario na musicas array
    dados[index].musicas.push(musicaNome);
}