const switchers = document.querySelectorAll(".profile__schedule li");
const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");
const cards = document.querySelectorAll(".activity__card");

fetch("data.json")
  .then((res) => res.json())
  .then(function (data) {
    updateInfo(data);

    switchers.forEach((switcher) => {
      switcher.addEventListener("click", function () {
        switchers.forEach((s) => s.classList.remove("active"));
        switcher.classList.add("active");
        updateInfo(data);
      });
    });
  });

switchers.forEach((switcher) => {
  switcher.addEventListener("click", function () {
    switchers.forEach((s) => s.classList.remove("active"));
    switcher.classList.add("active");
  });
});

function updateInfo(data) {
  cards.forEach((card, i) => {
    // UPDATE ACTIVITY NAME
    card.querySelector(".activity__card-header span").textContent =
      data[i].title;

    // UPDATE TIMEFRAMES BASED ON TIMESPAN
    if (daily.classList.contains("active")) {
      card.querySelector(".activity__hours").textContent =
        data[i].timeframes.daily.current + "hrs";
      card.querySelector(
        ".activity__last"
      ).innerHTML = `Yesterday - <span class="play__prev-num">${data[i].timeframes.daily.previous}hrs</span>`;
    }

    if (weekly.classList.contains("active")) {
      card.querySelector(".activity__hours").textContent =
        data[i].timeframes.weekly.current + "hrs";
      card.querySelector(
        ".activity__last"
      ).innerHTML = `Last week - <span class="play__prev-num">${data[i].timeframes.weekly.previous}hrs</span>`;
    }

    if (monthly.classList.contains("active")) {
      card.querySelector(".activity__hours").textContent =
        data[i].timeframes.monthly.current + "hrs";
      card.querySelector(
        ".activity__last"
      ).innerHTML = `Last month - <span class="play__prev-num">${data[i].timeframes.monthly.previous}hrs</span>`;
    }
  });
}

// if(daily)
