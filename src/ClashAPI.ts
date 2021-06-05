import c from "centra";
import Clans from "./Clans";
import { BASE_URL, ENDPOINTS } from "./Constants";
import League from "./Structures/League";
import Player from "./Structures/Player";
import WarLeague from "./Structures/WarLeague";

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
            resolve(await res.json());
          } else if (
            res.statusCode === 400 ||
            res.statusCode === 403 ||
            res.statusCode == 404 ||
            res.statusCode === 429 ||
            res.statusCode === 500 ||
            res.statusCode === 503
          ) {
            reject({
              error: true,
              code: res.statusCode,
              message: await res.json(),
            });
          } else {
            reject({
              error: true,
              code: res.statusCode,
              message: await res.text(),
            });
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
            resolve(await res.json());
          } else if (
            res.statusCode === 400 ||
            res.statusCode === 403 ||
            res.statusCode == 404 ||
            res.statusCode === 429 ||
            res.statusCode === 500 ||
            res.statusCode === 503
          ) {
            reject({
              error: true,
              code: res.statusCode,
              message: await res.json(),
            });
          } else {
            reject({
              error: true,
              code: res.statusCode,
              message: await res.text(),
            });
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
          resolve(new Player(this, apiPlayer));
        })
        .catch(reject);
    });
  }

  /**
   * List leagues
   * @param limit
   * @param after
   * @param before
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
          const leagues = [];
          for (const apiLeague of apiLeagueList.items) {
            leagues.push(new League(this, apiLeague));
          }
          resolve(leagues);
        })
        .catch(reject);
    });
  }

  /**
   * Get league information
   * @param leagueId Identifier of the league
   * @returns {League}
   */
  fetchLeague(leagueId: string): Promise<League> {
    return new Promise((resolve, reject) => {
      this.get(ENDPOINTS.LEAGUE(leagueId))
        .then((apiLeague: any) => {
          resolve(new League(this, apiLeague));
        })
        .catch(reject);
    });
  }

  /**
   * List war leagues
   * @param limit
   * @param after
   * @param before
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
          const warLeagues = [];
          for (const apiWarLeague of apiWarLeagues.items) {
            warLeagues.push(new WarLeague(this, apiWarLeague));
          }

          resolve(warLeagues);
        })
        .catch(reject);
    });
  }

  /**
   * Get war league information
   * @param leagueId Identifier of the league
   * @returns {League}
   */
  fetchWarLeague(leagueId: string): Promise<WarLeague> {
    return new Promise((resolve, reject) => {
      this.get(ENDPOINTS.WARLEAGUE(leagueId))
        .then((apiWarLeague: any) => {
          resolve(new WarLeague(this, apiWarLeague));
        })
        .catch(reject);
    });
  }
}
