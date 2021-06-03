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

export interface APIClanMember {
  league: {
    name: unknown;
    id: number;
    iconUrls: {
      small: string;
      tiny: string;
      medium: string;
    };
  };
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

export interface APIClanLabel {
  name: string;
  id: number;
  iconUrls: {
    small: string;
    medium: string;
  };
}

export interface APIClanLocation {
  localizedName: string;
  id: number;
  name: string;
  isCountry: boolean;
  countryCode: string;
}

export interface APIClan {
  warLeague: {
    name: string;
    id: number;
  };
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
  chatLanguage?: {
    name: string;
    id: number;
    languageCode: string;
  };
  warFrequency: string;
  clanLevel: number;
  labels: APIClanLabel[];
  name: string;
  location?: APIClanLocation;
  type: string;
  members: number;
  description?: string;
  badgeUrls: {
    small: string;
    large: string;
    medium: string;
  };
}

export interface APIClanWarLogClanMemberBestOpponentAttack {
  order: number;
  attackerTag: string;
  defenderTag: string;
  stars: number;
  destructionPercentage: number;
  duration: number;
}

export interface APIClanWarLogClanMemberAttack {
  order: number;
  attackerTag: string;
  defenderTag: string;
  stars: number;
  destructionPercentage: number;
  duration: number;
}

export interface APIClanWarLogClanMember {
  tag: string;
  name: string;
  mapPosition: number;
  townhallLevel: number;
  opponentAttacks: number;
  bestOpponentAttack: APIClanWarLogClanMemberBestOpponentAttack;
  attacks: APIClanWarLogClanMemberAttack[];
}

export interface APIClanWarLogClan {
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
  members: APIClanWarLogClanMember[];
}

export interface APIClanWarLog {
  clan: APIClanWarLogClan;
  teamSize: number;
  opponent: APIClanWarLogClan;
  endTime: string;
  result: "win" | "loose";
}
