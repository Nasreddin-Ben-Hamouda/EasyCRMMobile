import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "loading", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {
    path: "items",

    children: [
      {
        path: "",
        loadChildren: "./items/items.module#ItemsPageModule"
      },
      {
        path: ":item",
        loadChildren: "./items/item/item.module#ItemPageModule"
      }
    ]
  },
  {
    path: "contacts",
    children: [
      {
        path: "",
        loadChildren: "./contacts/contacts.module#ContactsPageModule"
      },
      {
        path: ":contact",
        loadChildren: "./contacts/contact/contact.module#ContactPageModule"
      }
    ]
  },
  {
    path: "invoices",
    children: [
      {
        path: "",
        loadChildren: "./invoices/invoices.module#InvoicesPageModule"
      },
      {
        path: ":invoice",
        loadChildren: "./invoices/invoice/invoice.module#InvoicePageModule"
      }
    ]
  },
  {
    path: "add-contact",
    loadChildren:
      "./contacts/add-contact/add-contact.module#AddContactPageModule"
  },
  {
    path: "estimates",
    children: [
      {
        path: "",
        loadChildren: "./estimates/estimates.module#EstimatesPageModule"
      },
      {
        path: ":estimate",
        loadChildren: "./estimates/estimate/estimate.module#EstimatePageModule"
      }
    ]
  },
  {
    path: "expenses",
    children: [
      {
        path: "",
        loadChildren: "./expenses/expenses.module#ExpensesPageModule"
      },
      {
        path: ":expense",
        loadChildren: "./expenses/expense/expense.module#ExpensePageModule"
      }
    ]
  },

  {
    path: "payments",
    children: [
      {
        path: "",
        loadChildren: "./payments/payments.module#PaymentsPageModule"
      },
      {
        path: ":payment",
        loadChildren: "./payments/payment/payment.module#PaymentPageModule"
      }
    ]
  },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'loading', loadChildren: './loading/loading.module#LoadingPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
