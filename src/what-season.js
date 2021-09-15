import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  const seasons = new Map([
    [12, 'winter'],
    [1, 'winter'],
    [2, 'winter'],
    [3, 'spring'],
    [4, 'spring'],
    [5, 'spring'],
    [6, 'summer'],
    [7, 'summer'],
    [8, 'summer'],
    [9, 'autumn'],
    [10, 'autumn'],
    [11, 'autumn']
  ]);

  if (!date) return 'Unable to determine the time of year!'; //date проверяет , не был ли параметр а falsy значение ( undefined, null, 0, ""и т.д ..)
  if (Object.prototype.toString.call(date) != '[object Date]' || Object.keys(date).length > 0) {
    throw new Error('Invalid date!');
  }

  let datenew = new Date(date);
  let month = datenew.getMonth() + 1;
  return seasons.get(month);
}

