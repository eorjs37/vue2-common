
//메세지 이벤트 핸들링
self.addEventListener('message',(messageEvent)=>{
    const { interval } = messageEvent.data;
    console.log(interval);
    setInterval(() => {
        self.postMessage('intervalTick')
    }, 2000);
})