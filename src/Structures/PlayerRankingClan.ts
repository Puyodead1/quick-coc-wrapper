import { ClashAPI } from "../ClashAPI";
import { APIPlayerRankingClan } from "../ClashInterface";

export class PlayerRankingClan {
  private api!: ClashAPI;
  tag: string;
  name: string;
  badgeUrls: { small: string; large: string; medium: string };

  /**
   * Creates a new PlayerRankingClan instance
   * @param api Reference to ClashAPI instance
   * @param data APIPlayerRankingClan data
   */
  constructor(api: ClashAPI, data: APIPlayerRankingClan) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.tag = data.tag;
    this.name = data.name;
    this.badgeUrls = data.badgeUrls;
  }
}
