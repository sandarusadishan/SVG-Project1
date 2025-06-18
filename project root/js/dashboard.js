// Persist active tab between reloads
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll('#dashboardTabs .nav-link');

  // Load previously active tab from localStorage
  const savedTab = localStorage.getItem("activeTab");
  if (savedTab) {
    const trigger = document.querySelector(`#dashboardTabs .nav-link[href="${savedTab}"]`);
    if (trigger) new bootstrap.Tab(trigger).show();
  }

  // Save active tab on click
  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      const href = this.getAttribute("href");
      localStorage.setItem("activeTab", href);
    });
  });
});
