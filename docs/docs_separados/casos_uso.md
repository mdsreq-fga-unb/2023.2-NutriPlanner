(Falar sobre o Diagrama de Casos de Uso)

(Inserir o Diagrama de Casos de Uso)

## Especificações de Caso de Uso

### CU01 - Pesquisar informações do local

#### 1. Breve Descrição

Esse caso de uso é utilizado pelo viajante para visualizar informações sobre atividades locais e dicas de viagem para uma localidade.

#### 2. Fluxo de Caso de Uso

##### 2.1 Fluxo Básico

| **Passo**  | **Descrição** | 
| :--------: | :-----------: | 
|     1      | O viajante pesquisa por uma localidade na barra de busca de localidades informando o nome e o estado (E1)|
|     2      | O sistema exibe os períodos de alta temporada da localidade (E1)|
|     3      | O viajante escolhe um período da lista para ver as atrações disponíveis naquele período.|
|     4      | O sistema exibe as atrações mais favoráveis da alta temporada, em ordem descendente de avaliações, paginadas de dez em dez itens (A1)|
|     5      | O caso de uso termina|

##### 2.2 Fluxos Alternativos

| **Passo**  | **Descrição** | 
| :--------: | :-----------: | 
|     A1     | No Passo 4, caso não haja avaliações para ocorrer a ordenação, as atrações podem ser exibidas aleatoriamente.|
|     A2     | O cliente pode encerrar o sistema a qualquer momento. O caso de uso é encerrado.|

##### 2.3 Fluxos de Exceção

| **Passo**  | **Descrição** | 
| :--------: | :-----------: | 
|     E1     | No Passo 1, caso o usuário pesquise por um local não encontrado, o sistema deve mostrar “Local não encontrado!”. O caso de uso volta ao Passo 1.|

#### 3. Requisitos Especiais

| **Número**  | **Descrição** | 
| :--------: | :------------: | 
|     1      | O viajante deve ter acesso à internet para buscar as informações.

#### 4. Pré-condições

| **Número** | **Descrição** | 
| :--------: | :-----------: | 
|     1      | O viajante deve estar logado no sistema.

#### 5. Pós-condições

Não se aplica.

#### 5. Pontos de Extensão

| **Nome** | **Local** | 
| :------: | :-----------: | 
|     Reservar atração      | Após o passo 4, selecionar uma atração |

##  Histórico de Versão:

| **Data**   | **Versão** | **Descrição** | **Autor** |
| :--------: | :--------: | :--------:  | :--------: | 
| 08/12/2023 | 1.0 | Criação do Documento  | [Lucas Spinosa](https://github.com/LucasSpinosa)  |