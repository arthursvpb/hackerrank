read x
read y
read z

if [ $x -eq $y -a $x -eq $z -a $y -eq $z ];
    then
        echo "EQUILATERAL"
elif [ $x -eq $y -o $x -eq $z -o $y -eq $z ];
    then
        echo "ISOSCELES"
else
        echo "SCALENE"
fi