'use strict';

/*
You are provided arrays A and B, and values M, X and Y:
    A contains the list of the weight of N people waiting to use the elevator.
    B contains the floors each of the N people need to visit.
    You are also given:
        M (number of floors in the building),
        X (maximum capacity of lift),
        Y (maximum weight limit on lift)

    Given that people must be served in the order they arrive,
    Write a function to calculate the number of floors the lift must stop at and come back
    to the ground floor in order to service all of the people.

    eg. A = [40, 40, 100, 60], B = [3, 3, 2, 2], M = 3, X = 3, Y = 200
    1) Lift will take person 1, 2, 3 to floor 3 and floor 2 => 2 floors
    2) Lift will return to ground floor => 1 floor
    3) Lift will take person 4 to floor 2 => 1 floor
    4) Lift will return to ground floor => 1 floor
    Total floors = 5

Your answer must be within:
    Worst time complexity = O(N)
    Auxillary space complexity = O(N)

Please provide your answer below
*/
module.exports = function(A, B, M, X, Y) {
    const weightsOfPeople = A;
    const floorsToVisit = B;
    const totalFloors = M;
    const maxPeople = X;
    const maxPeopleWeight = Y;
    const floorsToHalt = new Set();
    let peopleOnLift = [];
    let result = 0;
    //Given that people must be served in the order they arrive
    /* Because of the above mentioned statement, it can be assumed that if a person with less weight 
    who arrived late have to wait for his turn even if he/she could have went inside the lift.
    */
    for (let index = 0; index < weightsOfPeople.length; index++) {
        peopleOnLift.push(weightsOfPeople[index]);
        let ifLiftFull = checkIfLiftFull(peopleOnLift, maxPeople, maxPeopleWeight);
        if (ifLiftFull) {
            //lift will go up
            peopleOnLift.pop();
            result += floorsToHalt.size + 1;
            peopleOnLift = [];
            floorsToHalt.clear();
            peopleOnLift.push(weightsOfPeople[index]);
            floorsToHalt.add(floorsToVisit[index]);
        } else {
            floorsToHalt.add(floorsToVisit[index]);
        }
    }
    result += floorsToHalt.size + 1;
    return result;
};

function checkIfLiftFull(currentLift, maxNumber, maxWeight) {
    let result = false;
    let currentWeight = currentLift.reduce((x, y) => x + y);
    if (currentWeight > maxWeight) {
        result = true;
    }
    if (currentLift.length > maxNumber) {
        result = true;
    }
    return result;
}
