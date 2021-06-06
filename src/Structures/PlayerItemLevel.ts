import { ClashAPI } from "../ClashAPI";
import { APIPlayerItemLevel } from "../ClashInterface";

export class PlayerItemLevel {
  private api!: ClashAPI;
  level: number;
  name: unknown;
  maxLevel: number;
  village: string;
  superTroopIsActive: boolean = false;

  constructor(api: ClashAPI, data: APIPlayerItemLevel) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.level = data.level;
    this.name = data.name;
    this.maxLevel = data.maxLevel;
    this.village = data.village;
    if (data.superTroopIsActive) {
      this.superTroopIsActive = data.superTroopIsActive;
    }
  }
}
