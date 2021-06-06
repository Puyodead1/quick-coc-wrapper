import ClashAPI from "../ClashAPI";
import {
  APILabel,
  APIPlayer,
  APIPlayerVerifyTokenResponse,
} from "../ClashInterface";
import { ENDPOINTS } from "../Constants";
import League from "./League";
import PlayerAchievementProgress from "./PlayerAchievementProgress";
import PlayerClan from "./PlayerClan";
import PlayerItemLevel from "./PlayerItemLevel";
import PlayerLegendStatistics from "./PlayerLegendStatistics";

export default class Player {
  private api!: ClashAPI;
  league?: League;
  clan?: PlayerClan;
  role: string;
  attackWins: number;
  defenseWins: number;
  townHallLevel: number;
  townHallWeaponLevel: number;
  versusBattleWins: number;
  legendStatistics?: PlayerLegendStatistics;
  troops: PlayerItemLevel[] = [];
  heroes: PlayerItemLevel[] = [];
  spells: PlayerItemLevel[] = [];
  labels: APILabel[];
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  donations: number;
  donationsReceieved: number;
  builderHallLevel: number;
  versusTrophies: number;
  bestVersusTrophies: number;
  warStars: number;
  achievements: PlayerAchievementProgress[] = [];
  versusBattleWinCount: number;

  constructor(api: ClashAPI, data: APIPlayer) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    if (data.league) {
      this.league = new League(this.api, data.league);
    }
    if (data.clan) {
      this.clan = new PlayerClan(this.api, data.clan);
    }
    this.role = data.role;
    this.attackWins = data.attackWins;
    this.defenseWins = data.defenseWins;
    this.townHallLevel = data.townHallLevel;
    this.townHallWeaponLevel = data.townHallWeaponLevel;
    this.versusBattleWins = data.versusBattleWins;
    if (data.legendStatistics) {
      this.legendStatistics = new PlayerLegendStatistics(
        this.api,
        data.legendStatistics
      );
    }
    if (data.troops) {
      data.troops.forEach((troop) => {
        this.troops.push(new PlayerItemLevel(this.api, troop));
      });
    }
    if (data.heroes) {
      data.heroes.forEach((hero) => {
        this.heroes.push(new PlayerItemLevel(this.api, hero));
      });
    }
    if (data.spells) {
      data.spells.forEach((spell) => {
        this.spells.push(new PlayerItemLevel(this.api, spell));
      });
    }
    this.labels = data.labels;
    this.tag = data.tag;
    this.name = data.name;
    this.expLevel = data.expLevel;
    this.trophies = data.trophies;
    this.bestTrophies = data.bestTrophies;
    this.donations = data.donations;
    this.donationsReceieved = data.donationsReceived;
    this.builderHallLevel = data.builderHallLevel;
    this.versusTrophies = data.versusTrophies;
    this.bestVersusTrophies = data.bestVersusTrophies;
    this.warStars = data.warStars;
    if (data.achievements) {
      data.achievements.forEach((achievement) => {
        this.achievements.push(
          new PlayerAchievementProgress(this.api, achievement)
        );
      });
    }
    this.versusBattleWinCount = data.versusBattleWinCount;
  }

  verifyToken(token: string): Promise<APIPlayerVerifyTokenResponse> {
    return new Promise((resolve, reject) => {
      this.api
        .post(ENDPOINTS.PLAYER_VERIFYTOKEN(this.tag), {
          token,
        })
        .then((playerTokenVerifyResponse: any) => {
          if (!playerTokenVerifyResponse.error)
            resolve(playerTokenVerifyResponse.body);
          reject(playerTokenVerifyResponse);
        })
        .catch(reject);
    });
  }
}
