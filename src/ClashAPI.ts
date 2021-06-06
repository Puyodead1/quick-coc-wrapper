import c from "centra";
import Clans from "./Clans";
import { BASE_URL, ENDPOINTS } from "./Constants";
import League from "./Structures/League";
import Location from "./Structures/Location";
import Player from "./Structures/Player";
import WarLeague from "./Structures/WarLeague";
import GoldPassSeason from "./Structures/GoldPassSeason";

export default class {
  protected token: string;
  clans: Clans;
  constructor(token: string) {
    this.token = token;
    this.clans = new Clans(this);
  }

  /**
   * internal method
   * @param endpoint endpoint
   * @returns
   */
  get(endpoint: string) {
    return new Promise((resolve, reject) => {
      const req = c(`${BASE_URL}${endpoint}`.replace("#", "%23"), "GET")
        .header("Accept", "application/json")
        .header("Authorization", `Bearer ${this.token}`)
        .send();
      req
        .then(async (res) => {
          if (res.statusCode === 200) {
            try {
              resolve({
                error: false,
                body: await res.json(),
              });
            } catch {
              resolve({
                error: false,
                body: await res.text(),
              });
            }
          } else {
            // non-200 status, could include anything from 3xx to 5xx
            try {
              reject({
                error: true,
                code: res.statusCode,
                body: await res.json(),
              });
            } catch {
              reject({
                error: true,
                code: res.statusCode,
                body: await res.text(),
              });
            }
          }
        })
        .catch(reject);
    });
  }

  /**
   * internal method
   * @param endpoint endpoint
   * @param data body data
   * @param sendAs contentType (defaults to json)
   * @returns
   */
  post(
    endpoint: string,
    data: any,
    sendAs: "json" | "buffer" | "form" = "json"
  ) {
    return new Promise((resolve, reject) => {
      const req = c(`${BASE_URL}${endpoint}`.replace("#", "%23"), "POST")
        .header("Accept", "application/json")
        .header("Authorization", `Bearer ${this.token}`)
        .body(data, sendAs)
        .send();
      req
        .then(async (res) => {
          if (res.statusCode === 200) {
            try {
              resolve({
                error: false,
                body: await res.json(),
              });
            } catch {
              resolve({
                error: false,
                body: await res.text(),
              });
            }
          } else {
            // non-200 status, could include anything from 3xx to 5xx
            try {
              reject({
                error: true,
                code: res.statusCode,
                body: await res.json(),
              });
            } catch {
              reject({
                error: true,
                code: res.statusCode,
                body: await res.text(),
              });
            }
          }
        })
        .catch(reject);
    });
  }

  /**
   * Get information about a single player by player tag. Player tags can be found either in game or by from clan member lists.
   * @param playerTag
   * @returns
   */
  fetchPlayer(playerTag: string): Promise<Player> {
    return new Promise((resolve, reject) => {
      this.get(ENDPOINTS.PLAYER(playerTag))
        .then((apiPlayer: any) => {
          if (!apiPlayer.error) resolve(new Player(this, apiPlayer.body));

          reject(apiPlayer);
        })
        .catch(reject);
    });
  }

  /**
   * List leagues
   * @param limit Limit the number of items returned in the response.
   * @param after Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @param before Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @returns {League[]}
   */
  fetchLeagues(
    limit?: number,
    after?: string,
    before?: string
  ): Promise<League[]> {
    return new Promise((resolve, reject) => {
      this.get(ENDPOINTS.LEAGUES(limit, after, before))
        .then((apiLeagueList: any) => {
          if (!apiLeagueList.error) {
            const leagues = [];
            for (const apiLeague of apiLeagueList.body.items) {
              leagues.push(new League(this, apiLeague));
            }
            resolve(leagues);
          }
          reject(apiLeagueList);
        })
        .catch(reject);
    });
  }

  /**
   * Get league information
   * @param leagueId Identifier of the league
   * @returns {League}
   */
  fetchLeague(leagueId: number): Promise<League> {
    return new Promise((resolve, reject) => {
      this.get(ENDPOINTS.LEAGUE(leagueId.toString()))
        .then((apiLeague: any) => {
          if (!apiLeague.error) resolve(new League(this, apiLeague));

          reject(apiLeague);
        })
        .catch(reject);
    });
  }

  /**
   * List war leagues
   * @param limit Limit the number of items returned in the response.
   * @param after Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @param before Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @returns {WarLeague[]}
   */
  fetchWarLeagues(
    limit?: number,
    after?: string,
    before?: string
  ): Promise<WarLeague[]> {
    return new Promise((resolve, reject) => {
      this.get(ENDPOINTS.WARLEAGUES(limit, after, before))
        .then((apiWarLeagues: any) => {
          if (!apiWarLeagues.error) {
            const warLeagues = [];
            for (const apiWarLeague of apiWarLeagues.body.items) {
              warLeagues.push(new WarLeague(this, apiWarLeague));
            }

            resolve(warLeagues);
          }
          reject(apiWarLeagues);
        })
        .catch(reject);
    });
  }

  /**
   * Get war league information
   * @param leagueId Identifier of the league
   * @returns {League}
   */
  fetchWarLeague(leagueId: number): Promise<WarLeague> {
    return new Promise((resolve, reject) => {
      this.get(ENDPOINTS.WARLEAGUE(leagueId.toString()))
        .then((apiWarLeague: any) => {
          if (!apiWarLeague.error)
            resolve(new WarLeague(this, apiWarLeague.body));
          reject(apiWarLeague);
        })
        .catch(reject);
    });
  }

  /**
   * List locations
   * @param limit Limit the number of items returned in the response.
   * @param after Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @param before Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @returns {Location[]}
   */
  fetchLocations(
    limit?: number,
    after?: string,
    before?: string
  ): Promise<Location[]> {
    return new Promise((resolve, reject) => {
      this.get(ENDPOINTS.LOCATIONS(limit, after, before))
        .then((apiLocations: any) => {
          if (!apiLocations.error) {
            const locations = [];
            for (const apiLocation of apiLocations.body.items) {
              locations.push(new Location(this, apiLocation));
            }
            resolve(locations);
          }
          reject(apiLocations);
        })
        .catch(reject);
    });
  }

  /**
   * Get information about specific location
   * @param locationId Identifier of the location to retrieve.
   * @returns {Location}
   */
  fetchLocation(locationId: number): Promise<Location> {
    return new Promise((resolve, reject) => {
      this.get(ENDPOINTS.LOCATION(locationId.toString()))
        .then((apiLocation: any) => {
          if (!apiLocation.error) resolve(new Location(this, apiLocation.body));
          reject(apiLocation);
        })
        .catch(reject);
    });
  }

  /**
   * Get information about the current gold pass season.
   * @returns {GoldPassSeason}
   */
  fetchCurrentGoldPassSeason(): Promise<GoldPassSeason> {
    return new Promise((resolve, reject) => {
      this.get(ENDPOINTS.GOLDPASS_CURRENT_SEASON)
        .then((apiGoldPassSeason: any) => {
          if (!apiGoldPassSeason.error)
            resolve(new GoldPassSeason(this, apiGoldPassSeason.body));
          reject(apiGoldPassSeason);
        })
        .catch(reject);
    });
  }
}
