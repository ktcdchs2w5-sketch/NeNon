
const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();

  // Подстраиваем цвет интерфейса под Telegram,
  // сохраняя белую тему NENON.
  tg.setHeaderColor("#f5f5f7");
  tg.setBackgroundColor("#f5f5f7");

  const user = tg.initDataUnsafe?.user;

  if (user) {
    const profileName = document.getElementById("profileName");
    const profileStatus = document.getElementById("profileStatus");

    if (profileName) {
      profileName.textContent = user.first_name || "Пользователь";
    }

    if (profileStatus) {
      profileStatus.textContent = "Telegram-профиль";
    }
  }
}

function navigate(page) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.toggle("active", p.id === page);
  });

  document.querySelectorAll(".tab").forEach(t => {
    t.classList.toggle("active", t.dataset.page === page);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startSearch() {
  navigate("voice");
  showToast("Случайный поиск пока недоступен");
}

function cancelSearch() {
  showToast("Поиск не запущен");
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}
