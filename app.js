function pesquisar() {
    // Seleciona a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultadosPesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
      section.innerHTML = "Nada foi encontrado. Digite uma palavra para iniciar a busca :)"
      return
    };
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada item da lista de dados
    for (let dado of listDados) {
      if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
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
  
    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }



