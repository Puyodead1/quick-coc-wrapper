import ClashAPI from "../ClashAPI";
import { APILegendLeagueTorunamentSeasonResult } from "../ClashInterface";

export default class LegendLeagueTournamentSeasonResult {
  private api!: ClashAPI;
  trophies: number;
  id: string;
  rank: number;

  constructor(api: ClashAPI, data: APILegendLeagueTorunamentSeasonResult) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.trophies = data.trophies;
    this.id = data.id;
    this.rank = data.rank;
  }
}
