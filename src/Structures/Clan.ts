import { ClashAPI } from "../ClashAPI";
import { APIClan } from "../ClashInterface";
import { ENDPOINTS } from "../Constants";
import { ClanMember } from "./ClanMember";
import { ClanWar } from "./ClanWar";
import { ClanWarLeagueGroup } from "./ClanWarLeagueGroup";
import { ClanWarLogEntry } from "./ClanWarLogEntry";
import { Language } from "./Language";
import { Location } from "./Location";
import { WarLeague } from "./WarLeague";
import { Label } from "./Label";

export class Clan {
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
  labels: Label[] = [];
  requiredVersusTrophies: number;
  requiredTownhallLevel: number;
  memberList: Map<string, ClanMember> = new Map();
  warTies?: number | undefined;
  warLosses?: number | undefined;
  chatLanguage?: Language;
  description?: string | undefined;

  /**
   * Creates a new Clan instance
   * @param api Reference to ClashAPI instance
   * @param data APIClan data
   */
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
    if (data.labels) {
      for (const apiLabel of data.labels) {
        this.labels.push(new Label(this.api, apiLabel));
      }
    }
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
          if (!apiWarLog.error) {
            const warLog: ClanWarLogEntry[] = [];
            for (const log of apiWarLog.items) {
              warLog.push(new ClanWarLogEntry(this.api, log));
            }

            resolve(warLog);
          }
          reject(apiWarLog);
        })
        .catch(reject);
    });
  }

  /**
   * List clan members.
   * @returns {ClanMember[]}
   */
  fetchMembers(): Promise<Map<string, ClanMember>> {
    return new Promise((resolve, reject) => {
      this.api
        .get(ENDPOINTS.CLAN_MEMBERS(this.tag))
        .then((apiClanMembers: any) => {
          if (!apiClanMembers.error) {
            for (const member of apiClanMembers.body) {
              const m = new ClanMember(this.api, member);
              this.memberList.set(m.tag, m);
            }
            resolve(this.memberList);
          }
          reject(apiClanMembers);
        })
        .catch(reject);
    });
  }

  /**
   * Retrieve information about clan's current clan war
   * @returns {ClanWar}
   */
  fetchCurrentWar(): Promise<ClanWar> {
    return new Promise((resolve, reject) => {
      this.api
        .get(ENDPOINTS.CLAN_CURRENT_WAR(this.tag))
        .then((apiWar: any) => {
          if (!apiWar.error) resolve(new ClanWar(this.api, apiWar.body));
          reject(apiWar);
        })
        .catch(reject);
    });
  }

  /**
   * Retrieve information about clan's current clan war league group
   * @returns {ClanWarLeagueGroup}
   */
  fetchCurrentWarLeagueGroup() {
    return new Promise((resolve, reject) => {
      this.api
        .get(ENDPOINTS.CLAN_CURRENT_WARLEAGUE(this.tag))
        .then((apiWarLeagueGroup: any) => {
          if (!apiWarLeagueGroup.error)
            resolve(new ClanWarLeagueGroup(this.api, apiWarLeagueGroup));
          reject(apiWarLeagueGroup);
        })
        .catch(reject);
    });
  }

  /**
   * Retrieve information about individual clan war league war
   * @param warTag Tag of the war
   * @returns {ClanWarLeagueGroup}
   */
  fetchClanWarLeagueWar(warTag: string): Promise<ClanWarLeagueGroup> {
    return new Promise((resolve, reject) => {
      this.api
        .get(ENDPOINTS.CLAN_WARLEAGUES_WAR(warTag))
        .then((apiWarLeagueWar: any) => {
          if (!apiWarLeagueWar.error)
            resolve(new ClanWarLeagueGroup(this.api, apiWarLeagueWar.body));
          reject(apiWarLeagueWar);
        })
        .catch(reject);
    });
  }
}
