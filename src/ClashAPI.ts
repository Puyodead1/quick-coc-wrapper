import c from "centra";
import Clans from "./Clans";
import { BASE_URL } from "./Constants";

export default class {
  protected token: string;
  clans: Clans;
  constructor(token: string) {
    this.token = token;
    this.clans = new Clans(this);
  }

  get(endpoint: string) {
    return new Promise((resolve, reject) => {
      const req = c(`${BASE_URL}${endpoint}`, "GET")
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
            reject(await res.json());
          } else {
            reject(await res.text());
          }
        })
        .catch(reject);
    });
  }
}
