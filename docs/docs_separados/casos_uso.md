Os casos de uso são uma técnica na engenharia de requisitos que descrevem as interações entre um sistema e seus usuários. Eles são usados para identificar e documentar os requisitos funcionais de um sistema, bem como para comunicar esses requisitos aos interessados.

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVNdWXokk=/?moveToViewport=42118,-10389,12497,8234&embedId=430671765828" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

## Especificações de Caso de Uso

### US01 - Pesquisar informações do local

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

#### 6. Pontos de Extensão

| **Nome** | **Local** | 
| :------: | :-----------: | 
|     Reservar atração      | Após o passo 5, selecionar uma atração |

### US02 - Buscar acomodações

#### 1. Breve Descrição

Esse caso de uso é utilizado pelos viajantes para buscar acomodações para suas viagens por meio do aplicativo para uma localidade.

#### 2. Fluxo de Caso de Uso

##### 2.1 Fluxo Básico

| **Passo**  | **Descrição** | 
| :--------: | :-----------: | 
|     1      | O viajante pesquisa por uma localidade na barra de busca de localidades informando o nome e o estado (E1) |
|     2      | O viajante filtra as opções de acomodação com base em suas preferências: preço máximo, tipo de acomodação ou avaliações de outros usuários (E2) |
|     3      | O sistema apresenta uma lista paginada das acomodações mais relevantes, levando em consideração as preferências e filtros aplicados pelo viajante, em ordem decrescente de avaliações (A1) |
|     4      | O sistema exibe as atrações mais favoráveis da alta temporada, em ordem descendente de avaliações, paginadas de dez em dez itens (A1) |
|     5      | O caso de uso termina|

##### 2.2 Fluxos Alternativos

| **Passo**  | **Descrição** | 
| :--------: | :-----------: | 
|     A1     | No Passo 4, caso não haja avaliações para ocorrer a ordenação, as acomodações podem ser exibidas aleatoriamente |

##### 2.3 Fluxos de Exceção

| **Passo**  | **Descrição** | 
| :--------: | :-----------: | 
|     E1     | No Passo 1, caso o usuário pesquise por um local não existente, o sistema deve mostrar “Local não encontrado!” |
|     E2     | No passo 2, caso o usuário use um arranjo de filtros que não seja atendido por nenhuma das acomodações disponibilizadas no site, o sistema deve mostrar “Não existem acomodações com os filtros selecionados!”|

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

#### 6. Pontos de Extensão

| **Nome** | **Local** | 
| :------: | :-----------: | 
|     Reservar atração      | Após o passo 5, selecionar uma atração |

##  Histórico de Versão:

| **Data**   | **Versão** | **Descrição** | **Autor** |
| :--------: | :--------: | :--------:  | :--------: | 
| 08/12/2023 | 1.0 | Criação do Documento  | [Lucas Spinosa](https://github.com/LucasSpinosa)  |
| 09/12/2023 | 1.1 | Adição das informações do UC02 |  [Mateus Fidelis](https://github.com/MatsFidelis)  |