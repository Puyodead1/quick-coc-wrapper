import { ClashAPI } from "../ClashAPI";
import { APILeague } from "../ClashInterface";
import { ENDPOINTS } from "../Constants";
import { LeagueSeason } from "./LeagueSeason";

export class League {
  private api!: ClashAPI;
  id: number;
  name: string;
  iconUrls: { small: string; tiny: string; medium: string };

  constructor(api: ClashAPI, data: APILeague) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.id = data.id;
    this.name = data.name;
    this.iconUrls = data.iconUrls;
  }

  /**
   * Get league seasons. Note that league season information is available only for Legend League.
   * @returns {LeagueSeason[]}
   */
  fetchSeasons(
    limit?: number,
    after?: string,
    before?: string
  ): Promise<LeagueSeason[]> {
    return new Promise((resolve, reject) => {
      this.api
        .get(ENDPOINTS.LEAGUE_SEASONS(this.id.toString(), limit, after, before))
        .then((apiLeagueSeasons: any) => {
          if (!apiLeagueSeasons.error) {
            const leagueSeasons = [];
            for (const apiLeagueSeason of apiLeagueSeasons.body.items) {
              leagueSeasons.push(new LeagueSeason(this.api, apiLeagueSeason));
            }
            resolve(leagueSeasons);
          }
          reject(apiLeagueSeasons);
        })
        .catch(reject);
    });
  }

  /**
   * Get league season rankings. Note that league season information is available only for Legend League.
   * @param seasonId Identifier of the season.
   * @returns {LeagueSeason}
   */
  fetchSeason(seasonId: string): Promise<LeagueSeason> {
    return new Promise((resolve, reject) => {
      this.api
        .get(ENDPOINTS.LEAGUE_SEASON(this.id.toString(), seasonId))
        .then((apiLeagueSeason: any) => {
          if (!apiLeagueSeason.error)
            resolve(new LeagueSeason(this.api, apiLeagueSeason));
          reject(apiLeagueSeason);
        });
    });
  }
}
