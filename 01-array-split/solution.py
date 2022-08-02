import numpy as np #needs numpy

# This is intended to be the "fast solution" 
# using opitmizations provided by some framework e.g. numpy in python
# Watch me work around the boundaries of a framework:

arr = ["elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7", "elem8"]
n = 3 #config

# Be aware that reshaping works only if there's no remainder left.
# In our given example, elem7 would be a remainder and "alone": [[1,2,3],[4,5,6],[7]]
# To fix this, remove remainder and add it at the end.

nr_remainder = len(arr) % n
fitted_arr = arr[:-nr_remainder]
remainder = arr[-nr_remainder:]

# Magic, super optimized
reshaped_np_arr = np.reshape(fitted_arr, (-1,n))


# Add remainder
reshaped_arr = reshaped_np_arr.tolist() #costly....
reshaped_arr.append(remainder)

# Note: It would be much faster without adding the remainder,
# since a copy of the array is created in tolist(). Using np.append() 
# isn't faster either, it would create a copy too.
# So I switch here to basic lists.

print(reshaped_arr)
