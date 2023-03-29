import { Component } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class LogoutButtonComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(["/sign-in"])
  }
}
