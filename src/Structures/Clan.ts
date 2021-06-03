import ClashAPI from "../ClashAPI";
import {
  APIClan,
  APIClanLabel,
  APIClanLocation,
  APIClanMember,
} from "../ClashInterface";
import { ENDPOINTS } from "../Constants";
import ClanMember from "./ClanMember";
import ClanWarLog from "./ClanWarLog";

export default class Clan {
  private api!: ClashAPI;
  tag: string;
  name: string;
  type: string;
  location?: APIClanLocation;
  badgeUrls: { small: string; large: string; medium: string };
  clanLevel: number;
  clanPoints: number;
  clanVersusPoints: number;
  requiredTrophies: number;
  warFrequency: string;
  warWinStreak: number;
  warWins: number;
  isWarLogPublic: boolean;
  warLeague: { name: string; id: number };
  members: number;
  labels: APIClanLabel[] = [];
  requiredVersusTrophies: number;
  requiredTownhallLevel: number;
  memberList: APIClanMember[] = [];
  warTies?: number;
  warLosses?: number;
  chatLanguage?: { name: string; id: number; languageCode: string };
  description?: string;

  constructor(api: ClashAPI, data: APIClan) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.warLeague = data.warLeague;
    if (data.memberList) {
      data.memberList.forEach((member) => {
        this.memberList.push(new ClanMember(this.api, member));
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
    this.chatLanguage = data.chatLanguage;
    this.warFrequency = data.warFrequency;
    this.clanLevel = data.clanLevel;
    this.labels = data.labels;
    this.name = data.name;
    this.location = data.location;
    this.type = data.type;
    this.members = data.members;
    this.description = data.description;
    this.badgeUrls = data.badgeUrls;
  }

  /**
   * Retrieve clan's clan war log
   * @returns {ClanWarLog}
   */
  fetchWarLog(): Promise<ClanWarLog[]> {
    return new Promise((resolve, reject) => {
      this.api
        .get(ENDPOINTS.CLAN_WARLOG(this.tag))
        .then((apiWarLog: any) => {
          const warLog: ClanWarLog[] = [];
          for (const log of apiWarLog.items) {
            warLog.push(new ClanWarLog(this.api, log));
          }

          resolve(warLog);
        })
        .catch(reject);
    });
  }
}
