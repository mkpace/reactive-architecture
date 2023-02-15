import axios from "axios";

class HttpGateway {
  private BASE_URL = "https://jsonplaceholder.typicode.com/users";
  private provider: any;

  constructor(provider: any) {
    this.provider = provider;
  }
  public async get(): Promise<any> {
    return this.provider.get(this.BASE_URL);
  }
}

export const httpGateway = new HttpGateway(axios);
