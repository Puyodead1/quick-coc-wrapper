import ClashAPI from "../ClashAPI";
import {
  APILabel,
  APILeague,
  APIPlayer,
  APIPlayerClan,
  APIPlayerItemLevel,
  APIPlayerLegendStatistics,
} from "../ClashInterface";
import League from "./League";
import PlayerClan from "./PlayerClan";
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
  troops: APIPlayerItemLevel[];
  heroes: APIPlayerItemLevel[];
  spells: APIPlayerItemLevel[];
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
  achievements: import("f:/code/quick-coc-wrapper/src/ClashInterface").APIPlayerAchievementProgress[];
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
    this.troops = data.troops; // TODO:
    this.heroes = data.heroes; // TODO:
    this.spells = data.spells; // TODO:
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
    this.achievements = data.achievements; // TODO:
    this.versusBattleWinCount = data.versusBattleWinCount;
  }
}
