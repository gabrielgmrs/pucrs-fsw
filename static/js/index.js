document.addEventListener("DOMContentLoaded", () => {
  const countdownElement = document.getElementById("countdown");
  const couponBtn = document.getElementById("couponBtn");
  const couponMessage = document.getElementById("couponMessage");

  // Define a data final da promoção: hoje às 23:59
  const today = new Date();
  const promotionEndDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    23,
    59,
    59
  );

  // Função para calcular o tempo restante (sem dias, pois sempre é hoje)
  const getTimeRemaining = (endDate, currentDate) => {
    const diff = endDate - currentDate;
    if (diff <= 0) return { expired: true, hours: 0, minutes: 0, seconds: 0 };
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { expired: false, hours, minutes, seconds };
  };

  // Formata o tempo como HH:MM:SS
  const formatTime = ({ expired, hours, minutes, seconds }) =>
    expired
      ? "Oferta Encerrada"
      : `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // Atualiza o contador no DOM
  const updateCountdown = () => {
    const current = new Date();
    const time = getTimeRemaining(promotionEndDate, current);
    countdownElement.textContent = formatTime(time);
    if (time.expired) clearInterval(timerInterval);
  };

  updateCountdown();
  const timerInterval = setInterval(updateCountdown, 1000);

  // Função para gerar um código de cupom
  const generateCoupon = () => `PROMO${Math.floor(Math.random() * 10000)}`;

  couponBtn.addEventListener("click", () => {
    const couponCode = generateCoupon();
    couponMessage.textContent = `Seu cupom de desconto: ${couponCode}`;
  });
});
