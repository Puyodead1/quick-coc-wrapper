import { ClashAPI } from "../ClashAPI";
import { APILanguage } from "../ClashInterface";

export class Language {
  private api!: ClashAPI;
  name: string;
  id: number;
  languageCode: string;

  /**
   * Creates a new Language instance
   * @param api Reference to ClashAPI instance
   * @param data APILanguage data
   */
  constructor(api: ClashAPI, data: APILanguage) {
    Object.defineProperty(this, "api", {
      enumerable: false,
      writable: false,
      value: api,
    });

    this.name = data.name;
    this.id = data.id;
    this.languageCode = data.languageCode;
  }
}
