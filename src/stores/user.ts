import { action, observable, runInAction } from "mobx";
import UserService from "../services/UserService";

/**
 * Counter store
 */
export class UserStore {
  /** Observalbe prop to hold count */
  @observable currentUser = null;
  @observable state = "pending"; // "pending" / "done" / "error"

  /** Action which will update count in store */
  @action
  setCount(count: number): void {
    this.count = count;
    this.employees = [];
  }

  @action
  loginUser(email, password) {
    this.currentUser = null;
    this.state = "pending";
    UserService.login(email, password).then(results => {
      // TODO: save results.data.auth_token to local storage
      console.log(results.data);
      runInAction(() => {
        this.state = "done";
        this.currentUser = results.data;
      });
    });
  }
}

export const userStore = new UserStore();
