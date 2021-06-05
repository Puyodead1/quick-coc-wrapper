import c from "centra";
import Clans from "./Clans";
import { BASE_URL, ENDPOINTS } from "./Constants";
import Player from "./Structures/Player";

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
}
