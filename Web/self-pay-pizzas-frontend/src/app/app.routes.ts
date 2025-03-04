import {Routes} from '@angular/router';
import {authGuard} from './auth/auth.guard';
import {AdminComponent} from './auth/login/admin/admin.component';
import {CustomersComponent as LoginCustomersComponent} from './auth/login/customers/customers.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {
  CustomersDetailsComponent
} from './view/customers/customers-details/customers-details.component';
import {CustomersComponent} from './view/customers/customers.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {OrdersDetailsComponent} from './view/orders/orders-details/orders-details.component';
import {OrdersComponent} from './view/orders/orders.component';
import {StockDetailsComponent} from './view/stock/stock-details/stock-details.component';
import {StockComponent} from './view/stock/stock.component';
import { ItemsComponent } from './view/items/items.component';

export const routes: Routes = [
  { path:"", canActivate:[authGuard],
    children: [
      { path:"", component: ItemsComponent },
      { path:"items", component: ItemsComponent },
      { path:"dashboard", component: DashboardComponent },
      { path:"orders", component: OrdersComponent },
      { path:"orders/:id", component: OrdersDetailsComponent },
      { path:"stock", component: StockComponent },
      { path:"stock/:id", component: StockDetailsComponent },
      { path:"customers", component: CustomersComponent },
      { path:"customers/:id", component: CustomersDetailsComponent },
    ]
   },
  { path:"auth/login", component: LoginComponent },
  { path:"auth/admin", component: AdminComponent },
  { path:"auth/customers", component: LoginCustomersComponent },
  { path:"auth/register", component: RegisterComponent }
];
