function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Loga no console o elemento selecionado para fins de depuração
    console.log(section);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada dado na array 'dados'
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Busca vazia</p>";
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">
                    ${dado.descricao}
                </p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        };
    };

    if (!resultados) {
        resultados = "<p>Nada encontrado</p>";
    };


    // Atribui o HTML gerado para o conteúdo da seção
    section.innerHTML = resultados;
}





