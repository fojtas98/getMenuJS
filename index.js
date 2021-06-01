// const puppeteer = require("puppeteer");
const suzies = require("./suzies");
const uCapa = require("./uCapa");
const veroniCaffee = require("./veroniCaffee");

const getMenu = async () => {
  const today = new Date().getUTCDay();

  await Promise.all([uCapa(today), veroniCaffee(), suzies(today)]).catch(
    (err) => {
      console.log("upps, nekde se stala chyba: ", err);
    }
  );
};

getMenu();
