/** 'add' function to return sum of numbers */
export function add(numbers: string): number {
    if(numbers === "") return 0;
    
    const parts = numbers.split(/,|\n/);

    return parts.reduce((sum, num) => sum + parseInt(num), 0);
}