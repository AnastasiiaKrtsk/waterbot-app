export const calculateV = (gender, weight, activity, setResult) => {
  // Get user inputs
  const weightFloat = parseFloat(weight);
  const activityFloat = parseFloat(activity);

  // Check if inputs are valid numbers
  // if (isNaN(weightFloat) || isNaN(activityFloat)) {
  //   alert("Please enter valid numbers for weight and activity.");
  //   return;
  // }

  // Calculate V using different formulas based on gender
  let activityMultiplier = 0;
  let weightMultiplier = 0;

  if (gender === "woman") {
    activityMultiplier = 0.4;
    weightMultiplier = 0.03;
  } else if (gender === "man") {
    activityMultiplier = 0.6;
    weightMultiplier = 0.04;
  }

  const calculatedResult =
    weightFloat * weightMultiplier + activityFloat * activityMultiplier;

  // Set the result state
  setResult(calculatedResult.toFixed(2));
};
