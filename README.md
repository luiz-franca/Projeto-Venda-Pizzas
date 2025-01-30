# **Self Pay Pizzas**

O Self Pay Pizzas é uma aplicação desenvolvida para serviço web, acessível também para dispositivos móveis por meio do navegador.

A principal abordagem da aplicação é um visual minimalista e intuitivo, buscando se consolidar nas melhores práticas de experiência do usuário. O objetivo é proporcionar uma navegação fluida e acessível para diversas faixas etárias, garantindo um serviço de atendimento prático e eficiente para compra de pizzas.

### Diagrama de Sequência: Cliente
```mermaid
zenuml
title "Interação Cliente"
    cliente->"SELF PAY PIZZA": Acessa o site
    cliente->"SELF PAY PIZZA": Seleciona a pizza do cardápio online
    cliente->"SELF PAY PIZZA": Seleciona o tamanho da pizza
    cliente->"SELF PAY PIZZA": Seleciona a quantidade
    cliente->"SELF PAY PIZZA": adiciona ao carrinho ou cancela o item antes selecionado
    "SELF PAY PIZZA"->cliente: exibe uma lista dos itens selecionados
    "SELF PAY PIZZA"->cliente: Solicita dados do cliente, caso selecionado a compra
    cliente->"SELF PAY PIZZA": fornece dados como: nome, telefone, endereço...
    "SELF PAY PIZZA"->cliente: Finaliza a compra ou cancela o pedido
    "SELF PAY PIZZA"->cliente: Fazer o pagamento, metodos pix, crédito e debito.
    "SELF PAY PIZZA"->cliente: Ao fazer a compra o site mostra o tempo estimado e a rota
    "SELF PAY PIZZA"->cliente: Ao finalizar a compra o valor gasto é adicionado ao canto superior esquerdo da página


```
### Diagrama de Sequência: Administrador
```mermaid
zenuml
title "Interação Admin"
    admin->"SELF PAY PIZZA": Faz login
    "SELF PAY PIZZA": Mostra um pequeno dash board mostrando o caixa e os pedidos em aberto e cancelamentos
    admin->"SELF PAY PIZZA": Pode ou não adicionar novos itens passando as caracteristicas dele e a imagens referente ao produto
    admin->"SELF PAY PIZZA": seleciona sobre detalhes dos pedidos
    "SELF PAY PIZZA"->admin: Mostra os pedidos finalizados, os pedidos cancelados e o custo no caixa.
    "SELF PAY PIZZA"->admin: Mostra no campo estoque os insumos e suas quantidades.

```
### Caso de Uso: CLiente

```mermaid
graph LR
    %% Definição dos Atores
    Cliente["👤 Cliente"] 
    Sistema["🖥️ Self Pay Pizzas"]

    %% Definição dos Casos de Uso
    C1(Selecionar Pizza)
    C2(Escolher Tamanho)
    C3(Definir Quantidade)
    C4(Adicionar ao Carrinho)
    C5(Cancelar Item)
    C6(Finalizar Compra)
    C7(Realizar Pagamento)
    C8(Visualizar Tempo Estimado e Rota)

    %% Relação entre Cliente e Casos de Uso
    Cliente -->|Interage| C1
    Cliente -->|Interage| C2
    Cliente -->|Interage| C3
    Cliente -->|Interage| C4
    Cliente -->|Interage| C5
    Cliente -->|Interage| C6
    Cliente -->|Interage| C7
    Cliente -->|Interage| C8

    %% Relacionamento entre Casos de Uso
    C6 -->|Depende de| C4
    C7 -->|Depende de| C6
    C8 -->|Após compra| C6

    %% Conexão com o Sistema
    Sistema --> C1
    Sistema --> C2
    Sistema --> C3
    Sistema --> C4
    Sistema --> C5
    Sistema --> C6
    Sistema --> C7
    Sistema --> C8

```
### Caso de Uso: Admin
```mermaid
graph LR
    %% Definição do Ator
    Admin["👤 Administrador"]
    Sistema["🖥️ Self Pay Pizzas"]

    %% Definição dos Casos de Uso
    C1(Fazer Login)
    C2(Visualizar Dashboard)
    C3(Gerenciar Itens do Cardápio)
    C4(Consultar Pedidos)
    C5(Visualizar Caixa)
    C6(Acompanhar Estoque)

    %% Relacionamento entre Ator e Casos de Uso
    Admin -->|Acessa| C1
    Admin -->|Visualiza| C2
    Admin -->|Adiciona/Remove| C3
    Admin -->|Consulta| C4
    Admin -->|Consulta| C5
    Admin -->|Gerencia| C6

    %% Relação entre Casos de Uso
    C1 -->|Após login| C2
    C2 -->|Exibe| C5
    C2 -->|Exibe| C4
    C2 -->|Exibe| C6

```
### Diagrama de Entidade Relacionamento
```mermaid
erDiagram
    ADMIN {
        int id
        string nome
        string email
        string senha
    }
    
    CLIENTE {
        int id
        string nome
        string telefone
        string endereco
    }
    
    PEDIDO {
        int id
        date data
        float valor_total
        string status
    }
    
    ITEM {
        int id
        string nome
        float preco
        string descricao
        string imagem_url
    }
    
    ESTOQUE {
        int id
        string nome_insumo
        int quantidade
    }

    ADMIN ||--o{ PEDIDO : "gerencia"
    CLIENTE ||--o{ PEDIDO : "faz"
    PEDIDO ||--o{ ITEM : "contém"
    ESTOQUE ||--o{ ITEM : "fornece"

```

```mermaid
graph TD;
    subgraph Backend
        Controller[Controller Lógica da Aplicação]
        Service[Service Regras de Negócio]
        Repository[Repository Acesso ao Banco de Dados]
        Model[Model Definição de Dados]
        Routes[Routes Definição das Rotas]
    end
    
    subgraph Frontend
        Components[Componentes UI]
        StateManagement[Gerenciamento de Estado]
        API[Comunicação com API]
    end
    
    subgraph Database
        Tables[Tabelas do Banco de Dados MySQL]
    end

    Routes --> Controller
    Controller --> Service
    Service --> Repository
    Repository --> Model
    Model --> Tables

    Frontend -->|Chama a API| Routes
    Tables -->|Armazena Dados| Repository
```

### **Self Pay Pizzas - API**
Este repositório contém o backend da aplicação **Self Pay Pizzas**, desenvolvido em **Node.js** com **Express.js**, seguindo a arquitetura **MVC** e utilizando **MySQL** como banco de dados.

---

## 📌 **Tecnologias Utilizadas**
### **Backend**
- **Node.js** + **Express.js** (API REST)
- **Sequelize** (ORM para MySQL)
- **JWT** (Autenticação)
- **BCrypt** (Hash de Senhas)
- **Dotenv** (Gerenciamento de variáveis de ambiente)

### **Frontend**
- **React.js** (UI)
- **Redux / Context API** (Gerenciamento de Estado)
- **Axios** (Comunicação com API)

### **Banco de Dados**
- **MySQL** (Gerenciamento de dados)
- **Sequelize** (Mapeamento ORM)

---

## 📂 **Estrutura do Projeto (Backend)**
```
self-pay-pizzas-api/
│── src/
│   ├── controllers/    # Lógica de controle (MVC)
│   ├── services/       # Regras de negócio
│   ├── models/         # Definição das tabelas do BD (ORM Sequelize)
│   ├── repositories/   # Consultas ao banco de dados
│   ├── routes/         # Rotas da API
│   ├── middleware/     # Middlewares (Autenticação, Logs, etc.)
│   ├── config/         # Configurações gerais (Banco de Dados)
│   ├── app.js          # Inicialização da API
│   ├── server.js       # Servidor Express
│── .env                # Variáveis de ambiente
│── package.json        # Dependências do projeto
│── README.md           # Documentação
```

---

## 🛠️ **Instalação e Execução**

### 1️⃣ **Clone o Repositório**
```sh
git clone git@github.com:luiz-franca/Projeto-Venda-Pizzas.git
cd self-pay-pizzas-api
```

### 2️⃣ **Instale as Dependências**
```sh
npm install
```

### 3️⃣ **Configure as Variáveis de Ambiente**
Crie um arquivo **.env** na raiz do projeto e defina:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senha
DB_NAME=self_pay_pizzas
PORT=5000
JWT_SECRET=seu_segredo
```

### 4️⃣ **Crie as Tabelas no MySQL**
```sh
npx sequelize-cli db:migrate
```

### 5️⃣ **Inicie o Servidor**
```sh
npm start
```

---

## 🔗 **Rotas da API**
### 🤓 **Autenticação (JWT)**
| Método | Rota         | Descrição                 |
|--------|-------------|---------------------------|
| POST   | `/auth/login`  | Autenticação do usuário |
| POST   | `/auth/register` | Cadastro de cliente |

### 🍕 **Pedidos**
| Método | Rota          | Descrição               |
|--------|--------------|-------------------------|
| GET    | `/pedidos`   | Lista todos os pedidos  |
| POST   | `/pedidos`   | Cria um novo pedido     |
| GET    | `/pedidos/:id` | Consulta um pedido específico |
| PUT    | `/pedidos/:id` | Atualiza um pedido     |
| DELETE | `/pedidos/:id` | Cancela um pedido      |

### 📦 **Estoque**
| Método | Rota          | Descrição                  |
|--------|--------------|----------------------------|
| GET    | `/estoque`   | Lista os itens do estoque  |
| PUT    | `/estoque/:id` | Atualiza o estoque |

### 👤 **Clientes**
| Método | Rota          | Descrição                   |
|--------|--------------|-----------------------------|
| GET    | `/clientes`  | Lista todos os clientes     |
| GET    | `/clientes/:id` | Consulta um cliente específico |
| DELETE | `/clientes/:id` | Exclui um cliente |

---

## 🔒 **Autenticação e Segurança**
- Uso de **JWT** para autenticação de usuários e administradores.
- **BCrypt** para hash de senhas.
- Middleware para proteger rotas autenticadas.

---

## 🚀 **Futuras Implementações**
- Integração com **WebSockets** para notificação em tempo real.
- Implementação de **Stripe** para pagamentos online.
- Dashboard avançado para administração.

---


