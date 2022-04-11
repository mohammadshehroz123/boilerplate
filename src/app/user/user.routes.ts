import { Router } from "express";
import { UserController } from './user.controller';

class UserRoutes {
  private router: Router;
  private UserController: UserController = new UserController();

  constructor () {
    this.router = Router();
    this.setRoutes();
  }

  public setRoutes(): void { 
    this.router.post('/login', this.UserController.login);
    this.router.post ('/register', this.UserController.registerUser);
  }

  public getRoutes(): Router {
    return this.router;
  }
}

type Route = {
  path: string,
  routes: Router
}

const route: Route = {
  path: '/user',
  routes: new UserRoutes().getRoutes()
}

export default route;
