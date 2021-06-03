import ClashAPI from "../ClashAPI";
import { APIClanWarLogEntry } from "../ClashInterface";
import WarClan from "./WarClan";

export default class ClanWarLogEntry {
  private api!: ClashAPI;
  clan: WarClan;
  teamSize: number;
  opponent: WarClan;
  endTime: string;
  result: string;

  constructor(api: ClashAPI, data: APIClanWarLogEntry) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.clan = new WarClan(this.api, data.clan);
    this.teamSize = data.teamSize;
    this.opponent = new WarClan(this.api, data.opponent);
    this.endTime = data.endTime;
    this.result = data.result;
  }
}
