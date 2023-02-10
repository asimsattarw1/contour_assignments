class Player {
    #PlayerID;
    #PlayerName;
    #PlayerRuns;
    #PlayerDateofBirth;
    #PlayerShirtNumber;
    constructor(id, name, runs, dob, sno) {
        this.#PlayerID = id;
        this.#PlayerName = name;
        this.#PlayerRuns = runs;
        this.#PlayerDateofBirth = dob;
        this.#PlayerShirtNumber = sno;
        this.TotalRuns;
        this.DisplayInfo();
        this.GetRuns();
        this.AddRuns()
    }

    DisplayInfo = () => {
        try {
            if (isNaN(this.#PlayerID)) throw "Id is not a number"
            if (!isNaN(this.#PlayerName)) throw "Name is number value"
            if (isNaN(this.#PlayerRuns)) throw "Runs is not a number value"
            if (isNaN(this.#PlayerDateofBirth)) throw "DOB is not a number value"
            if (isNaN(this.#PlayerShirtNumber)) throw "Shirt number is not number value"
            else {
                return (`
           ID: ${this.#PlayerID}
           Name: ${this.#PlayerName}
           Runs: ${this.#PlayerRuns}
           DOB: ${this.#PlayerDateofBirth}
           Shirt No: ${this.#PlayerShirtNumber}
        `)
            }
        } catch (err) {
            console.log(err)
        }
    }

    GetRuns = () => {
        if (isNaN(this.#PlayerRuns)) throw "Runs is not a number value";
        else {
            return this.#PlayerRuns
        }
    }

    AddRuns = (n) => {
        if (isNaN(this.#PlayerRuns)) throw "Runs is not a number value";
        else {
            return (`
            Previous Runs: ${this.#PlayerRuns}
            Added Runs: ${n}
            Total:  ${this.#PlayerRuns + n}
            `);
        }
    }

}

const playerObj = new Player(1, "Asim", 50, 1994, 9);

console.log(playerObj.DisplayInfo());