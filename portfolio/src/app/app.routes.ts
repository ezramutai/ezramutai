import { Routes } from '@angular/router';
import { HomeComponent } from '/.components/home.component'
export const routes: Routes = [
    {path: "",
        component: HomeComponent
    };
    {path:"nav",
        component: NavComponent
    };
    {path: "products",
        component: ProductsComponent;
    };
];
