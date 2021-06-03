import ClashAPI from "../ClashAPI";
import { APIClanWar, APIWarClan } from "../ClashInterface";

export default class ClanWar {
  private api!: ClashAPI;
  clan: APIWarClan;
  teamSize: number;
  opponent: APIWarClan;
  startTime: string;
  state: string;
  endTime: string;
  preparationStartTime: string;

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
    this.state = data.state;
    this.endTime = data.endTime;
    this.preparationStartTime = data.preparationStartTime;
  }
}
