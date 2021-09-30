#language: pt

Funcionalidade: Barra de pesquisa

    Contexto: Estar na página home
        Dado que esteja na página home

    Esquema do Cenário: Buscar produtos pela barra de pesquisar
        Quando pesquisar por "<produtos>"
        Então deverá ser exibido nas três primeiras posições produtos com "<produtos>"

            Exemplos:
            | produtos       |
            | Las envernadas |
            | Cabernet       |
            | Espumante      |
            | Vinho branco   |
