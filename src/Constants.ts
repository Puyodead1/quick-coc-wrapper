import { ClanSearchOptions } from "./ClashInterface";
export const BASE_URL = "https://api.clashofclans.com/v1";
export const ENDPOINTS = {
  /**
   * Retrieve information about clan's current clan war league group
   * @param clanTag Tag of the clan
   * @returns
   */
  CLAN_CURRENT_WARLEAGUE: (clanTag: string) =>
    `/clans/${clanTag}/currentwar/leaguegroup`,
  /**
   * Retrieve information about individual clan war league war
   * @param warTag Tag of the war
   * @returns
   */
  CLAN_WARLEAGUES_WAR: (warTag: string) => `/clanwarleagues/wars/${warTag}`,
  /**
   * Retrieve clan's clan war log
   * @param clanTag Tag of the clan
   * @returns
   */
  CLAN_WARLOG: (clanTag: string) => `/clans/${clanTag}/warlog`,
  /**
   * Search clans
   * @description Search all clans by name and/or filtering the results using various criteria. At least one filtering criteria must be defined and if name is used as part of search, it is required to be at least three characters long. It is not possible to specify ordering for results so clients should not rely on any specific ordering as that may change in the future releases of the API.
   */
  CLANS: ({
    name,
    warFrequency,
    locationId,
    minMembers,
    maxMembers,
    minClanPoints,
    minClanLevel,
    limit,
    after,
    before,
    labelIds,
  }: ClanSearchOptions) => {
    if (
      !name &&
      !warFrequency &&
      !locationId &&
      !minMembers &&
      !maxMembers &&
      !minClanPoints &&
      !minClanLevel &&
      !limit &&
      !after &&
      !before &&
      !labelIds
    ) {
      throw new Error("At least one search paramter is required");
    }
    const url = new URL("/clans", BASE_URL);
    if (name) url.searchParams.append("name", name);

    if (warFrequency) url.searchParams.append("warFrequency", warFrequency);

    if (locationId)
      url.searchParams.append("locationId", locationId.toString());

    if (minMembers)
      url.searchParams.append("minMembers", minMembers.toString());

    if (maxMembers)
      url.searchParams.append("maxMembers", maxMembers.toString());

    if (minClanPoints)
      url.searchParams.append("minClanPoints", minClanPoints.toString());

    if (minClanLevel)
      url.searchParams.append("minClanLevel", minClanLevel.toString());

    if (limit) url.searchParams.append("limit", limit.toString());

    if (after) url.searchParams.append("after", after);

    if (before) url.searchParams.append("before", before);

    if (labelIds) url.searchParams.append("labelIds", labelIds);

    return `/clans${url.search}`;
  },
  CLAN_CURRENT_WAR: (clanTag: string) => `/clans/${clanTag}/currentwar`,
  /**
   *
   * @param clanTag Tag of the clan
   * @returns string
   */
  CLAN: (clanTag: string) => `/clans/${clanTag}`,
  /**
   * List clan members
   * @param clanTag Tag of the clan
   * @returns string
   */
  CLAN_MEMBERS: (clanTag: string) => `/clans/${clanTag}/members`,
  /**
   * Get information about a single player by player tag. Player tags can be found either in game or by from clan member lists.
   * @param playerTag Tag of the player
   * @returns string
   */
  PLAYER: (playerTag: string) => `/players/${playerTag}`,
  /**
   * Verify player API token that can be found from the game settings. This API call can be used to check that players own the game accounts they claim to own as they need to provide the one-time use API token that exists inside the game.
   * @param playerTag Tag of the player
   * @returns string
   */
  PLAYER_VERIFYTOKEN: (playerTag: string) =>
    `/players/${playerTag}/verifytoken`,
};
