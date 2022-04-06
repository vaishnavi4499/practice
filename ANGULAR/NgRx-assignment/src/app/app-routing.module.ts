import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserFormComponent } from "./components/userform/userform.component";
import { UserListComponent } from "./components/userlist/userlist.component";

const routes:Routes =[
    {path: 'userlist', component: UserListComponent},
    {path: 'userform', component:UserFormComponent}

];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})


export class RoutingModule { }