import { ClashAPI } from "../ClashAPI";
import { APIClanWarMember } from "../ClashInterface";
import { ClanWarAttack } from "./ClanWarAttack";

export class ClanWarMember {
  private api!: ClashAPI;
  tag: string;
  name: string;
  mapPosition: number;
  townhallLevel: number;
  opponentAttacks: number;
  bestOpponentAttack?: ClanWarAttack;
  attacks: ClanWarAttack[] = [];

  constructor(api: ClashAPI, data: APIClanWarMember) {
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
    if (data.bestOpponentAttack) {
      this.bestOpponentAttack = new ClanWarAttack(
        this.api,
        data.bestOpponentAttack
      );
    }
    if (data.attacks) {
      for (const attack of data.attacks) {
        this.attacks.push(new ClanWarAttack(this.api, attack));
      }
    }
  }
}
