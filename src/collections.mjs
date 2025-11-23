import {stringify} from "node:querystring";
import cartesian from "cartesian";
import config from "./config.mjs";
import fetch from "node-fetch";
// Упрощенная версия - только спорт на текущую неделю
export function getQueries() {
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  
  return [{
    city: ['moscow'],
    filter: [],
    url: `https://afisha.yandex.ru/api/events/rubric/sport?city=moscow&period=interval&from=${today.toISOString().split('T')[0]}&to=${nextWeek.toISOString().split('T')[0]}`
  }];
}
