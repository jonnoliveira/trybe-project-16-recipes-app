# PROJETO 16 - RECIPES APP :computer:

## Esse projeto foi desenvolvido com intuido de conseguir aprovação final no módulo de `front-end` do curso da [Trybe](https://www.betrybe.com/) :green_heart:

## Acesse o projeto clicando [aqui](https://jonnoliveira.github.io/trybe-project-16-recipes-app/)! :computer:
 
<details>
 
<summary>
  
## 1- Resumo
  
</summary>

O projeto Recipes app foi projetado em grupo e tinha como objetivo desenvolver um web app de receitas com prioridade para versão mobile. Nesse app o usuário poderia buscar o alimento ou bebida ao clicar no botão de pesquisa ou filtrar com os botões específicos de acordo com sua vontade. Além disso é possível favoritar, compartilhar o link facilmente e acompanhar a preparação de cada receita.

Para alcançar esses objetivos utilizamos React, Context API, Hooks e chamadas a API para dinamismo e funções da aplicação. Já com RTL/Jest pudemos testar e garantir a boa funcionalidade do app. A estruturação e diversificação do trabalho foi coordenada através da metodologia ágil Kanban. Veja mais abaixo!
  
</details>

#

<details>
 
<summary>
 
## 2- Requisitos

</summary>

### I. Desenvolva os testes unitários de maneira que a cobertura seja de, no mínimo, 90%

### II. Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login

### III. Desenvolva a tela de maneira que a pessoa consiga escrever seu email no input de email e sua senha no input de senha

### IV. Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos

### V. Após a submissão do formulário, salve no localStorage o e-mail da pessoa usuária na chave `user`

### VI. Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login

### VII. Implemente o header de acordo com a necessidade de cada tela
 
### VIII. Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil

### IX. Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la

### X. Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo

### XI. Implemente 3 radio buttons na barra de busca: Ingredient, Name e First letter
 
### XII. Busque na API de comidas caso a pessoa esteja na página de comidas, e na API de bebidas caso esteja na de bebidas

### XIII. Redirecione para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL

### XIV. Caso a busca retorne mais de uma receita, renderize as 12 primeiras encontradas, exibindo a imagem e o nome de cada uma

### XV. Exiba um `alert` caso nenhuma receita seja encontrada

### XVI. Implemente o menu inferior posicionando-o de forma fixa e contendo 2 ícones: um para comidas e outro para bebidas
 
### XVII. Exiba o menu inferior apenas nas telas indicadas pelo protótipo

### XVIII. Redirecione a pessoa usuária para a tela correta ao clicar em cada ícone no menu inferior

### XIV. Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card

### XX. Implemente os botões de categoria para serem utilizados como filtro
 
### XXI. Implemente o filtro das receitas por meio da API ao clicar no filtro de categoria
 
### XXII.  Implemente o filtro como um toggle, o qual se for selecionado novamente, o app deve retornar as receitas sem nenhum filtro

### XXIII. Redirecione a pessoa usuária ao clicar no card para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL

### XXIV. Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL
 
### XXV. Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube incorporado e recomendações

### XXVI. Implemente as recomendações. Para receitas de comida, a recomendação deverá ser bebida, já para as receitas de bebida a recomendação deverá ser comida

### XXVII. Implemente os 6 cards de recomendação, mostrando apenas 2. O scroll é horizontal, similar a um `carousel`

### XXVIII. Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo
 
### XXIX. Implemente a solução de forma que, caso a receita já tenha sido feita, o botão "Start Recipe" desapareça

### XXX. Implemente a solução de modo que, caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe"

### XXXI. Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso

### XXXII. Implemente um botão de compartilhar e um de favoritar a receita
 
### XXXIII. Implemente a solução de forma que, ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer

### XXXIV. Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`

### XXXV. Implemente o ícone do coração (favorito) de modo que: deve vir preenchido caso a receita esteja favoritada e "despreenchido" caso contrário

### XXXVI. Implemente a lógica no botão de favoritar. Caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa

### XXXVII. Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes com suas respectivas quantidades e instruções
 
### XXXVIII. Desenvolva um checkbox para cada item da lista de ingredientes

### XXXIX. Implemente uma lógica que ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista

### XL. Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita

### XLI. Desenvolva a lógica de favoritar e compartilhar. A lógica da tela de detalhes de uma receita se aplica aqui
 
### XLII. Implemente a solução de modo que o botão de finalizar receita ("Finish Recipe") só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados)

### XLIII. Redirecione a pessoa usuária após clicar no botão de finalizar receita ("Finish Recipe"), para a página de receitas feitas, cuja rota deve ser `/done-recipes`

### XLIV. Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo

### XLV. Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, nome, categoria, nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar

### XLVI. Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar
 
### XLVII. Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

### XLVIII. Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

### XLIX. Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita

### L. Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas), respeitando os atributos descritos no protótipo
 
### LI. Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, nome, categoria, nacionalidade, um botão de compartilhar e um de "desfavoritar"
 
### LII. Desenvolva a tela de modo que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"

### LIII. Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

### LIV. Desenvolva a solução de modo que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela

### LV. Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

### LVI. Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita
 
### LVII. Implemente os elementos da tela de perfil respeitando os atributos descritos no protótipo

### LVIII. Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível

### LIX. Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout"

### LX. Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas
 
### LXI. Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas

### LXII. Redirecione a pessoa usuária que ao clicar no botão de "Logout", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login

</details>

# 

<details>
 
<summary>

## 3- Nota do Projeto
 
</summary>

## 98,39% :heavy_check_mark:

![Project-Recipes-App-Grade]()

</details> 
 
# 

<details>
 
<summary>

## 4- Preview

</summary>

  
![Project-Recipes-App-Preview]()
  
</details>
