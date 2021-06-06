import { ClashAPI } from "../ClashAPI";
import {
  APIClanWarLeagueGroup,
  APIClanWarLeagueRound,
} from "../ClashInterface";
import { ClanWarLeagueClan } from "./ClanWarLeagueClan";

export class ClanWarLeagueGroup {
  private api!: ClashAPI;
  tag?: string | undefined;
  state: string;
  season: string;
  clans: ClanWarLeagueClan[] = [];
  rounds: APIClanWarLeagueRound[];

  /**
   * Creates a new ClanWarLeagueGroup instance
   * @param api Reference to ClashAPI instance
   * @param data APIClanWarLeagueGroup data
   */
  constructor(api: ClashAPI, data: APIClanWarLeagueGroup) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.tag = data.tag;
    this.state = data.state;
    this.season = data.season;
    if (data.clans) {
      data.clans.forEach((clan) => {
        this.clans.push(new ClanWarLeagueClan(this.api, clan));
      });
    }
    this.rounds = data.rounds;
  }
}
