(function() {
    // Таймер обратного отсчета до 1 мая 2027 года
    function updateCountdown() {
        const targetDate = new Date("May 1, 2027 00:00:00").getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        const daysElem = document.getElementById("days");
        const hoursElem = document.getElementById("hours");
        const minutesElem = document.getElementById("minutes");
        const secondsElem = document.getElementById("seconds");

        if (!daysElem || !hoursElem || !minutesElem || !secondsElem) return;

        if (distance < 0) {
            daysElem.innerText = "0";
            hoursElem.innerText = "0";
            minutesElem.innerText = "0";
            secondsElem.innerText = "0";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElem.innerText = days;
        hoursElem.innerText = hours;
        minutesElem.innerText = minutes;
        secondsElem.innerText = seconds;
    }

    // Запускаем таймер и обновляем каждую секунду
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Обработка формы подписки
    const form = document.getElementById('subscribeForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Спасибо! Мы свяжемся с вами ближе к релизу.');
            // Здесь можно добавить реальную отправку данных
        });
    }
})();