/*Cars: Write a function that stores information
about a car in a Object. The function should
always receive a manufacturer and a model name.
It should then accept an arbitrary number of
keyword arguments. Call the function with the
required information and two other name-value
pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure
all the information was stored correctly.*/
function car(manufacturer, model, ...args) {
    let car = { manufacturer: manufacturer, model: model };
    for (let arg of args) {
        let key = arg[0];
        let value = arg[1];
        car[key] = value;
    }
    return car;
}
let car1 = car("Chevrolet", "Malibu", ["color", "Blue"], ["optional feature", "Sunroof"]);
console.log(car1);
export {};
