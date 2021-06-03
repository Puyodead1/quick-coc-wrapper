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
  localizedName: string;
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

export interface APIClanWar {
  clan: APIWarClan;
  teamSize: number;
  opponent: APIWarClan;
  startTime: string;
  state: string;
  endTime: string;
  preparationStartTime: string;
}
