import { ClashAPI } from "../ClashAPI";
import { APIClanRanking } from "../ClashInterface";
import { Location } from "./Location";

export class ClanRanking {
  private api!: ClashAPI;
  clanLevel: number;
  clanPoints: number;
  location?: Location;
  tag: string;
  name: string;
  rank: number;
  previousRank: number;
  badgeUrls: { small: string; large: string; medium: string };

  constructor(api: ClashAPI, data: APIClanRanking) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.clanLevel = data.clanLevel;
    this.clanPoints = data.clanPoints;
    if (data.location) {
      this.location = new Location(this.api, data.location);
    }
    this.tag = data.tag;
    this.name = data.name;
    this.rank = data.rank;
    this.previousRank = data.previousRank;
    this.badgeUrls = data.badgeUrls;
  }
}
