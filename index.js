const puppeteer = require("puppeteer");
const suzies = require("./suzies");
const uCapa = require("./uCapa");
const veroniCaffee = require("./veroniCaffee");

const getMenu = async () => {
  const browser = await puppeteer.launch();
  const today = new Date().getUTCDay();
  await Promise.all([
    uCapa(browser, today),
    veroniCaffee(browser),
    suzies(browser, today),
  ]).catch((err) => {
    console.log("upps, nekde se stala chyba: ", err);
  });
  browser.close();
};

getMenu();
