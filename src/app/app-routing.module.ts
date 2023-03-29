import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsUnloggedInGuard } from "./core/guards/is-unlogged-in.guard";
import { IsLoggedInGuard } from "./core/guards/is-logged-in.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/sign-up",
  },
  {
    path: "sign-up",
    canActivate: [IsUnloggedInGuard],
    loadChildren: () => import("./pages/sign-up/sign-up.module").then(m => m.SignUpModule)
  },
  {
    path: "sign-in",
    canActivate: [IsUnloggedInGuard],
    loadChildren: () => import("./pages/sign-in/sign-in.module").then(m => m.SignInModule)
  },
  {
    path: "file",
    canActivate: [IsLoggedInGuard],
    loadChildren: () => import("./pages/new-file/new-file.module").then(m => m.NewFileModule)
  },
  {
    path: "files",
    canActivate: [IsLoggedInGuard],
    loadChildren: () => import("./pages/files/files.module").then(m => m.FilesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
