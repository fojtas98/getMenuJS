const puppeteer = require("puppeteer");
const uCapa = require("./uCapa");

const getMenu = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const today = new Date().getUTCDay();
  uCapa(page, today);
};

getMenu();
