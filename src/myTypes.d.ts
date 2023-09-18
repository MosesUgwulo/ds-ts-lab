export interface Friend {
    name: string;
    phone: string;
    dob? : Date;   // New
    age: number;
    interests? : string[]   // New
}

export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}

export interface EmailContact {
    name: string;
    email: string
}

export type Department = "Engineering" | "Finance" | "HR";
export interface ColleagueV2 {
  name: string;
  department: Department;    // *****
  contact: {
    email: string;
    extension: number;
    slack?: string;
  };
}

export type Buddy = Friend | ColleagueV2;
export type Administrator = Buddy | string | undefined

export type BuddyList = {
  name: string;
  administrator: Administrator;
  members: Buddy[];
};

export type FriendPartial = Partial<Friend>
// Type for gaining access to an event, e.g. concert
export type EventPass = Omit<Colleague, "contact"> & {
  passCode : number;
}
// Make person's properties immutable.
export type SecureFriendContact = Readonly<Pick<Friend,"name" | "phone" > > 

function generateEventPass(colleague: Colleague): EventPass {
  const passCode = Math.round(Math.random() * (1000 - 1) + 1);
  return {
    name: colleague.name,
    department: colleague.department,
    passCode: passCode,
  };
}
console.log(generateEventPass(colleagues.current[0]));

//The incomplete function below finds the intersection of a friends array and a colleagues array, based on matching the name property. It returns an array of objects with a mix of properties from the Friend and Colleagues types, as follows:
function intersection(
  friends: Friend[],
  colleagues: Colleague[]
): (Friend | Colleague)[] {
  let result = [];
  friends.reduce((res, friend) => {
    const colleague = colleagues.find((col) => col.name === friend.name);
    if (colleague) {
      // Colleague is also a Friend
      res.push({ ...friend, ...colleague });
    } else {
      // Colleague is not a Friend
      res.push(friend);
    }
    return res;
  }, result);
  return result;
}

console.log(intersection(friends, colleagues.current));