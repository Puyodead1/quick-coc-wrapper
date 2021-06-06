import { ClashAPI } from "../ClashAPI";
import { APIClanVersusRanking } from "../ClashInterface";
import { Location } from "./Location";

export class ClanVersusRanking {
  private api!: ClashAPI;
  clanVersusPoints: number;
  tag: string;
  name: string;
  location?: Location;
  badgeUrls: { small: string; large: string; medium: string };
  clanLevel: number;
  members: number;
  rank: number;
  previousRank: number;

  /**
   * Creates a new ClanVersusRanking instance
   * @param api Reference to ClashAPI instance
   * @param data APIClanVersusRanking data
   */
  constructor(api: ClashAPI, data: APIClanVersusRanking) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.tag = data.tag;
    this.name = data.name;
    if (data.location) {
      this.location = new Location(this.api, data.location);
    }
    this.badgeUrls = data.badgeUrls;
    this.clanLevel = data.clanLevel;
    this.members = data.members;
    this.rank = data.rank;
    this.previousRank = data.previousRank;
    this.clanVersusPoints = data.clanVersusPoints;
  }
}
