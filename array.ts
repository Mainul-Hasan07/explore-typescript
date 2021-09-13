const salary: number = 7500;
const friendSalaries: number[] = [7500, 12300, 17200, 9400, 8300];
const frieds: string[] = ['rejoan', 'kawser', 'sojib'];

friendSalaries[0] = 10500;
friendSalaries.push(13500);

// friendSalaries[4] = '9800';
// friendSalaries.push('34550');

frieds.push('bakib');
frieds[2] = 'Qakib';



let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
   } 
}