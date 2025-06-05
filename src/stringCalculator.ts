/** 'add' function to return sum of numbers */
export function add(numbers: string): number {
    if(numbers === "") return 0;
    
    let delimiter = /,|\n/;
    if(numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }

    const nums = numbers.split(delimiter);

    return nums.reduce((sum, num) => sum + parseInt(num), 0);
}