import { userRepository } from "../repositories/userRepository";
import { BehaviorSubject } from "rxjs";

export class UserPresenter {
  public items: BehaviorSubject<any[]>;

  constructor(repository: any) {
    this.items = repository.items;
  }
  public get(): void {
    userRepository.get();
  }
}

export const userPresenter = new UserPresenter(userRepository);
