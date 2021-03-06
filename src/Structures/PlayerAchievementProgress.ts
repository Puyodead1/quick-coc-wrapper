import { ClashAPI } from "../ClashAPI";
import { APIPlayerAchievementProgress } from "../ClashInterface";

export class PlayerAchievementProgress {
  private api!: ClashAPI;
  stars: number;
  value: number;
  name: unknown;
  target: number;
  info: unknown;
  completionInfo: unknown;
  village: string;

  /**
   * Creates a new PlayerAchievementProgress instance
   * @param api Reference to ClashAPI instance
   * @param data APIPlayerAchievementProgress data
   */
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
