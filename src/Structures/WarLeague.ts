import ClashAPI from "../ClashAPI";
import { APIWarLeague } from "../ClashInterface";

export default class WarLeague {
  private api!: ClashAPI;
  name: string;
  id: number;

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
