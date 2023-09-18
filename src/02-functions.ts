import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

// Make function called allOlder that takes an array of friend objects and increments their age by 1 and returns the new age as an array of strings
function allOlder(friends: Friend[]) : string[] {
    return friends.map(older)
}

console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  // Make a function called addColleague that takes a colleague object and adds it to the current colleagues array and setting their extension number to the highest extension number + 1
    function addColleague(c: Colleague[], name: string, department: string, email: string) {
        const newColleague = {
            name: name,
            department: department,
            contact: {
                email: email,
                extension: highestExtension(c).contact.extension + 1
            }
        }
        c.push(newColleague)
    }
    
    addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));