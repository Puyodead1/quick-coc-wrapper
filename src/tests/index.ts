import ClashAPI from "../ClashAPI";
import { token } from "./config.json";

const api = new ClashAPI(token);

const CLAN_TAG = "#2LYY8R9RY";
const PROFILE_TAG = "#90GGPGLRV";

(async () => {
  api.clans
    .getClan(CLAN_TAG)
    .then((clan) => {
      clan
        .fetchWarLog()
        .then((war) => {
          console.log(war);
        })
        .catch(console.error);
    })
    .catch(console.error);
})();
