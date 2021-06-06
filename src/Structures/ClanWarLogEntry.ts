import { ClashAPI } from "../ClashAPI";
import { APIClanWarLogEntry } from "../ClashInterface";
import { WarClan } from "./WarClan";
import { isoShortToFull } from "../Utils";

export class ClanWarLogEntry {
  private api!: ClashAPI;
  clan: WarClan;
  teamSize: number;
  opponent: WarClan;
  endTime?: Date | string;
  result: string;

  /**
   * Creates a new ClanWarLogEntry instance
   * @param api Reference to ClashAPI instance
   * @param data APIClanWarLogEntry data
   */
  constructor(api: ClashAPI, data: APIClanWarLogEntry) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.clan = new WarClan(this.api, data.clan);
    this.teamSize = data.teamSize;
    this.opponent = new WarClan(this.api, data.opponent);
    if (data.endTime) {
      const converted = isoShortToFull(data.endTime);
      if (converted) {
        this.endTime = new Date(converted);
      } else this.endTime = data.endTime;
    }
    this.result = data.result;
  }
}
