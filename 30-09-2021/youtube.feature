#language: pt

Funcionalidade: Barra de Pesquisa

    Contexto: Estar na pagina HOME
     Dado que esteja na página HOME do YouTube.com

    Esquema do Cenário: Buscar por "<conteudo>" na barra de pesquisa
          Quando pesquisar por "<conteudo>"
          Então deverá exiber conteudo sobre "<conteudo>"

            Exemplo:
            |  Compasso UOL  |
            | Então entar em Canal de "<conteudo>" |
            | Entao deve acessar "<sobre>" |
            | Em sobre se numero de visualizações é maior de 30K|

            | The Chalkeaters |
            | Então entar em Canal de "<conteudo>" |
            | Entao deve acessar "<vídeos>" |
            | E deve prcurar Valve Song: COUNT TO THREE e acessa-lo |
            | Então confirmar se numero de visualizações é maior de 10K |
