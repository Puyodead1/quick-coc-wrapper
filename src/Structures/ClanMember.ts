import ClashAPI from "../ClashAPI";
import {
  APIClan,
  APILabel,
  APILocation,
  APIClanMember,
} from "../ClashInterface";
import League from "./League";

export default class ClanMember {
  private api!: ClashAPI;
  league?: League;
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

    if (data.league) {
      this.league = new League(this.api, data.league);
    }
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
