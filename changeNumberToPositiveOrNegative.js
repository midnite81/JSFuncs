/**
 * Convert negative to positive and vice versa
 * @param number
 * @returns int
 */
 
function convertNumber(number) {
  if (number < 0) {
    return Math.abs(number);
    } else if (number > 0) {
      return (number - (number*2));
    }
 return number;
}
