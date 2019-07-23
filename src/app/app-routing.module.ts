import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedComponent } from './feed/feed.component';
import { ProductComponent } from './product/product.component';
import { ProductResolveService } from './services/product-resolve.service';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //{ path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },
  { path: 'feed', component: FeedComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductComponent, resolve: { item: ProductResolveService } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
