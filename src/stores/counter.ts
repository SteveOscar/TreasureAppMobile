import { action, observable, runInAction } from "mobx";
import UserService from "../services/UserService";

/**
 * Counter store
 */
export class CounterStore {
  /** Observalbe prop to hold count */
  @observable count = 0;

  /** Action which will update count in store */
  @action
  setCount(count: number): void {
    this.count = count;
    this.employees = [];
  }

  /** Action to increment counter by 1 */
  @action
  increment(): void {
    this.count = this.count + 2;
  }

  /** Action to decrement counter by 1 */
  @action
  decrement(): void {
    this.count = this.count - 1;
  }

  @observable githubProjects = [];
  @observable state = "pending"; // "pending" / "done" / "error"

  @action
  fetchStuff() {
    this.githubProjects = [];
    this.state = "pending";
    UserService.getStuff().then(results => {
      // put the 'final' modification in an anonymous action
      runInAction(() => {
        this.state = "done";
        this.count = this.count + results.data.length;
      });
    });
  }
}

// http://dummy.restapiexample.com/api/v1/employees
export const counterStore = new CounterStore();
