import { ClashAPI } from "../ClashAPI";
import { APIClanWarAttack } from "../ClashInterface";

export class ClanWarAttack {
  private api!: ClashAPI;
  stars: number;
  order: number;
  attackerTag: string;
  defenderTag: string;
  destructionPercentage: number;
  duration: number;

  /**
   * Creates a new ClanWarAttack instance
   * @param api Reference to ClashAPI instance
   * @param data APIClanWarAttack data
   */
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
