export interface ClanSearchOptions {
  name?: string;
  warFrequency?: string;
  locationId?: number;
  minMembers?: number;
  maxMembers?: number;
  minClanPoints?: number;
  minClanLevel?: number;
  limit?: number;
  after?: string;
  before?: string;
  labelIds?: string;
}

export interface ErrorResponse {
  reason: string;
  message: string;
  type: string;
  detail: unknown;
}

export interface APILeague {
  name: string;
  id: number;
  iconUrls: {
    small: string;
    tiny: string;
    medium: string;
  };
}

export interface APIClanMember {
  league: APILeague;
  tag: string;
  name: string;
  role: string;
  expLevel: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
  trophies: number;
  versusTrophies: number;
}

export interface APILabel {
  name: string;
  id: number;
  iconUrls: {
    small: string;
    medium: string;
  };
}

export interface APILocation {
  localizedName?: string;
  id: number;
  name: string;
  isCountry: boolean;
  countryCode: string;
}

export interface APIWarLeague {
  name: string;
  id: number;
}

export interface APILanguage {
  name: string;
  id: number;
  languageCode: string;
}

export interface APIClan {
  warLeague?: APIWarLeague;
  memberList?: APIClanMember[];
  tag: string;
  clanVersusPoints: number;
  requiredTrophies: number;
  requiredVersusTrophies: number;
  requiredTownhallLevel: number;
  isWarLogPublic: boolean;
  warWinStreak: number;
  warWins: number;
  warTies?: number;
  warLosses?: number;
  clanPoints: number;
  chatLanguage?: APILanguage;
  warFrequency: string;
  clanLevel: number;
  labels: APILabel[];
  name: string;
  location?: APILocation;
  type: string;
  members: number;
  description?: string;
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
}

export interface APIClanWarAttack {
  order: number;
  attackerTag: string;
  defenderTag: string;
  stars: number;
  destructionPercentage: number;
  duration: number;
}

export interface APIClanWarMember {
  tag: string;
  name: string;
  mapPosition: number;
  townhallLevel: number;
  opponentAttacks: number;
  bestOpponentAttack: APIClanWarAttack;
  attacks: APIClanWarAttack[];
}

export interface APIWarClan {
  destructionPercentage: number;
  tag: string;
  name: string;
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
  clanLevel: number;
  attacks?: number;
  stars: number;
  expEarned?: number;
  members: APIClanWarMember[];
}

export interface APIClanWarLogEntry {
  clan: APIWarClan;
  teamSize: number;
  opponent: APIWarClan;
  endTime: string;
  result: string;
}

export interface APIClanWarLeagueRound {
  warTags: string[];
}

export interface APIClanWar {
  clan: APIWarClan;
  teamSize?: number;
  opponent: APIWarClan;
  startTime?: string;
  state: string;
  endTime?: string;
  preparationStartTime?: string;
}

export interface APIClanWarLeagueClanMember {
  tag: string;
  townHallLeveL: number;
  name: string;
}

export interface APIClanWarLeagueClan {
  tag: string;
  clanLevel: number;
  name: string;
  members: APIClanWarLeagueClanMember[];
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
}

export interface APIClanWarLeagueGroup {
  tag?: string;
  state: string;
  season: string;
  clans: APIClanWarLeagueClan[];
  rounds: APIClanWarLeagueRound[];
}

export interface APIPlayerClan {
  tag: string;
  clanLevel: number;
  name: string;
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
}

export interface APILegendLeagueTorunamentSeasonResult {
  trophies: number;
  id: string;
  rank: number;
}

export interface APIPlayerLegendStatistics {
  previousVersusSeason: APILegendLeagueTorunamentSeasonResult;
  bestVersusSeason: APILegendLeagueTorunamentSeasonResult;
  legendTrophies: number;
  currentSeason: APILegendLeagueTorunamentSeasonResult;
  previousSeason: APILegendLeagueTorunamentSeasonResult;
  bestSeason: APILegendLeagueTorunamentSeasonResult;
}

export interface APIPlayerItemLevel {
  level: number;
  name: unknown;
  maxLevel: number;
  village: string;
  superTroopIsActive?: boolean;
}

export interface APIPlayerAchievementProgress {
  stars: number;
  value: number;
  name: string;
  target: number;
  info: string;
  completionInfo: unknown | null;
  village: string;
}

export interface APIPlayer {
  league: APILeague;
  clan: APIPlayerClan;
  role: string;
  attackWins: number;
  defenseWins: number;
  townHallLevel: number;
  townHallWeaponLevel: number;
  versusBattleWins: number;
  legendStatistics: APIPlayerLegendStatistics;
  troops: APIPlayerItemLevel[];
  heroes: APIPlayerItemLevel[];
  spells: APIPlayerItemLevel[];
  labels: APILabel[];
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  donations: number;
  donationsReceived: number;
  builderHallLevel: number;
  versusTrophies: number;
  bestVersusTrophies: number;
  warStars: number;
  achievements: APIPlayerAchievementProgress[];
  versusBattleWinCount: number;
}

export interface APIPlayerVerifyTokenResponse {
  tag: string;
  token: string;
  status: string;
}

export interface APILeagueSeason {
  id: string;
}

export interface APIClanRanking {
  clanLevel: number;
  clanPoints: number;
  location: APILocation;
  members: number;
  tag: string;
  name: string;
  rank: number;
  previousRank: number;
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
}

export interface APIPlayerRankingClan {
  tag: string;
  name: string;
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
}

export interface APIPlayerRanking {
  league: APILeague;
  clan: APIPlayerRankingClan;
  attackWins: number;
  defenseWins: number;
  tag: string;
  name: string;
  expLevel: number;
  rank: number;
  previousRank: number;
  trophies: number;
}

export interface APIClanVersusRanking {
  tag: string;
  name: string;
  location: APILocation;
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
  clanLevel: number;
  members: number;
  rank: number;
  previousRank: number;
  clanVersusPoints: number;
}

export interface APIPlayerVersusRanking {
  clan: APIPlayerRankingClan;
  versusBattleWins: number;
  tag: string;
  name: string;
  expLevel: number;
  rank: number;
  previousRank: number;
  versusTrophies: number;
}

export interface APIGoldPassSeason {
  startTime: string;
  endTime: string;
}
