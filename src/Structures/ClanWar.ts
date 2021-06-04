import ClashAPI from "../ClashAPI";
import { APIClanWar, APIWarClan } from "../ClashInterface";

export default class ClanWar {
  private api!: ClashAPI;
  clan: APIWarClan;
  teamSize?: number | undefined;
  opponent: APIWarClan;
  startTime?: Date | string | undefined;
  state: string;
  endTime?: Date | string | undefined;
  preparationStartTime?: string | undefined;

  constructor(api: ClashAPI, data: APIClanWar) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.clan = data.clan;
    this.teamSize = data.teamSize;
    this.opponent = data.opponent;
    this.startTime = data.startTime;
    if (data.startTime) {
      const converted = isoShortToFull(data.startTime);
      if (converted) this.startTime = new Date(converted);
    }
    this.state = data.state;
    this.endTime = data.endTime;
    if (data.endTime) {
      const converted = isoShortToFull(data.endTime);
      if (converted) this.endTime = new Date(converted);
    }
    this.preparationStartTime = data.preparationStartTime;
  }
}
