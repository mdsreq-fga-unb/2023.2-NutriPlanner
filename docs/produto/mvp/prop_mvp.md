
# Proposta de Mínimo Produto Viável (MVP)

Um **produto viável mínimo** é a versão mais simples de um produto que pode ser lançada com uma quantidade mínima de esforço e desenvolvimento.

Para realizar a seleção de US que irão compor o MVP, foi utilizado a metodologia de de **Matriz de Priorização**, que consiste em atribuir valores para cada US de acordo com a importância da mesma para o cumprimento dos objetivos do sistema e a complexidade técnica da mesma. A partir desses valores, é possível calcular a prioridade de cada US e assim selecionar as US que irão compor o MVP.

## Complexidade Técnica

- **Valor de negócio**

Valor de Negócio é o quão necessário uma funcionalidade é para o cumprimento dos objetivos do sistema.

| Nível | 1 | 2 | 3 | 
| :---: | :-: | :-: | :-: |
| Descrição | A funcionalidade não possui muita importância para o cumprimento dos objetivos do sistema | A funcionalidade possui importância para o cumprimento dos objetivos do sistema, mas não é essencial | A funcionalidade é fundamental para o cumprimento dos objetivos do sistema |

- **Expériencia da Equipe**

A estimativa de experiencia da equipe é baseada na experiência da equipe com funcionalidades do genêro da funcionalidade em questão.

| Nível | 1 | 2 | 3 | 
| :---: | :-: | :-: | :-: |
| Descrição | A equipe não possui experiência com funcionalidades do genêro | A equipe possui moderada experiência com funcionalidades do genêro | A equipe possui muita experiência com funcionalidades do genêro |

- **Estimativa de esforço ( Técnico ou tempo)**

A estimativa de esforço é baseada na quantidade de tempo que a equipe acredita que será necessário para implementar a funcionalidade.

| Nível | 1 | 2 | 3 | 
| :---: | :-: | :-: | :-: |
| Descrição | A equipe estima que será necessarário muito esforço para implementar a funcionalidade | A equipe pestima que será necessário esforço moderado na implementação da funcionalidade | A equipe estima que não será necessário muito esforço para implementar a necessaridade |

- **Complexidade Técnica**

A complexidade técnica é calculada a partir da soma dos valores de experiência da equipe e estimativa de esforço divido por 2.

- **Prioridade**

A prioridade é calculada a partir da soma dos valores de valor de negócio e complexidade técnica.

## Tabela de Priorização para o MVP

Apenas as US que apresentarem **prioridade** igual a 5 ou maior ou **valor de negócio** igual a 3 serão implementadas no MVP.

- A partir da tabela abaixo, vemos que as US que **não irão compor o MVP** são: US02, US03, US04, US07, US08, US14, US19, US21, US22, US23, US28, US29.
- Enquanto que as US que **irão compor o MVP** são: US01, US05, US06, US09, US10, US11, US12, US13, US15, US16, US17, US18, US20, US24, US25, US26, US27, US30, US31, US32.
- A descrição de cada US pode ser encontrada no Backlog do Produto.


| US | Valor de Negócio | Experiência da Equipe | Estimativa de Esforço | Complexidade Técnica | Prioridade | MVP |
| :-: | :-: | :-: | :-: | :-: |:-: | :-: |
|US01|3|1|2|1|4|**Sim**| 
|US02|1|2|3|2|3|**Não**| 
|US03|2|2|3|2|4|**Não**| 
|US04|1|2|3|2|3|**Não**| 
|US05|3|2|2|2|5|**Sim**| 
|US06|3|1|1|1|4|**Sim**| 
|US07|2|1|1|1|3|**Não**| 
|US08|2|2|2|2|4|**Não**| 
|US09|3|2|2|2|5|**Sim**| 
|US10|3|2|2|2|5|**Sim**| 
|US11|3|1|2|1|4|**Sim**| 
|US12|3|2|2|2|5|**Sim**| 
|US13|3|2|2|2|5|**Sim**| 
|US14|2|2|2|2|4|**Não**| 
|US15|3|2|2|2|5|**Sim**| 
|US16|3|1|2|1|4|**Sim**| 
|US17|3|2|2|2|5|**Sim**| 
|US18|3|2|2|2|5|**Sim**| 
|US19|2|2|2|2|4|**Não**| 
|US20|3|2|2|2|5|**Sim**| 
|US21|2|1|1|1|3|**Não**| 
|US22|1|1|2|1|2|**Não**| 
|US23|1|1|2|1|2|**Não**| 
|US24|3|1|2|1|4|**Sim**| 
|US25|3|1|3|2|5|**Sim**| 
|US26|3|2|3|2|5|**Sim**| 
|US27|3|2|3|2|5|**Sim**| 
|US28|2|2|3|2|4|**Não**| 
|US29|1|2|3|2|3|**Não**| 
|US30|3|1|2|1|4|**Sim**| 
|US31|3|1|2|1|4|**Sim**| 
|US32|3|1|2|1|4|**Sim**| 

##  Histórico de Versão:

| **Data** | **Versão** | **Descrição** | **Autor** |
| :--------: | :--------: | :--------:  | :--------: | 
| 25/10/2023 | 1.0 | Criação do Documento  | [Mateus Fidelis](https://github.com/MatsFidelis)  |
| 26/10/2023 | 1.1 | Objetivos do MVP  | [Maria Alice](https://github.com/Maliz30)  |
| 12/11/2023 | 1.2 | Reformulação da tabela e adição de dados do MVP  | [Mateus Fidelis](https://github.com/MatsFidelis)  |
