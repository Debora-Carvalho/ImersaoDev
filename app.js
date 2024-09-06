function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultadosPesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
      section.innerHTML = "<p>Nada foi encontrado. Digite uma palavra para iniciar a busca :)</p>"
      return
    };

    //fazendo com que o campo pesquisa aceite palavras em minúsculo
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item da lista de dados
    for (let dado of listDados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria um novo elemento div para cada item, formatando-o como HTML
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
      };
    };

    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }



