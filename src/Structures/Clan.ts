import ClashAPI from "../ClashAPI";
import {
  APIClan,
  APILabel,
  APILocation,
  APIClanMember,
} from "../ClashInterface";
import { ENDPOINTS } from "../Constants";
import ClanMember from "./ClanMember";
import ClanWarLogEntry from "./ClanWarLogEntry";
import Language from "./Language";
import Location from "./Location";
import WarLeague from "./WarLeague";

export default class Clan {
  private api!: ClashAPI;
  tag: string;
  name: string;
  type: string;
  location?: Location;
  badgeUrls: { small: string; large: string; medium: string };
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  requiredTrophies: number;
  warFrequency: string;
  warWinStreak: number;
  warWins: number;
  isWarLogPublic: boolean;
  warLeague?: WarLeague;
  members: number;
  labels: APILabel[] = [];
  requiredVersusTrophies: number;
  requiredTownhallLevel: number;
  memberList: Map<string, ClanMember> = new Map();
  warTies?: number;
  warLosses?: number;
  chatLanguage?: Language;
  description?: string;

  constructor(api: ClashAPI, data: APIClan) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    if (data.warLeague) {
      this.warLeague = new WarLeague(this.api, data.warLeague);
    }
    if (data.memberList) {
      data.memberList.forEach((member) => {
        const m = new ClanMember(this.api, member);
        this.memberList.set(m.tag, m);
      });
    }
    this.tag = data.tag;
    this.clanVersusPoints = data.clanVersusPoints;
    this.requiredTrophies = data.requiredTrophies;
    this.requiredVersusTrophies = data.requiredVersusTrophies;
    this.requiredTownhallLevel = data.requiredTownhallLevel;
    this.isWarLogPublic = data.isWarLogPublic;
    this.warWinStreak = data.warWinStreak;
    this.warWins = data.warWins;
    this.warTies = data.warTies;
    this.warLosses = data.warLosses;
    this.clanPoints = data.clanPoints;
    if (data.chatLanguage) {
      this.chatLanguage = new Language(this.api, data.chatLanguage);
    }
    this.warFrequency = data.warFrequency;
    this.clanLevel = data.clanLevel;
    this.labels = data.labels;
    this.name = data.name;
    if (data.location) {
      this.location = new Location(this.api, data.location);
    }
    this.type = data.type;
    this.members = data.members;
    this.description = data.description;
    this.badgeUrls = data.badgeUrls;
  }

  /**
   * Retrieve clan's clan war log
   * @returns {ClanWarLogEntry}
   */
  fetchWarLog(): Promise<ClanWarLogEntry[]> {
    return new Promise((resolve, reject) => {
      this.api
        .get(ENDPOINTS.CLAN_WARLOG(this.tag))
        .then((apiWarLog: any) => {
          const warLog: ClanWarLogEntry[] = [];
          for (const log of apiWarLog.items) {
            warLog.push(new ClanWarLogEntry(this.api, log));
          }

          resolve(warLog);
        })
        .catch(reject);
    });
  }

  fetchMembers(): Promise<Map<string, ClanMember>> {
    return new Promise((resolve, reject) => {
      this.api
        .get(ENDPOINTS.CLAN_MEMBERS(this.tag))
        .then((apiClanMembers: any) => {
          for (const member of apiClanMembers) {
            const m = new ClanMember(this.api, member);
            this.memberList.set(m.tag, m);
          }
          resolve(this.memberList);
        })
        .catch(reject);
    });
  }
}
