var faker = require('faker');

var database = { vehicles: [], customers: [], rentalEvents: []};

for (var i = 1; i<= 8; i++) {
  database.vehicles.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?vehicle",
    quantity: faker.random.number()
  });
}

console.log(JSON.stringify(database));