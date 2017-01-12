import * as express from 'express';

class ServeDist {
  private _app: express.Application;
  private _msgConsoleStartApp: string = "App listening on port: ";

  constructor(private _port: number) {
    this._app = express();
    this.setupExpressServer();
  }   

  private setupExpressServer(): void {
    this._app.use("/", express.static("dist"));
    this._app.listen(this._port, () => console.log(this.getInitialMsg()));
  }   

  private getInitialMsg(): string {
    return this._msgConsoleStartApp + this._port;
  }  
}

exports.serveDist = (port) => new ServeDist(port);
