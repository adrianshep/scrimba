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

const geneseehillsPark = new Park('Genesee Hills Park', '1957', 1100, 10000);

const mosesdewittPark = new Park('Moses DeWitt Park', '1931', 750, 8500);

const eriecanalPark = new Park('Erie Canal Park', '1960', 420, 4000);

const briarcliffRd = new Street('Briarcliff Road', 1940, 200);

const radcliffeRd = new Street('Radcliffe Road', 1935, 400);

const salemRd = new Street('Salem Road', 1936, 30);

const revereRd = new Street('Revere Road', 1938, 300);

const falstaffRd = new Street('Falstaff Road', 1938);

geneseehillsPark.calcTreeDensity();

salemRd.classifyStreetSize();

falstaffRd.classifyStreetSize();

const parks = [geneseehillsPark, mosesdewittPark, eriecanalPark];

const streets = [briarcliffRd, radcliffeRd, salemRd, revereRd, falstaffRd];

// find park with more than 1000 trees

for (const cur of parks) {
    if (cur.numTrees <= 1000) {
        continue;
    }
    console.log(`${cur.name} has ${cur.numTrees} trees.`);
}