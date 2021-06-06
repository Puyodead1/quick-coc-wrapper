import { ClashAPI } from "../ClashAPI";
import { APILeagueSeason } from "../ClashInterface";

export class LeagueSeason {
  private api!: ClashAPI;
  id: string;

  constructor(api: ClashAPI, data: APILeagueSeason) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.id = data.id;
  }
}
