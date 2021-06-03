import ClashAPI from "../ClashAPI";
import { APIWarClan } from "../ClashInterface";
import ClanWarMember from "./ClanWarMember";

export default class WarClan {
  private api!: ClashAPI;
  destructionPercentage: unknown;
  tag: string;
  name: string;
  badgeUrls: { small: string; large: string; medium: string };
  clanLevel: number;
  attacks?: number;
  stars: number;
  expEarned?: number;
  members: ClanWarMember[] = [];

  constructor(api: ClashAPI, data: APIWarClan) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.destructionPercentage = data.destructionPercentage;
    this.tag = data.tag;
    this.name = data.name;
    this.badgeUrls = data.badgeUrls;
    this.clanLevel = data.clanLevel;
    this.attacks = data.attacks;
    this.stars = data.stars;
    this.expEarned = data.expEarned;
    if (data.members) {
      data.members.forEach((member) => {
        this.members.push(new ClanWarMember(this.api, member));
      });
    }
  }
}