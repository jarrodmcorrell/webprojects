import os
directory = 'c:/Users/Jarrod/Projects/webprojects/01/chords'
import numpy as np

for filename in os.listdir(directory):

    if filename.endswith(".png"):

        print(filename)
    else:
        continue

    



