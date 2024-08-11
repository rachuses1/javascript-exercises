const findTheOldest = function(people) {



    const ages = people.map((person) => {
        if(!person.yearOfDeath) {
            Object.defineProperty(person,'yearOfDeath', {value: 2024});
        };
        return (person.yearOfDeath - person.yearOfBirth);
    });
    
    const oldest = Math.max(...ages);

    const number = ages.findIndex((age) => age === oldest);

    return people[number];

}




// Do not edit below this line
module.exports = findTheOldest;
