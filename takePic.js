const costraints = {"video": { width: { max: 400 } } };

var canvas = document.getElementById('backgroundCan');
var videoTrack;

function startFunction()
{
    navogator.mediaDevices.getUserMedia(constraints)
        .then(gotMedia)
        .catch(e => {console.error('getUserMedia() failed: ', e); });
}

function gotMedia(mediaStream)
{
    videoTrack = mediaStream.getVideoTracks()[0];
    var imageCapture = new Imagecapture(videoTrack);
    imageCapture.grabFrame()
        .then(processFrame)
        .catch(e => console.error('grabFrame() failed: ' + e));
}

function processFrame(imageBitmap)
{
    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;
    canvas.getContext('2d').drawImage(imageBitmap, 0, 0);

    videoTrack.stop();
}