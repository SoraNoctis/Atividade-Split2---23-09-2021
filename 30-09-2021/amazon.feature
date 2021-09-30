#language: pt

Funcionalidade: Pesquisa na loja Amazon

    Contexto: Estar na pagina HOME da Amazon
     Dado que esteja na pagina HOME de Amazon.confirmar

    Cenario: Busca por livro
     Dado que acesse a procura 
     E deverá filtar por livro
     Entao procurar por "ISTQB"
     Entao validar se o primeiro item tem da lista de procura contem "Syllabus"

    Cenario: Busca por Controle de Video-Game
     Dado que acesse a barra de pesquisa
     E deverá procurar por "Joy-Cons The Legend of Zelda Skyward Sword HD Edition"
     Entao verificar se o primeiro item contem "Nintendo Joy-Con (L)/(R)" e "by Nintendo"
     Entao acessar o item correspondente
     E verificar se o preco do item é maior que 400.0
