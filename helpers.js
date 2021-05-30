module.exports = {
  getPage: async (browser, url) => {
    const page = await browser.newPage();
    await page.goto(url);
    return page;
  },
};
