/* eslint-disable require-jsdoc */
export default function techFilter(filter) {
  const newArray = [];
  for (const skill of skillsData) {
    for (let i = 0; i < skill.skill_type.length; i++) {
      //   console.log(skill.skill_type[i] + " is skill " + skill.skill_name);
      if (filter === skill.skill_type[i]) {
        // console.log(skill.skill_name);
        newArray.push(skill);
        break;
      }
    }
  }
  return newArray;
}

import { skillsData } from "../../lib/myskills";
