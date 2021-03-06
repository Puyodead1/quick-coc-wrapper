import { ClashAPI } from "../ClashAPI";
import { APIGoldPassSeason } from "../ClashInterface";
import { isoShortToFull } from "../Utils";

export class GoldPassSeason {
  private api!: ClashAPI;
  startTime: Date | string;
  endTime: Date | string;

  /**
   * Creates a new GoldPassSeason instance
   * @param api Reference to ClashAPI instance
   * @param data APIGoldPassSeason data
   */
  constructor(api: ClashAPI, data: APIGoldPassSeason) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.startTime = data.startTime;
    if (data.startTime) {
      const converted = isoShortToFull(data.startTime);
      if (converted) this.startTime = new Date(converted);
    }
    this.endTime = data.endTime;
    if (data.endTime) {
      const converted = isoShortToFull(data.endTime);
      if (converted) this.endTime = new Date(converted);
    }
  }
}
