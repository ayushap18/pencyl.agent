const toast = document.getElementById('toast');
const showToast = (message) => { toast.textContent = message; toast.classList.add('show'); clearTimeout(window.toastTimer); window.toastTimer = setTimeout(() => toast.classList.remove('show'), 2600); };

document.querySelectorAll('.agent-suggestions button').forEach((button) => button.addEventListener('click', () => {
  document.getElementById('agentInput').value = button.dataset.prompt;
  document.getElementById('agentInput').focus();
}));

document.getElementById('sendBtn').addEventListener('click', () => {
  const input = document.getElementById('agentInput');
  if (!input.value.trim()) { input.focus(); showToast('Tell Pencyl what you want to change.'); return; }
  showToast('Pencyl is exploring 3 directions for your design…');
  setTimeout(() => { showToast('New direction ready — review the canvas.'); input.value = ''; }, 1700);
});

document.getElementById('previewBtn').addEventListener('click', (event) => {
  document.body.classList.toggle('preview-mode');
  event.currentTarget.textContent = document.body.classList.contains('preview-mode') ? '× Exit preview' : '▷ Preview';
});

document.getElementById('publishBtn').addEventListener('click', () => showToast('Published to your team workspace.'));
document.querySelectorAll('.inspector-tab').forEach((tab) => tab.addEventListener('click', () => {
  document.querySelectorAll('.inspector-tab').forEach((item) => item.classList.remove('active'));
  tab.classList.add('active');
  showToast(`${tab.textContent} controls selected.`);
}));

document.querySelectorAll('.layer-row').forEach((row) => row.addEventListener('click', () => {
  document.querySelectorAll('.layer-row').forEach((item) => item.classList.remove('selected-child'));
  row.classList.add('selected-child');
}));

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); document.getElementById('agentInput').focus(); showToast('Command menu ready.'); }
  if (event.key === 'Escape' && document.body.classList.contains('preview-mode')) document.getElementById('previewBtn').click();
});