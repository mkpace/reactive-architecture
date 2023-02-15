import { httpGateway } from "./../gateway/http-gateway";
import { BehaviorSubject } from "rxjs";

class UserRepository {
  private gateway: any;

  public items: BehaviorSubject<any[]>;

  constructor(gateway: any) {
    this.gateway = gateway;
    this.items = new BehaviorSubject<any[]>([]);
  }
  public async get(): Promise<void> {
    const response = await this.gateway.get();
    this.items.next(response.data);
  }
}

export const userRepository = new UserRepository(httpGateway);
