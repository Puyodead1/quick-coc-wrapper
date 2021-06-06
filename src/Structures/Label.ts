import { ClashAPI } from "../ClashAPI";
import { APILabel } from "../ClashInterface";

export class Label {
  private api!: ClashAPI;
  name: string;
  id: number;
  iconUrls: { small: string; medium: string };

  constructor(api: ClashAPI, data: APILabel) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.name = data.name;
    this.id = data.id;
    this.iconUrls = data.iconUrls;
  }
}
