
arr = [
    {
        "customer_number": "1002442",
        "invoice": {
            "number": 850004111
        }
    },
    {
        "customer_number": "1352432",
        "invoice": {
            "number": 850002489
        }
    },
    {
        "customer_number": "1002442",
        "invoice": {
            "number": 850004391
        }
    },
    {
        "customer_number": "3944835",
        "invoice": {
            "number": 86028494
        }
    },
]

function custom_sort_fct(a,b){
	// Sort first by customer_number
	if(a.customer_number > b.customer_number){
		return 1
	}
	// otherwise sort by invoice number if the customer_number are equal
	else if(a.customer_number == b.customer_number){
		if(a.invoice.number > b.invoice.number){
			return -1
		}
		else {
			return 1
		}
	}
	return -1

}

console.log(arr.sort(custom_sort_fct))