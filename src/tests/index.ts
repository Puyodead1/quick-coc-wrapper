import ClashAPI from "../ClashAPI";
import { CC_TOKEN, LT_TOKEN, BB_TOKEN } from "./config";

const api = new ClashAPI(
  process.env.USERDOMAIN === "DESKTOP-B2O53RK" ? BB_TOKEN : CC_TOKEN
);

const CLAN_TAG = "#2LYY8R9RY";
const PLAYER_PROFILE_TAG = "#90GGPGLRV";

(async () => {
  // console.log("============== Leagues List ==============\n");
  // api
  //   .fetchLeagues()
  //   .then((leagues) => {
  //     console.log(leagues);
  //     console.log("============== League ==============\n");
  //     const league = leagues.find((x) => x.name === "Legend League");
  //     console.log(league);
  //     console.log("============== League Seasons ==============\n");
  //     league!
  //       .fetchSeasons()
  //       .then((seasons) => {
  //         console.log(seasons);
  //       })
  //       .catch(console.error);
  //   })
  //   .catch(console.error);

  api
    .fetchWarLeagues()
    .then((warLeagues) => {
      const league = warLeagues[Math.floor(Math.random() * warLeagues.length)];
      api
        .fetchWarLeague(league.id.toString())
        .then((warLeague) => {
          console.log(warLeague);
        })
        .catch(console.error);
    })
    .catch(console.error);
})();
