import express from 'express';
import { UserController } from './app/user/user.controller';
import mongoose from 'mongoose';

class ExpressApp {
  private app: express.Application;
  private userController: UserController;

  constructor(){
    this.app = express();
    this.userController = new UserController();
    this.configuration();
    this.configureDatabase();
    this.routes();
  }

  public routes(){
    this.userController = new UserController();
    this.app.use('/user', this.userController.getRoutes());
  }

  public configuration() {
    this.app.use(express.json());
  }

  public configureDatabase() {
    mongoose.connect('mongodb://localhost:27017/sample')
      .then(() => console.log('DB Connected'))
      .catch((e) => console.log(e))
  }

  public getApp() {
    return this.app;
  }
}

const AppInstance = new ExpressApp();
export { AppInstance };
