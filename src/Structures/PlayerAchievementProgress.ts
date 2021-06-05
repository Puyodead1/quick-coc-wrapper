import ClashAPI from "../ClashAPI";
import { APIPlayerAchievementProgress } from "../ClashInterface";

export default class PlayerAchievementProgress {
  private api!: ClashAPI;
  stars: number;
  value: number;
  name: unknown;
  target: number;
  info: unknown;
  completionInfo: unknown;
  village: string;

  constructor(api: ClashAPI, data: APIPlayerAchievementProgress) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.stars = data.stars;
    this.value = data.value;
    this.name = data.name;
    this.target = data.target;
    this.info = data.info;
    this.completionInfo = data.completionInfo;
    this.village = data.village;
  }
}
