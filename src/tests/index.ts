import ClashAPI from "../ClashAPI";
import { token } from "./config.json";

const api = new ClashAPI(token);

(async () => {
  api.clans
    .getClan("#2LYY8R9RY")
    .then((clan) => {
      clan
        .fetchCurrentWarLeagueGroup()
        .then((war) => {
          console.log(war);
        })
        .catch(console.error);
    })
    .catch(console.error);
})();
