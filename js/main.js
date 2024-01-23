let elsPaymentPeriodradio = document.querySelectorAll('[name="payment-period"]');
let elsPricingPlanValue = document.querySelectorAll('.pricing-plan-value');

elsPaymentPeriodradio.forEach(function (elPaymentPeriodRadio) {
  elPaymentPeriodRadio.addEventListener('change', function () {
    let period = elPaymentPeriodRadio.value;

    if (period === 'annual') {
      elsPricingPlanValue.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentAnnual;
      });
    } else {
      elsPricingPlanValue.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentMonthly;
      })
    }
  });
});