import { ClashAPI } from "../ClashAPI";
import { APIPlayerLegendStatistics } from "../ClashInterface";
import { LegendLeagueTournamentSeasonResult } from "./LegendLeagueTournamentSeasonResult";

export class PlayerLegendStatistics {
  private api!: ClashAPI;
  previousVersusSeason?: LegendLeagueTournamentSeasonResult;
  bestVersusSeason?: LegendLeagueTournamentSeasonResult;
  legendTrophies: number;
  currentSeason?: LegendLeagueTournamentSeasonResult;
  previousSeason?: LegendLeagueTournamentSeasonResult;
  bestSeason?: LegendLeagueTournamentSeasonResult;

  /**
   * Creates a new PlayerLegendStatistics instance
   * @param api Reference to ClashAPI instance
   * @param data APIPlayerLegendStatistics data
   */
  constructor(api: ClashAPI, data: APIPlayerLegendStatistics) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    if (data.previousVersusSeason) {
      this.previousVersusSeason = new LegendLeagueTournamentSeasonResult(
        this.api,
        data.previousVersusSeason
      );
    }
    if (data.bestVersusSeason) {
      this.bestVersusSeason = new LegendLeagueTournamentSeasonResult(
        this.api,
        data.bestVersusSeason
      );
    }
    this.legendTrophies = data.legendTrophies;
    if (data.currentSeason) {
      this.currentSeason = new LegendLeagueTournamentSeasonResult(
        this.api,
        data.currentSeason
      );
    }
    if (data.previousSeason) {
      this.previousSeason = new LegendLeagueTournamentSeasonResult(
        this.api,
        data.previousSeason
      );
    }
    if (data.bestSeason) {
      this.bestSeason = new LegendLeagueTournamentSeasonResult(
        this.api,
        data.bestSeason
      );
    }
  }
}
