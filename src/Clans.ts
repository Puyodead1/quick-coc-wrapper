import { ClanSearchOptions } from "./ClashInterface";
import ClashAPI from "./ClashAPI";
import { ENDPOINTS } from "./Constants";
import Clan from "./Structures/Clan";

export default class {
  private api!: ClashAPI;
  constructor(api: ClashAPI) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: true,
      value: api,
    });
  }

  /**
   * Search clans
   * @description Search all clans by name and/or filtering the results using various criteria. At least one filtering criteria must be defined and if name is used as part of search, it is required to be at least three characters long. It is not possible to specify ordering for results so clients should not rely on any specific ordering as that may change in the future releases of the API.
   * @param searchOptions clan search options, at least one option is required
   * @returns {Clan[]}
   */
  clans(searchOptions: ClanSearchOptions): Promise<Clan[]> {
    return new Promise((resolve, reject) => {
      this.api
        .get(ENDPOINTS.CLANS(searchOptions))
        .then((apiClans: any) => {
          const clans: Clan[] = [];
          for (const clan of apiClans.items) {
            clans.push(new Clan(this.api, clan));
          }

          resolve(clans);
        })
        .catch(reject);
    });
  }

  /**
   * Get clan information
   * @param clanTag Tag of the clan
   * @returns {Clan}
   */
  clan(clanTag: string): Promise<Clan> {
    return new Promise((resolve, reject) => {
      this.api
        .get(ENDPOINTS.CLAN(clanTag))
        .then((apiClan: any) => resolve(new Clan(this.api, apiClan)))
        .catch(reject);
    });
  }
}
