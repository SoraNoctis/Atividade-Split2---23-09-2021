#language: pt

Funcionalidade: Barra de Pesquisa

    Contexto: Estar na pagina HOME
     Dado que esteja na página HOME do YouTube.com

    Cenario: Buscar por "Compasso UOL" na página
      Dado que esteja na pág HOME pesquiese por "Compasso UOL"
      Quando filtar por canal
      Entao deverá acessar o canal da "Compasso UOL"
      E acessar a aba sobre do canal
      Entao verificar a quantidade de visualizações que esteja maior de 30k

    Cenario: Buscar por "The Chalkeaters" na página
    Dado pesquiese por "The Chalkeaters - Valve Song: COUNT TO THREE" e acesse o primeiro link
    Entao confirmar se numero de visualizações é maior que 10K
