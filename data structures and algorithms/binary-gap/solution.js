function solution(N) {
  // Implement your solution here

  const binaryString = N.toString(2); // Convert N to binary string
  let maxGap = 0; // Initialize the maximum binary gap length
  let currentGap = 0; // Initialize the current binary gap length
  let checkGap = 0;

  //Check for valid gaps
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '1') {
      checkGap++;
    }
  }
  // Iterate through the binary string
  if (checkGap > 1) {
    for (let i = 0; i < binaryString.length; i++) {
      if (binaryString[i] === '0') {
        currentGap++;
      } else {
        // Update maxGap if currentGap is greater
        maxGap = Math.max(maxGap, currentGap);
        // Reset currentGap for a new binary gap
        currentGap = 0;
      }
    }

    return maxGap;
  } else return 0;
}
