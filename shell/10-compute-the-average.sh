#!/bin/bash

read n

for (( i=0; i<=$n; i++ ))
    do
        read num
        acc=$((acc + num))
done

printf "%.3f\n" $(echo "$acc/$n" | bc -l)