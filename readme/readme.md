## S5-11 | 🏁 Entrega: KImóveis - TypeORM com Relacionamentos
___
# 🏁 Entrega: KIMOVEIS


>Importante!
Lembre-se de que essa entrega é individual e qualquer suspeita de plágio ou interferência na entrega de outro aluno pode ser questionada pela equipe de ensino.



>Importante!
Essa entrega é uma continuação da entrega da sprint anterior, a lógica para a implementação do user e da session é a mesma:


Primeiro copie a implementação de user e session feita na entrega anterior e faça a lógica para trataviva de errors.

Nessa entrega vamos desenvolver um serviço de back-end responsável por gerenciar uma imobiliária utilizando TypeORM e relacionamentos com base no diagrama abaixo:

<img src='entrega5.png'>

>Aviso!
Atente-se à rubrica presente no fim da página, ela contém os itens à serem avaliados e também o peso de cada item.


Inicialize seu Repositório e siga as orientações do readme.md para começar o projeto

## Endpoints do serviço:


Método	| Endpoint |	Responsabilidade
--------| -------- |  -----------
POST	  | /users	    | Criação de usuário 
GET     |	/users	    | Lista todos os usuários
PATCH   |	/users      |	Atualiza um usuário
DELETE  |	`/users/<id>` |	Realiza um soft delete  | no usuário  |
POST    |	/login      |	Gera o token de autenticação
POST    |	/categories |	Criação de categoria
GET     |	`/categories/<id>/properties` | 	Lista todos imóveis que pertencem a uma categoria
POST    |	/properties |	Criação de um imóvel
GET     |	/properties |	Lista todos os imóveis
POST    |	/schedules  |	Agenda uma visita a um imóvel
GET     | /schedules/properties/<id> | 	lista todos os agendamentos de um imóvel

___
## Requisitos do Serviço

____
#### POST - `/users `

- Rota para criação de usuário com os seguintes dados:
  - **name**: string
  - **email**: string
  - **password:** Deverá receber uma string mas armazenar uma hash gerada com o bcrypt
  - **isAdm:** boolean
  - **isActive:** Não deve ser passado mas gerado no momento da validação dos dados no formato boolean com default = true
  - **createdAt:** Não deve ser passado mas gerado no momento da validação dos dados no formato Date
  - **updatedAt:** Não deve ser passado mas gerado no momento da validação dos dados no formato Date, deve iniciar com o valor de criação (mesmo valor do campo createdAt) e deve ser atualizado sempre que esse usuário for atualizado.
  - **id:** Não deve ser passado mas gerado no momento da validação dos dados, deve um uuidv4.
- A rota de criação deve retornar todos os dados, com exceção da hash de senha.
- Não podem ser cadastrados dois usuário com o mesmo e-mail.
___

#### GET - ```/users```

- A rota deve retornar todos os dados dos usuários, com exceção da hash de senha.
- a rota pode ser acessada apenas por administradores.

___

### PATCH - `/users/<id>`

- A rota deve atualizar os dados do usuário,.
- Não deve ser possível atualizar os campos **id, isAdm** e **isActive.**
- Apenas administradores podem atualizar qualquer usuário, usuários não-administradores podem apenas atualizar seu próprio usuário.

____

### DELETE - `/users/<id>`
- A rota deve realizar um soft delete do usuário, alterando **isActive** para **false**.
- a rota pode ser acessada apenas por administradores.
- não deve ser possível realizar um soft delete um usuário inativo.

___

### POST - `/login`
- Rota de login recebendo email e password
- O login deve validar se o usuário existe e validar se a senha está correta.

___

### POST - `/categories`
- Rota para criação de categorias com os seguintes dados:
  - **name:** string
  - **id:** Não deve ser passado mas gerado no momento da validação dos dados, deve um **uuidv4**.
- Não podem ser cadastradas duas categorias com o mesmo nome.
a rota pode ser acessada apenas por administradores.

___

### GET - `/categories`
- Rota deve listar todas as categorias.
- a rota não precisa de autenticação para ser acessada.

___

### GET - `/categories/<id>/properties`
- Rota deve listar todos os imóveis que pertencem a uma categoria.
- a rota não precisa de autenticação para ser acessada.

___

### POST - `/properties`

- Rota para criação de um imóvel com os seguintes dados:
  - value: number
  - size: number
  - address: um objeto com os seguintes dados:
    - district: string
    - zipCode: string
    - number: string
    - city: string
    - state: string
  - categoryId: string
  - id: Não deve ser passado mas gerado no momento da validação dos dados, deve um uuidv4.
  - sold: Não deve ser passado mas gerado no momento da validação dos dados no formato boolean com default = false.
  - createdAt: Não deve ser passado mas gerado no momento da validação dos dados no formato Date.
  - updatedAt: Não deve ser passado mas gerado no momento da validação dos dados no formato Date, deve iniciar com o valor de criação (mesmo valor do campo createdAt) e deve ser atualizado sempre que esse imóvel for atualizado.
- Não podem ser cadastrados dois imóveis com o mesmo endereço.
- a rota pode ser acessada apenas por administradores.
- não podem ser cadastrados imóveis com o campo state maior que 2 dígitos.
- não podem ser cadastrados imóveis com o campo zipCode maior que 8 dígitos.

____

### GET - `/properties`
- Rota deve listar todos os imóveis.
- a rota não precisa de autenticação para ser acessada.

___

### POST - `/schedules`

- Rota responsável pelo agendamento de uma visita a um imóvel com os seguintes dados:
  - date: deve ser enviado como uma string e salvo como date no banco de dados.
  - hour: deve ser enviado como uma string e salvo como time no banco de dados.
  - propertieId: string
  - userId: Não deve ser passado no body da requisição e sim pego através do token do usuário.
  - id: Não deve ser passado mas gerado no momento da validação dos dados, deve um uuidv4.
- Não pode ser possível agendar uma visita a um imóvel com a mesma data e hora.
- Só deve ser possível agendar uma visita durante horário comercial (08:00 as 18:00).
- Só deve ser possível agendar uma visita durante em dias úteis (segunda à sexta).

___

> Dica!
Revise a documentação do Date no javascript para ajudar nas verificações de data e hora.
___

### GET - `/schedules/properties/<id>`

- ota deve listar todos os agendamentos de um imóvel.
- a rota pode ser acessada apenas por administradores.








