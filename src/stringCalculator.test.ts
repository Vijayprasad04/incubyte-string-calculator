import { add } from "./stringCalculator";

/** Empty string returns 0 */
test('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
});

/** Single input returns number */
test('returns number for single input', () => {
    expect(add('5')).toBe(5);
});

/** Comma-separated numbers */
test('returns sum of two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
});

/** Multiple Comma-separated numbers */
test('returns sum of multiple numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
});

/** New line separated numbers */
test('supports new line as separator', () => {
    expect(add('1\n2,3')).toBe(6);
});