import ClashAPI from "../ClashAPI";
import { APIClanWarAttack } from "../ClashInterface";

export default class ClanWarAttack {
  private api!: ClashAPI;
  stars: number;
  order: number;
  attackerTag: string;
  defenderTag: string;
  destructionPercentage: number;
  duration: number;

  constructor(api: ClashAPI, data: APIClanWarAttack) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.order = data.order;
    this.attackerTag = data.attackerTag;
    this.defenderTag = data.defenderTag;
    this.stars = data.stars;
    this.destructionPercentage = data.destructionPercentage;
    this.duration = data.duration;
  }
}
