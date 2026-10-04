const toast = document.querySelector('#toast');
const requestInput = document.querySelector('#requestInput');
const statusMessage = document.querySelector('#statusMessage');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove('visible'), 2600);
}

document.querySelectorAll('.suggestion').forEach((button) => button.addEventListener('click', () => {
  requestInput.value = button.dataset.request;
  requestInput.focus();
}));

document.querySelectorAll('.layer').forEach((layer) => layer.addEventListener('click', () => {
  document.querySelector('.layer.selected').classList.remove('selected');
  layer.classList.add('selected');
  document.querySelector('#selectionName').textContent = layer.dataset.layer;
}));

document.querySelector('#requestForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const request = requestInput.value.trim();
  if (!request) { showToast('Describe a change first.'); requestInput.focus(); return; }
  statusMessage.textContent = `Local request recorded: ${request}`;
  showToast('Request recorded locally. No generation was performed.');
  requestInput.value = '';
});

document.querySelector('#saveButton').addEventListener('click', () => {
  statusMessage.textContent = 'Saved in this browser session';
  showToast('Saved locally for this session.');
});

document.querySelector('#previewButton').addEventListener('click', (event) => {
  document.body.classList.toggle('preview-mode');
  event.currentTarget.textContent = document.body.classList.contains('preview-mode') ? 'Exit preview' : 'Preview';
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.classList.contains('preview-mode')) document.querySelector('#previewButton').click();
});