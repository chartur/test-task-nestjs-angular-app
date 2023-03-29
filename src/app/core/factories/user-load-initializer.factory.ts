import { AuthService } from "../../services/auth.service";

export const userLoadInitializerFactory = (authService: AuthService) => {
  return () => authService.loadUser();
}
