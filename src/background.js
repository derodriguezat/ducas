/*
Define an object that contains the number of episodes per season of The Simpsons.
*/
let seasons = { 1: 13, 2: 22, 3: 24, 4: 22, 5: 22, 6: 25, 7: 25, 8: 25, 9: 25, 10: 23, 11: 22, 12: 21, 13: 22, 14: 22, 15: 22, 16: 21, 17: 22, 18: 22, 19: 20, 20: 21, 21: 23, 22: 22, 23: 22, 24: 22, 25: 22, 26: 22, 27: 22, 28: 22, 29: 21, 30: 23, 31: 22, 32: 22, 33: 22, 34: 22 };

/*
Add a listener to the browserAction.onClicked event that loads a random episode of The Simpsons in the current tab.
*/
browser.browserAction.onClicked.addListener(async () => {
    let baseUrl = "https://simpsonizados.me";
    let randomSeason = Math.floor(Math.random() * 34) + 1;
    let randomEpisode = Math.floor(Math.random() * seasons[randomSeason]) + 1;
    let url = `${baseUrl}/capitulo/los-simpson-${randomSeason}x${randomEpisode}`;
    await browser.tabs.update({ url }).catch(error => console.error(error));
});