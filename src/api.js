const BASE_URL = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=20`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=20`;

export const popularGamesUrl = () => `${BASE_URL}${popular_games}`;

export const upcomingGamesUrl = () => `${BASE_URL}${upcoming_games}`;

export const newGamesUrl = () => `${BASE_URL}${new_games}`;

export const gameDetailsURL = (game_id) => `${BASE_URL}games/${game_id}`;

export const gameScreenshotURL = (game_id) =>
  `${BASE_URL}games/${game_id}/screenshots`;

export const searchGamesURL = (game_name) =>
  `${BASE_URL}games?search=${game_name}&page_size=20`;
