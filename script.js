
document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  let dobInput = document.getElementById("dob").value;
  if (!dobInput) {
    document.getElementById("result").innerHTML =
      "⚠️ Please select your date of birth!";
    return;
  }

  let dob = new Date(dobInput);
  let today = new Date();

  if (dob > today) {
    document.getElementById("result").innerHTML =
      "⚠️ Date of Birth cannot be in the future!";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  // Adjust for negative days
  if (days < 0) {
    months--;
    let prevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += prevMonth;
  }

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById(
    "result"
  ).innerHTML = `🎉 You are <b>${years}</b> years, <b>${months}</b> months, and <b>${days}</b> days old.`;
});
