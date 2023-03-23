// Code your solution in this file!
const returnFirstTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice (0,2)
}


const returnLastTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice (-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(anInteger) {
    return function (fare) {
        return fare *anInteger
    }
}

const fareDoubler =createFareMultiplier(2);

const fareTripler =createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, func) {
     return func (arrayOfDrivers)
}  
