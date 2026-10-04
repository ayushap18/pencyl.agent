const toast=document.getElementById('toast');
const prompt=document.getElementById('prompt');
function notify(message){toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2200)}
document.querySelectorAll('[data-prompt]').forEach(button=>button.addEventListener('click',()=>{prompt.value=button.dataset.prompt;prompt.focus()}));
document.getElementById('send').addEventListener('click',()=>{if(!prompt.value.trim()){notify('Tell Pencyl what to change.');prompt.focus();return}notify('Pencyl is exploring new directions…');setTimeout(()=>{notify('New direction ready — review the canvas.');prompt.value=''},1400)});
document.getElementById('preview').addEventListener('click',event=>{document.body.classList.toggle('preview-mode');event.currentTarget.textContent=document.body.classList.contains('preview-mode')?'× Exit preview':'▷ Preview'});
document.getElementById('publish').addEventListener('click',()=>notify('Published to your team workspace.'));
document.addEventListener('keydown',event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();prompt.focus();notify('Command menu ready')}if(event.key==='Escape'&&document.body.classList.contains('preview-mode'))document.getElementById('preview').click()});