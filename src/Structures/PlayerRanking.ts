import { ClashAPI } from "../ClashAPI";
import { APIPlayerRanking } from "../ClashInterface";
import { League } from "./League";
import { PlayerRankingClan } from "./PlayerRankingClan";

export class PlayerRanking {
  private api!: ClashAPI;
  league?: League;
  clan?: PlayerRankingClan;
  attackWins: number;
  defenseWins: number;
  tag: string;
  name: string;
  expLevel: number;
  rank: number;
  previousRank: number;
  trophies: number;

  constructor(api: ClashAPI, data: APIPlayerRanking) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    if (data.league) {
      this.league = new League(this.api, data.league);
    }
    if (data.clan) {
      this.clan = new PlayerRankingClan(this.api, data.clan);
    }
    this.attackWins = data.attackWins;
    this.defenseWins = data.defenseWins;
    this.tag = data.tag;
    this.name = data.name;
    this.expLevel = data.expLevel;
    this.rank = data.rank;
    this.previousRank = data.previousRank;
    this.trophies = data.trophies;
  }
}
