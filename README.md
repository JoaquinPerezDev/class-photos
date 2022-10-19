# class-photos

ALGO EXPERT EASY

It's photo day at the local school, and you're the photographer assignedt to take class photos. The class that you'll be photographing has an even number of students,
and all these students are wearing red or blue shirts. In fact, exactly half of the
class is wearing red shirts, and the other half is wearing blue shirts. You're
responsible for arranging the students in two rows before taking the photos. Each
row should contain the same number of students and should adhere to the following
guidelines:

-All students wearing red shirts must be in the same row.<br>
-All students wearing blue shirts must be in the same row.<br>
-Each student in the back row must be strictly taller than the students directly in fron of them in the front row.<br>

You're given two input arrays: One containing the heights of all the students with
red shirts and another one containing the heights of all the students with blue
shirts. These arrays will always have the same length, and each height will be a
positive integer. Write a function that returns whether or not a class photo follows
the stated guidelines can be taken.

Note: You can assume that each class has at least 2 students.

Sample input: blue = [2, 3, 5, 6, 9], red =  [1, 3, 4, 5, 8]<br>
Sample output: true (Place all students in blue shirts in back row.)
