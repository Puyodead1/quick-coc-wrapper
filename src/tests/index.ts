import ClashAPI from "../ClashAPI";
import { CC_TOKEN, LT_TOKEN } from "./config";

const api = new ClashAPI(
  process.env.USERDOMAIN === "DESKTOP-B2O53RK" ? LT_TOKEN : CC_TOKEN
);

const CLAN_TAG = "#2LYY8R9RY";
const PLAYER_PROFILE_TAG = "#90GGPGLRV";

(async () => {
  // api.clans
  //   .getClan(CLAN_TAG)
  //   .then((clan) => {
  //     clan
  //       .fetchWarLog()
  //       .then((war) => {
  //         console.log(war);
  //       })
  //       .catch(console.error);
  //   })
  //   .catch(console.error);

  api
    .fetchPlayer(PLAYER_PROFILE_TAG)
    .then((player) => {
      console.log(player);
    })
    .catch(console.error);
})();
