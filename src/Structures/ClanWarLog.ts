import ClashAPI from "../ClashAPI";
import { APIClanWarLog } from "../ClashInterface";
import ClanWarLogClan from "./ClanWarLogClan";

export default class ClanWarLog {
  private api!: ClashAPI;
  clan: ClanWarLogClan;
  teamSize: number;
  opponent: ClanWarLogClan;
  endTime: string;
  result: string;

  constructor(api: ClashAPI, data: APIClanWarLog) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.clan = new ClanWarLogClan(this.api, data.clan);
    this.teamSize = data.teamSize;
    this.opponent = new ClanWarLogClan(this.api, data.opponent);
    this.endTime = data.endTime;
    this.result = data.result;
  }
}
