import { ClashAPI } from "../ClashAPI";
import { APILocation } from "../ClashInterface";
import { ENDPOINTS } from "../Constants";
import { ClanRanking } from "./ClanRanking";
import { ClanVersusRanking } from "./ClanVersusRanking";
import { PlayerRanking } from "./PlayerRanking";
import { PlayerVersusRanking } from "./PlayerVersusRanking";

export class Location {
  private api!: ClashAPI;
  localizedName?: string;
  id: number;
  name: string;
  isCountry: boolean;
  countryCode: string;

  constructor(api: ClashAPI, data: APILocation) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.localizedName = data.localizedName;
    this.id = data.id;
    this.name = data.name;
    this.isCountry = data.isCountry;
    this.countryCode = data.countryCode;
  }

  /**
   * Get clan rankings for a specific location
   * @param limit Limit the number of items returned in the response.
   * @param after Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @param before Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @returns {ClanRanking[]}
   */
  fetchClanRankings(
    limit?: number,
    after?: string,
    before?: string
  ): Promise<ClanRanking[]> {
    return new Promise((resolve, reject) => {
      this.api
        .get(
          ENDPOINTS.LOCATION_RANKINGS_CLANS(
            this.id.toString(),
            limit,
            after,
            before
          )
        )
        .then((apiClanRankings: any) => {
          if (!apiClanRankings.error) {
            const clanRankings = [];
            for (const apiClanRanking of apiClanRankings.body.items) {
              clanRankings.push(new ClanRanking(this.api, apiClanRanking));
            }

            resolve(clanRankings);
          }
          reject(apiClanRankings);
        })
        .catch(reject);
    });
  }

  /**
   * Get player rankings for a specific location
   * @param limit Limit the number of items returned in the response.
   * @param after Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @param before Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @returns {PlayerRanking[]}
   */
  fetchPlayerRankings(
    limit?: number,
    after?: string,
    before?: string
  ): Promise<PlayerRanking[]> {
    return new Promise((resolve, reject) => {
      this.api
        .get(
          ENDPOINTS.LOCATION_RANKINGS_PLAYERS(
            this.id.toString(),
            limit,
            after,
            before
          )
        )
        .then((apiPlayerRankings: any) => {
          if (!apiPlayerRankings.error) {
            const playerRankings = [];
            for (const apiPlayerRanking of apiPlayerRankings.body.items) {
              playerRankings.push(
                new PlayerRanking(this.api, apiPlayerRanking)
              );
            }

            resolve(playerRankings);
          }
          reject(apiPlayerRankings);
        })
        .catch(reject);
    });
  }
  /**
   * Get clan versus rankings for a specific location
   * @param limit Limit the number of items returned in the response.
   * @param after Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @param before Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @returns {ClanVersusRanking[]}
   */
  fetchClanVersusRankings(
    limit?: number,
    after?: string,
    before?: string
  ): Promise<ClanVersusRanking[]> {
    return new Promise((resolve, reject) => {
      this.api
        .get(
          ENDPOINTS.LOCATION_RANKINGS_CLANVERSUS(
            this.id.toString(),
            limit,
            after,
            before
          )
        )
        .then((apiClanVersusRankings: any) => {
          if (!apiClanVersusRankings.error) {
            const clanVersusRankings = [];
            for (const apiClanVersusRanking of apiClanVersusRankings.body
              .items) {
              clanVersusRankings.push(
                new ClanVersusRanking(this.api, apiClanVersusRanking)
              );
            }

            resolve(clanVersusRankings);
          }
          reject(apiClanVersusRankings);
        })
        .catch(reject);
    });
  }
  /**
   * Get player versus rankings for a specific location
   * @param limit Limit the number of items returned in the response.
   * @param after Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @param before Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @returns {PlayerVersusRanking[]}
   */
  fetchPlayerVersusRankings(
    limit?: number,
    after?: string,
    before?: string
  ): Promise<PlayerVersusRanking[]> {
    return new Promise((resolve, reject) => {
      this.api
        .get(
          ENDPOINTS.LOCATION_RANKINGS_PLAYERVERSUS(
            this.id.toString(),
            limit,
            after,
            before
          )
        )
        .then((apiPlayerVersusRankings: any) => {
          if (!apiPlayerVersusRankings.error) {
            const playerVersusRankings = [];
            for (const apiPlayerVersusRanking of apiPlayerVersusRankings.body
              .items) {
              playerVersusRankings.push(
                new PlayerVersusRanking(this.api, apiPlayerVersusRanking)
              );
            }

            resolve(playerVersusRankings);
          }
          reject(apiPlayerVersusRankings);
        })
        .catch(reject);
    });
  }
}
