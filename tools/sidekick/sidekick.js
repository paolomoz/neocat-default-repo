const loadQuickEdit = async (...args) => {
  // eslint-disable-next-line import/no-cycle
  const { default: initQuickEdit } = await import('../quick-edit/quick-edit.js');
  initQuickEdit(...args);
};

const addSidekickListeners = (sk) => {
  sk.addEventListener('custom:quick-edit', loadQuickEdit);
};

const sk = document.querySelector('aem-sidekick');
if (sk) {
  addSidekickListeners(sk);
} else {
  // wait for sidekick to be loaded
  document.addEventListener('sidekick-ready', () => {
  // sidekick now loaded
    addSidekickListeners(document.querySelector('aem-sidekick'));
  }, { once: true });
}
