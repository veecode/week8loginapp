//document.getElementById("message").innerHTML = "<h1>Codify</h1>"

users = [
{
	username: "Isaac",
	password: "Naruto"
},
{
	username: "veronica",
	password: "monkey"
},
{
	username: "Sam",
	password: "coolguy"
}
]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(i = 0; i < users.length; i++) {
		if (username == users[i].username && password == users[i].password) {
		console.log("you are in")
		return
	}
	}
console.log("incorrect username or password")
	}

//var cars = ["fiat", "benz", "honda", "chrysler"]
//for(i = 0; i < cars.length; i++) {
//	console.log(cars[i])
//}

// var nums = [90,9657,445,414,3]
// var biggest = 0
// for(i = 0; i < nums.length; i++) {
// 	if(biggest < nums [i]) {
// 		biggest = nums[i]
// 	}
// }
// console.log(biggest)

// var carObject = {
// 	make: "fiat",
// 	year: 2010,
// 	purchase: false
// }
// console.log(carObject.make)
// console.log(carObject.purchase)
// console.log(carObject.year)

// var carArray = [
// {
// 	make: "fiat",
// 	year: 2014,
// 	purchased: false
// },
// {
// 	make: "benz",
// 	year: 2015,
// 	purchased: true
// },
// {
// 	make: "honda",
// 	year: 2000,
// 	purchased: false
// }
// ]
// for(i = 0; i < carArray.length; i++) {
// 	if(carArray[i].year <= 2014)
// 		console.log(carArray[i].make + "" + carArray[i].year)
// }

