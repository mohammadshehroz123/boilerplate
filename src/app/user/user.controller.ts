import { Router, Response, Request } from "express";
import { UserAlreadyExistsError } from "./errors";
import { UserService } from "./user.service";

export class UserController {
  private router: Router;
  private readonly userService: UserService;
  
  constructor () {
    this.userService = new UserService();
    this.router = Router();
    this.setRoutes();
  }

  public setRoutes(): void { 
    
    this.router.get (
      '/',
      (req: Request, res: Response) => res.json('hi')
    );

    this.router.post (
      '/register', 
      this.registerUser
    );

    this.router.post (
      '/login',
      this.login
    );
    
  }

  public getRoutes(): Router {
    return this.router;
  }

  public registerUser = async (req: Request, res: Response) => {
    let response = await this.userService.registerUser(req.body);

    return res.status(200).json({
      message: `User has been created`
    })
  }

  public login = async (req: Request, res: Response) => {
    
  }
}
