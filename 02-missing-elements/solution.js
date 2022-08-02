arr = [
    ["elem1", "elem2", "elem3"],
    ["elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7"],
    ["elem2", "elem3"]
]

hash = {}

// Loop through elements, add them to hash table and increase counter for every occurence.
for (var i = 0; i < arr.length; i++) {
	subarr = arr[i]
	for (var j = 0; j < subarr.length; j++) {
		key = subarr[j]

		if(hash[key] === undefined) hash[key] = 0
  		hash[key]++
	}
}

// "which are not in available in every array." 
// == "counter of element is less than length of parent array"

// C'mon JS, why is there no Object.filter() method? :(
// Let's do it this way, a bit dirty but it works
// Source: https://masteringjs.io/tutorials/fundamentals/filter-object
asArray = Object.entries(hash);
len = arr.length
filtered = asArray.filter(([key, value]) => value < len);

// Remove "numbers":
// [            v-this here
//   [ 'elem1', 2 ],
// ...
// ]

keys = filtered.map(el => el[0])
console.log(keys)

// Let's not discuss here complexity... I'm sure this can further be optimized :)