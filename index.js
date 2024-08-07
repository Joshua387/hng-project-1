// Show slack display name
const slackDisplayName = "Vader";
document.querySelector(
  '[data-testid="slackDisplayName"]'
).innerText = ` ${slackDisplayName}`;

// Show slack display email
const slackEmail = "vaderhagas3@gmail.com";
document.querySelector('[data-testid="slackEmail"]').innerText = slackEmail;

// show hnglink
const hngLink = "https://hng.tech/learn";
const hngLinkText = "hng.tech/learn";

const hngLinkElement = document.querySelector('[data-testid="hngLink"]');
hngLinkElement.href = hngLink;
hngLinkElement.textContent = hngLinkText;

// show keywordLink
const keyWordLink = "https://keyword.dog";
const keyWordLinkText = "keyword.dog";

const keyWordLinkElement = document.querySelector(
  '[data-testid="keywordLink"]'
);
keyWordLinkElement.href = keyWordLink;
keyWordLinkElement.textContent = keyWordLinkText;

//show scrapeanywebLink
const anyWebLink = "https://scrapeanyweb.site";
const anyWebLinkText = "scrapeanyweb.site";
const anyWebLinkinkElement = document.querySelector(
  '[data-testid="scrapeanywebLink"]'
);
anyWebLinkinkElement.href = anyWebLink;
anyWebLinkinkElement.textContent = anyWebLinkText;

// profile picture
const slackProfilePicture =
  "images/profile.png";
const slackProfilePictureElement = document.querySelector(
  '[data-testid="slackProfilePicture" ]'
);
slackProfilePictureElement.src = slackProfilePicture;

// show current time
const currentTimeElement = document.querySelector(
  '[data-testid="currentTimeUTC"]'
);
const currentDayElement = document.querySelector('[data-testid="currentDay"]');
const currentDate = new Date();
const currentTime = new Date().toUTCString();

const utcDay = currentDate.getUTCDay();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
currentDayElement.innerText = `${daysOfWeek[utcDay]}`;
currentTimeElement.innerText = `${currentTime}`;

// function to update time
function updateDateTime() {
  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const utcSeconds = now.getUTCSeconds();

  // Add 1 hour to the UTC time
  const adjustedUtcHours = utcHours + 1;

  // Format the UTC time string
  const utcTime = `${adjustedUtcHours.toString().padStart(2, "0")}:${utcMinutes
    .toString()
    .padStart(2, "0")}:${utcSeconds.toString().padStart(2, "0")} UTC`;

  // Display the UTC time in the HTML element
  document.querySelector('[data-testid="currentTimeUTC"]').textContent =
    utcTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);
