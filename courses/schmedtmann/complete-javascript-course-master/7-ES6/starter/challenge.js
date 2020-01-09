// CHALLENGE
/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in town (formula: number trees/park area)
2. Average age of each town's park (formula: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal.

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/
/*
class TownElement {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends TownElement {
    constructor(name, buildYear, numTrees, parkArea) {
        super(name, buildYear);
        this.numTrees = numTrees;
        this.parkArea = parkArea;
    }

    calcTreeDensity() {
        var treeDensity = this.numTrees/this.parkArea;
        console.log(`Tree density in ${this.name} is: ${treeDensity}`);
    }
}

class Street extends TownElement {
    constructor(name, buildYear, streetLength, streetSize) {
        super(name, buildYear);
        this.streetLength = streetLength;
        this.streetSize = streetSize;
    }

    classifyStreetSize(streetLength) {
        if ((this.streetLength) <= 50) {
            this.streetSize = 'tiny';
        } else if ((this.streetLength) <= 100) {
            this.streetSize = 'small';
        } else if ((this.streetLength) <= 200) {
            this.streetSize = 'normal';
        } else if ((this.streetLength) <= 400) {
            this.streetSize = 'big';
        } else if ((this.streetLength) > 400) {
            this.streetSize = 'huge';
        } else {
            this.streetSize = 'normal';
        }
        console.log(`Size classification for ${this.name} is: ${this.streetSize}`);
    }
}

const geneseehillsPark = new Park('Genesee Hills Park', 1957, 1100, 10000);

const mosesdewittPark = new Park('Moses DeWitt Park', 1931, 750, 8500);

const eriecanalPark = new Park('Erie Canal Park', 1960, 420, 4000);

const briarcliffRd = new Street('Briarcliff Road', 1940, 200);

const radcliffeRd = new Street('Radcliffe Road', 1935, 400);

const salemRd = new Street('Salem Road', 1936, 30);

const revereRd = new Street('Revere Road', 1938, 300);

const falstaffRd = new Street('Falstaff Road', 1938, 100);

geneseehillsPark.calcTreeDensity();

salemRd.classifyStreetSize();

falstaffRd.classifyStreetSize();

const parks = [geneseehillsPark, mosesdewittPark, eriecanalPark];

const streets = [briarcliffRd, radcliffeRd, salemRd, revereRd, falstaffRd];

// average age of each park
let totalAge = 0;
for (const cur of parks) {
    const age = new Date().getFullYear() - cur.buildYear;
    totalAge = age + totalAge;
}
console.log(`The average age of a park is ${Math.round(totalAge/parks.length)} years.`);

// find park with more than 1000 trees

for (const cur of parks) {
    if (cur.numTrees <= 1000) {
        continue;
    }
    console.log(`${cur.name} has ${cur.numTrees} trees.`);
}

// Total and average length of the town's streets

let totalLengths = 0;
for (const cur of streets) {
    totalLengths = cur.streetLength + totalLengths;
}
console.log(`Total length of the town's streets is ${totalLengths} meters.`);
console.log(`Average length of the town's streets is ${totalLengths/streets.length} meters.`);


// Size classification of all streets
for (const cur of streets) {
    cur.classifyStreetSize(cur.streetLength);
}
*/



// Jonas's solutions:

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; // km2
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215), 
    new Park('National Park', 1894, 2.9, 3541), 
    new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Boulevard', 1992, 2.5, 5)];

function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    return [sum, sum / arr.length];

}



function reportParks(p) {

    console.log('----PARKS REPORT----');

    // Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, aveAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${aveAge} years.`);

    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);

}

function reportStreets(s) {

    console.log('----STREETS REPORT----');

    // Total and average length of the town's streets
    const [totalLength, aveLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${aveLength} km.`);

    // Classify sizes
    
}

reportParks(allParks);
reportStreets(allStreets);