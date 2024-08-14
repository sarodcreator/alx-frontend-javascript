// task_5/js/main.ts
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits"
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits"
    };
}
// Example usage
var major1 = { credits: 30, brand: "MajorCredits" };
var major2 = { credits: 20, brand: "MajorCredits" };
var minor1 = { credits: 15, brand: "MinorCredits" };
var minor2 = { credits: 10, brand: "MinorCredits" };
var totalMajor = sumMajorCredits(major1, major2);
var totalMinor = sumMinorCredits(minor1, minor2);
console.log("Total Major Credits: " + totalMajor.credits);
console.log("Total Minor Credits: " + totalMinor.credits);
