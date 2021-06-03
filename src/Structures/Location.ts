import ClashAPI from "../ClashAPI";
import { APILocation } from "../ClashInterface";

export default class Location {
  private api!: ClashAPI;
  localizedName: string;
  id: number;
  name: string;
  isCountry: boolean;
  countryCode: string;

  constructor(api: ClashAPI, data: APILocation) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.localizedName = data.localizedName;
    this.id = data.id;
    this.name = data.name;
    this.isCountry = data.isCountry;
    this.countryCode = data.countryCode;
  }
}
