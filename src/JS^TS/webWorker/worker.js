onmessage = function (e) {
    console.log('Message received from main script', e);
    var workerResult = e.data[0] * e.data[1];
    postMessage(workerResult);
    console.log('Worker postMessage:', workerResult)
}
