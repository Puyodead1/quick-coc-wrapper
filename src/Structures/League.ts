import ClashAPI from "../ClashAPI";
import { APILeague } from "../ClashInterface";

export default class League {
  private api!: ClashAPI;
  id: number;
  name: string;
  iconUrls: { small: string; tiny: string; medium: string };

  constructor(api: ClashAPI, data: APILeague) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.id = data.id;
    this.name = data.name;
    this.iconUrls = data.iconUrls;
  }
}
