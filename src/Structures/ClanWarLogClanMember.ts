import ClashAPI from "../ClashAPI";
import {
  APIClanWarLogClanMember,
  APIClanWarLogClanMemberAttack,
  APIClanWarLogClanMemberBestOpponentAttack,
} from "../ClashInterface";

export default class ClanWarLogClanMember {
  private api!: ClashAPI;
  tag: string;
  name: string;
  mapPosition: number;
  townhallLevel: number;
  opponentAttacks: number;
  bestOpponentAttack: APIClanWarLogClanMemberBestOpponentAttack;
  attacks: APIClanWarLogClanMemberAttack[];

  constructor(api: ClashAPI, data: APIClanWarLogClanMember) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.tag = data.tag;
    this.name = data.name;
    this.mapPosition = data.mapPosition;
    this.townhallLevel = data.townhallLevel;
    this.opponentAttacks = data.opponentAttacks;
    this.bestOpponentAttack = data.bestOpponentAttack;
    this.attacks = data.attacks;
  }
}
