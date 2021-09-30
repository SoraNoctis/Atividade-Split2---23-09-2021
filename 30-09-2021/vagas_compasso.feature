#language: pt

Funcionalidade: Checar vagas

    Contexto: Estar na pagina HOME da Compasso UOL
     Dado que esteja na pagina HOME da compassouol.com
    
    Cenario: 
     Dado que acesse o item "Cultura"
     E entao acessar o item "Confira as nossas vagas"
     E em "Transformação de negócios e Desenvolvimento Ágil" acessar o item "Confira as nossas vagas"
     Entao validar se esta em compasso.gupy.io
     E em "Analista de Automação de TestesCandidatar" verificar se há vaga efetiva
