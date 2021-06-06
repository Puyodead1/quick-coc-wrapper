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
  /**
   * List leagues
   */
  LEAGUES: (limit?: number, after?: string, before?: string) => {
    const url = new URL("/clans", BASE_URL);
    if (limit) url.searchParams.append("limit", limit.toString());
    if (after) url.searchParams.append("after", after);
    if (before) url.searchParams.append("before", before);
    return `/leagues${url.search}`;
  },
  /**
   * Get league information
   * @param leagueId Identifier of the league
   * @returns string
   */
  LEAGUE: (leagueId: string) => `/leagues/${leagueId}`,
  /**
   * Get league seasons. Note that league season information is available only for Legend League.
   * @param leagueId Identifier of the league
   * @param limit Limit the number of items returned in the response.
   * @param after Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @param before Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @returns string
   */
  LEAGUE_SEASONS: (
    leagueId: string,
    limit?: number,
    after?: string,
    before?: string
  ) => {
    const url = new URL(`/leagues/${leagueId}/seasons`, BASE_URL);
    if (limit) url.searchParams.append("limit", limit.toString());
    if (after) url.searchParams.append("after", after);
    if (before) url.searchParams.append("before", before);
    return `/leagues${url.search}`;
  },
  /**
   * Get league season rankings. Note that league season information is available only for Legend League.
   * @param leagueId Identifier of the league.
   * @param seasonId Identifier of the season.
   * @returns string
   */
  LEAGUE_SEASON: (leagueId: string, seasonId: string) =>
    `/leagues/${leagueId}/seasons/${seasonId}`,
  /**
   * List war leagues
   * @param limit Limit the number of items returned in the response.
   * @param after Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @param before Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @returns string
   */
  WARLEAGUES: (limit?: number, after?: string, before?: string) => {
    const url = new URL(`/warleagues`, BASE_URL);
    if (limit) url.searchParams.append("limit", limit.toString());
    if (after) url.searchParams.append("after", after);
    if (before) url.searchParams.append("before", before);
    return `/warleagues${url.search}`;
  },
  /**
   * Get war league information
   * @param leagueId Identifier of the league
   * @returns string
   */
  WARLEAGUE: (leagueId: string) => `/warleagues/${leagueId}`,
  /**
   * Get information about specific location
   * @param limit Limit the number of items returned in the response.
   * @param after Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @param before Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @returns string
   */
  LOCATIONS: (limit?: number, after?: string, before?: string) => {
    const url = new URL(`/locations`, BASE_URL);
    if (limit) url.searchParams.append("limit", limit.toString());
    if (after) url.searchParams.append("after", after);
    if (before) url.searchParams.append("before", before);
    return `/locations${url.search}`;
  },
  /**
   * Get information about specific location
   * @param locationId Identifier of the location to retrieve.
   * @returns string
   */
  LOCATION: (locationId: string) => `/locations/${locationId}`,
  /**
   * Get clan rankings for a specific location
   * @param locationId Identifier of the location to retrieve.
   * @param limit Limit the number of items returned in the response.
   * @param after Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @param before Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @returns
   */
  LOCATION_RANKINGS_CLANS: (
    locationId: string,
    limit?: number,
    after?: string,
    before?: string
  ) => {
    const url = new URL(`/locations/${locationId}/rankings/clans`, BASE_URL);
    if (limit) url.searchParams.append("limit", limit.toString());
    if (after) url.searchParams.append("after", after);
    if (before) url.searchParams.append("before", before);
    return `/locations/${locationId}/rankings/clans${url.search}`;
  },
  /**
   * Get player rankings for a specific location
   * @param locationId Identifier of the location to retrieve.
   * @param limit Limit the number of items returned in the response.
   * @param after Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @param before Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @returns
   */
  LOCATION_RANKINGS_PLAYERS: (
    locationId: string,
    limit?: number,
    after?: string,
    before?: string
  ) => {
    const url = new URL(`/locations/${locationId}/rankings/players`, BASE_URL);
    if (limit) url.searchParams.append("limit", limit.toString());
    if (after) url.searchParams.append("after", after);
    if (before) url.searchParams.append("before", before);
    return `/locations/${locationId}/rankings/players${url.search}`;
  },
  /**
   * Get clan versus rankings for a specific location
   * @param locationId Identifier of the location to retrieve.
   * @param limit Limit the number of items returned in the response.
   * @param after Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @param before Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @returns
   */
  LOCATION_RANKINGS_CLANVERSUS: (
    locationId: string,
    limit?: number,
    after?: string,
    before?: string
  ) => {
    const url = new URL(
      `/locations/${locationId}/rankings/clans-versus`,
      BASE_URL
    );
    if (limit) url.searchParams.append("limit", limit.toString());
    if (after) url.searchParams.append("after", after);
    if (before) url.searchParams.append("before", before);
    return `/locations/${locationId}/rankings/clans-versus${url.search}`;
  },
  /**
   * Get player versus rankings for a specific location
   * @param locationId Identifier of the location to retrieve.
   * @param limit Limit the number of items returned in the response.
   * @param after Return only items that occur after this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @param before Return only items that occur before this marker. Before marker can be found from the response, inside the 'paging' property. Note that only after or before can be specified for a request, not both.
   * @returns
   */
  LOCATION_RANKINGS_PLAYERVERSUS: (
    locationId: string,
    limit?: number,
    after?: string,
    before?: string
  ) => {
    const url = new URL(
      `/locations/${locationId}/rankings/players-versus`,
      BASE_URL
    );
    if (limit) url.searchParams.append("limit", limit.toString());
    if (after) url.searchParams.append("after", after);
    if (before) url.searchParams.append("before", before);
    return `/locations/${locationId}/rankings/players-versus${url.search}`;
  },
  /**
   * Get information about the current gold pass season.
   */
  GOLDPASS_CURRENT_SEASON: `/goldpass/seasons/current`,
};
