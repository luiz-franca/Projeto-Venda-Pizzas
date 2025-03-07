# Self Pay Pizzas Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Documentação do Frontend - Self Pay Pizzas

## Visão Geral

O frontend do Self-Pay Pizzas é responsável pela interface do usuário, permitindo o cadastro, login e gestão de pedidos de pizzas. O sistema conta com autenticação para diferentes tipos de usuários (funcionários e clientes) e funcionalidades relacionadas ao gerenciamento de pedidos, pagamentos e dashboard administrativo.

## Estrutura de Rotas

As rotas estão definidas no arquivo de configuração de roteamento do framework **Angular** chamado `app.router.ts`. Algumas rotas exigem autenticação por meio do authGuard.

### Definição de Rotas:

```typescript
export const routes: Routes = [
  {
    path: "",
    canActivate: [authGuard],
    children: [
      { path: "", component: ItemsComponent },
      { path: "items", component: ItemsComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "orders", component: OrdersComponent },
      { path: "customers", component: CustomersComponent }
    ]
  },
  { path: "auth/login", component: LoginComponent },
  { path: "auth/admin", component: AdminComponent },
  { path: "auth/customers", component: LoginCustomersComponent },
  { path: "auth/register", component: RegisterComponent }
];
```

### Descrição das Rotas

- **""** (raiz): Redireciona para a tela de itens, protegida pelo `authGuard`.
- **"items"**: Tela de listagem e inserção de itens em pedidos.
- **"dashboard"**: Tela de visualização de dados, como estatísticas de pedidos e pagamentos.
- **"orders"**: Tela de gerenciamento e visualização de pedidos.
- **"customers"**: Tela de informações do pedido do cliente.
- **"auth/login"**: Tela de escolha do tipo de login(Cliente ou Funcionário)
- **"auth/admin"**: Tela de acesso restrito para administradores.
- **"auth/customers"**: Tela de login ecadastro dedicada para clientes.
- **"auth/register"**: Tela de cadastro de novos usuários.

## Funcionalidades

### Gestão de Usuários
- **Cadastro de usuários:** Possibilidade de criar contas para funcionários e clientes.
- **Login de usuários:** Acesso através de autenticação para diferentes tipos de usuários.
- **Exclusão de usuários:** Remoção de contas tanto de funcionários quanto de clientes.

### Gestão de Pedidos
- **Inserção de itens em um pedido:** Seleção de produtos disponíveis para compor o pedido.
- **Listagem do valor dos itens:** Visualização dos itens adicionados com seus respectivos preço, nome e descrição.
- **Cálculo do valor total:** Somatório do valor de todos os itens inseridos no pedido.
- **Alteração do status de entrega:** Atualização do status conforme o andamento do pedido.

### Pagamento
- **Efetuação do pagamento:** Registro da finalização do pedido com pagamento associado.
- **Inserção do pagamento:** Armazenamento das informações do pagamento realizado.

### Dashboard
- **Visualização de dados gerais:** Acompanhamento de métricas de vendas, pedidos e pagamentos.

## Considerações Finais
Esta documentação cobre as principais rotas, componentes e funcionalidades do frontend da aplicação Self Pay Pizzas. 




