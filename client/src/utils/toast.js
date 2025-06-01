export function showToast(
  type = "success",
  message = "This is a toast message."
) {
  const toast = document.createElement("div");

  const colors = {
    success: {
      icon: `
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/></svg>
      `,
      bg: "bg-green-100 dark:bg-green-800 text-green-500 dark:text-green-200",
    },
    error: {
      icon: `
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/></svg>
      `,
      bg: "bg-red-100 dark:bg-red-800 text-red-500 dark:text-red-200",
    },
    warning: {
      icon: `
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/></svg>
      `,
      bg: "bg-orange-100 dark:bg-orange-700 text-orange-500 dark:text-orange-200",
    },
  };

  toast.className = `flex items-center w-full max-w-xs p-4 text-sm font-normal bg-white rounded-lg shadow dark:bg-gray-800 ${colors[type].bg}`;
  toast.innerHTML = `
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 rounded-lg ${colors[type].bg}">
      ${colors[type].icon}
    </div>
    <div class="text-sm font-normal">${message}</div>
    <button onclick="this.parentElement.remove()" class="ml-auto text-gray-400 hover:text-gray-900 dark:hover:text-white">
      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6l8 8m0-8l-8 8"/></svg>
    </button>
  `;

  document.getElementById("toast-container").appendChild(toast);

  setTimeout(() => toast.remove(), 4000);
}
