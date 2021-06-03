import ClashAPI from "../ClashAPI";
import {
  APIClan,
  APIClanLabel,
  APIClanLocation,
  APIClanMember,
} from "../ClashInterface";

export default class ClanMember {
  private api!: ClashAPI;
  league: {
    name: unknown;
    id: number;
    iconUrls: { small: string; tiny: string; medium: string };
  };
  tag: string;
  name: string;
  role: string;
  expLevel: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
  trophies: number;
  versusTrophies: number;

  constructor(api: ClashAPI, data: APIClanMember) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.league = data.league;
    this.tag = data.tag;
    this.name = data.name;
    this.role = data.role;
    this.expLevel = data.expLevel;
    this.clanRank = data.clanRank;
    this.previousClanRank = data.previousClanRank;
    this.donations = data.donations;
    this.donationsReceived = data.donationsReceived;
    this.trophies = data.trophies;
    this.versusTrophies = data.versusTrophies;
  }
}
