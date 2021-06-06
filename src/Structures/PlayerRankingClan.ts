import ClashAPI from "../ClashAPI";
import { APIPlayerRankingClan } from "../ClashInterface";

export default class PlayerRankingClan {
  private api!: ClashAPI;
  tag: string;
  name: string;
  badgeUrls: { small: string; large: string; medium: string };

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
