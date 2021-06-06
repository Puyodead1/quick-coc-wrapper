import { ClashAPI } from "../ClashAPI";
import { APIPlayerClan } from "../ClashInterface";

export class PlayerClan {
  private api!: ClashAPI;
  tag: string;
  clanLevel: number;
  name: string;
  badgeUrls: { small: string; large: string; medium: string };

  /**
   * Creates a new PlayerClan instance
   * @param api Reference to ClashAPI instance
   * @param data APIPlayerClan data
   */
  constructor(api: ClashAPI, data: APIPlayerClan) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.tag = data.tag;
    this.clanLevel = data.clanLevel;
    this.name = data.name;
    this.badgeUrls = data.badgeUrls;
  }
}
