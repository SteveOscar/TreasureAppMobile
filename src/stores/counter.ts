import { action, observable, runInAction } from "mobx";
import axios from "axios";

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

  @action
  getDataSuccess = response => {
    debugger;
  };

  @observable githubProjects = [];
  @observable state = "pending"; // "pending" / "done" / "error"

  @action
  fetchProjects() {
    API = axios.create({
      baseURL: "http://dummy.restapiexample.com/api/v1",
      responseType: "json"
    });
    this.githubProjects = [];
    this.state = "pending";
    API.get("/employees").then(this.getDataSuccess);
  }

  @action
  fetchStuff() {
    API = axios.create({
      baseURL: "http://dummy.restapiexample.com/api/v1",
      responseType: "json"
    });
    this.githubProjects = [];
    this.state = "pending";
    API.get("/employees").then(results => {
      // put the 'final' modification in an anonymous action
      runInAction(() => {
        this.count = results.data.length;
      });
    });
  }
}

// http://dummy.restapiexample.com/api/v1/employees
export const counterStore = new CounterStore();
