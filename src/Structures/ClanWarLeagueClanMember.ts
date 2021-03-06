import { ClashAPI } from "../ClashAPI";
import { APIClanWarLeagueClanMember } from "../ClashInterface";

export class ClanWarLeagueClanMember {
  private api!: ClashAPI;
  tag: string;
  townHallLevel: number;
  name: string;

  /**
   * Creates a new ClanWarLeagueClanMember instance
   * @param api Reference to ClashAPI instance
   * @param data APIClanWarLeagueClanMember data
   */
  constructor(api: ClashAPI, data: APIClanWarLeagueClanMember) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.tag = data.tag;
    this.townHallLevel = data.townHallLeveL;
    this.name = data.name;
  }
}
