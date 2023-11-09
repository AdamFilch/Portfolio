/* eslint-disable valid-jsdoc */
/**
 * Function: Decide colors for the technologies
 * Input: skill type array
 * OUtput: color in #
 */
export default function colorDecider(type) {
  for (const filterItem of filter) {
    if (type[0] == filterItem.type) {
      return filterItem.color;
    }
  }
}

import { filter } from "../../lib/myskills.js";
