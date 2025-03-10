import * as bootstrap from 'bootstrap';

export class BootstrapUtil {
  startBootstrap(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new bootstrap.Tooltip(tooltipTriggerEl, {
        trigger: 'hover'
      });

      tooltipTriggerEl.addEventListener('click', () => {
        (tooltipTriggerEl as HTMLElement).blur();
      });
    });

    document.addEventListener('mousedown', () => {
      const openTooltips = document.querySelectorAll('[aria-describedby]');
      openTooltips.forEach(el => {
        const tooltipInstance = bootstrap.Tooltip.getInstance(el);
        tooltipInstance?.hide();
      });

    });
    const tooltipList = Array.from(tooltipTriggerList).map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }
}
