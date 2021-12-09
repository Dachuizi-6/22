window.addEventListener('zohnny',() => {
  console.log('监听到了zohnny事件');
})

window.dispatchEvent(new Event('zohnny'))