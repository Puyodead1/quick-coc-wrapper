import ClashAPI from "../ClashAPI";
import { APIGoldPassSeason } from "../ClashInterface";
import { isoShortToFull } from "../Utils";

export default class GoldPassSeason {
  private api!: ClashAPI;
  startTime: Date | string;
  endTime: Date | string;

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
