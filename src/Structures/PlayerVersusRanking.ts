import ClashAPI from "../ClashAPI";
import { APIPlayerVersusRanking } from "../ClashInterface";
import PlayerRankingClan from "./PlayerRankingClan";

export default class PlayerVersusRanking {
  private api!: ClashAPI;
  clan?: PlayerRankingClan;
  versusBattleWins: number;
  tag: string;
  name: string;
  expLevel: number;
  rank: number;
  previousRank: number;
  versusTrophies: number;

  constructor(api: ClashAPI, data: APIPlayerVersusRanking) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    if (data.clan) {
      this.clan = new PlayerRankingClan(this.api, data.clan);
    }
    this.versusBattleWins = data.versusBattleWins;
    this.tag = data.tag;
    this.name = data.name;
    this.expLevel = data.expLevel;
    this.rank = data.rank;
    this.previousRank = data.previousRank;
    this.versusTrophies = data.versusTrophies;
  }
}
