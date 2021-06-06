import { ClashAPI } from "../ClashAPI";
import { APIWarLeague } from "../ClashInterface";

export class WarLeague {
  private api!: ClashAPI;
  name: string;
  id: number;

  /**
   * Creates a new WarLeague instance
   * @param api Reference to ClashAPI instance
   * @param data APIWarLeague data
   */
  constructor(api: ClashAPI, data: APIWarLeague) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.name = data.name;
    this.id = data.id;
  }
}
