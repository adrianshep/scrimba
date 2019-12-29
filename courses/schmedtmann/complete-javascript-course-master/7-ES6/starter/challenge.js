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

const parks = [];

const streets = [];

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
}

class Street extends TownElement {
    constructor(name, buildYear, streetLength, streetSize) {
        super(name, buildYear);
        this.streetLength = streetLength;
        this.streetSize = streetSize;
    }
}

const geneseehillsPark = new Park('Genesee Hills Park', '1957', 69, 10000);

const mosesdewittPark = new Park('Moses DeWitt Park', '1931', 75, 8500);

const eriecanalPark = new Park('Erie Canal Park', '1960', 42, 4000);

const briarcliffRd = new Street('Briarcliff Road', 1940, 200, 'normal');

const radcliffeRd = new Street('Radcliffe Road', 1935, 400, 'big');

const salemRd = new Street('Salem Road', 1936, 30, 'tiny');

const revereRd = new Street('Revere Road', 1938, 300, 'normal');