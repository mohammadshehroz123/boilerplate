import { AppInstance } from './app';
import express from 'express';

class Server {
  private app: express.Application;
  private port;

  constructor(){
    this.app = AppInstance.getApp();
    this.port = process.env.PORT || 3000;
  }

  public start(){
    this.app.listen(this.port, () => {
      console.log(`Server is listening ${this.port} port.`);
    });
  }
}

const server = new Server();
server.start();
