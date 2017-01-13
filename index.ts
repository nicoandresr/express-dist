import * as express from 'express';

export class ServeDist {
  private _app: express.Application;
  private _msgConsoleStartApp: string = "App listening on port: ";

  constructor(private _port: number, private _config: string) {
    this._app = express();
    this.setupExpressServer();
  }   

  private setupExpressServer(): void {
    this._app.use("/", express.static("dist"));

    if (this._config) {
      this._app.get("/config", (req, res) => { res.send(this._config); });
    }

    this._app.listen(this._port, () => console.log(this.getInitialMsg()));
  }   

  private getInitialMsg(): string {
    return this._msgConsoleStartApp + this._port;
  }   
}

export default ServeDist;
