let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];

// ETAPE 1
function countActiveUsers(users) {
    let totalUsers = 0;
    for (user of users) {
        if (user.isActive === true) {
            totalUsers++;
        }
    }
    return totalUsers;
}

console.log(`We currently have ${ countActiveUsers(users) } active users.`);


// ETAPE 2
function getActiveUsers(users) {
    let table = [];
    for (user of users) {
        if (user.isActive === true) {
            table.push(user);
        }
    }
    return table;
}

function hasBlueEyes(activeUsers) {
    let totalBlueEyes = 0;
    for (user of activeUsers) {
        if (user.eyeColor === "blue") {
            totalBlueEyes++;
        }
    }
    return totalBlueEyes;
}

let activeUsers = getActiveUsers(users);

console.log(`Out of our currently ${countActiveUsers(users)} active users, ${hasBlueEyes(activeUsers)} have blue eyes.`);


// ETAPE 3
function getActiveUsersAges(users) {
    let ageList = [];
    for (user of activeUsers) {
        ageList.push(user.age);
    }
    return ageList;
}

function computeActiveUsersAverageAge(ages) {
    let average = 0;
    let sum = 0;
    for (age of ages) {
        sum = sum + age;
    }
    average = sum / ages.length;
    
    return average;
}
let ages = getActiveUsersAges(users);

console.log(`Out of our currently ${countActiveUsers(users)} active users, the average age is ${computeActiveUsersAverageAge(ages)}.`);



// ETAPE 4
function getMultronUsers(users) {
    let multronUsers = 0;
    for (user of users) {
        if (user.company === "MULTRON") {
            multronUsers++;
        }
    }
    return multronUsers;
}

function setMultronToCenturia(users) {
    for (user of users) {
        if (user.company === "MULTRON") {
            user.company = "CENTURIA";
        }
    }
}

console.log(`${getMultronUsers(users)} user companies have been changed from MULTRON to CENTURIA.`);



// ETAPE 5
function getBrownEyedUsers(users) {
    let brownEyedUsers = [];
    for (user of users) {
        if (user.eyeColor === "brown") {
            brownEyedUsers.push(user);
        }
    }
    return brownEyedUsers;
}

function excludeCenturiaWorkers(usersBrownEyed) {
    let brownEyed = 0;
    for (user of usersBrownEyed) {
        if (user.company !== "CENTURIA") {
            brownEyed++;
        }
    }
    return brownEyed;
}
let usersBrownEyed = getBrownEyedUsers(users);

console.log(`${excludeCenturiaWorkers(usersBrownEyed)} users with brown eyes do not work at CENTURIA`);


// ETAPE 6

function brownEyedUsersActive(usersBrownEyed) {
    let activeUsersBrownEyes = 0;
    for (user of usersBrownEyed) {
        if (user.isActive === true) {
            activeUsersBrownEyes++;
        }
    }
    return activeUsersBrownEyes;
}
function brownEyedUsersInactive(usersBrownEyed) {
    let inactiveUsersBrownEyes = 0;
    for (user of usersBrownEyed) {
        if (user.isActive === false) {
            inactiveUsersBrownEyes++;
        }
    }
    return inactiveUsersBrownEyes;
}

console.log(`Out of our brown eyed users ${brownEyedUsersActive(usersBrownEyed)} are active and ${brownEyedUsersInactive(usersBrownEyed)} are inactive`);


function getblueEyedUsers(users) {
    let blueEyedUsers = [];
    for (user of users) {
        if (user.eyeColor === "blue") {
            blueEyedUsers.push(user);
        }
    }
    return blueEyedUsers;
}

function blueEyedUsersInactive(blueEyedUsers) {
    let inactiveUserBlueEyes = 0;
    for (user of blueEyedUsers) {
        if (user.isActive === false) {
            inactiveUserBlueEyes++;
        }
    }
    return inactiveUserBlueEyes;
}
let blueEyedUsers = getblueEyedUsers(users);

console.log(`Out of our blue eyed users ${hasBlueEyes(activeUsers)} are active and ${blueEyedUsersInactive(blueEyedUsers)} are inactive`);

function getGreenEyedUsers(users) {
    let greenEyedUsers = [];
    for (user of users) {
        if (user.eyeColor === "green") {
            greenEyedUsers.push(user);
        }
    }
    return greenEyedUsers;
}

function greenEyedUsersActive(getGreenEyedUsers) {
    
}


let greenEyedUsers = getGreenEyedUsers(users);
// console.log(`Out of our green eyed users ${} are active and ${} are inactive`);

