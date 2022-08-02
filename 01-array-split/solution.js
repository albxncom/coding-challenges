arr = ["elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7", "elem8"]
n = 3

// Complexity upper bound O(n)

nr_remainder = arr.length % n
fitted_arr = arr.slice(0,-nr_remainder)
remainder = arr.slice(-nr_remainder)

nr_blocks = parseInt(fitted_arr.length / n) //not needed but... I don't trust machines
new_arr = []

for (var i = 0; i < nr_blocks; i++) {
	new_arr.push(fitted_arr.slice(i*n,i*n+n))
}

new_arr.push(remainder)

console.log(new_arr)