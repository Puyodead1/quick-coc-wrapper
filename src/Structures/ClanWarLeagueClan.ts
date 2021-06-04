import ClashAPI from "../ClashAPI";
import {
  APIClanWarLeagueClan,
  APIClanWarLeagueClanMember,
} from "../ClashInterface";
import ClanWarLeagueClanMember from "./ClanWarLeagueClanMember";

export default class ClanWarLeagueClan {
  private api!: ClashAPI;
  tag: string;
  clanLevel: number;
  name: string;
  members: Map<string, ClanWarLeagueClanMember> = new Map();
  badgeUrls: { small: string; large: string; medium: string };

  constructor(api: ClashAPI, data: APIClanWarLeagueClan) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.tag = data.tag;
    this.clanLevel = data.clanLevel;
    this.name = data.name;
    if (data.members) {
      data.members.forEach((member) => {
        const m = new ClanWarLeagueClanMember(this.api, member);
        this.members.set(m.tag, m);
      });
    }
    this.badgeUrls = data.badgeUrls;
  }
}
