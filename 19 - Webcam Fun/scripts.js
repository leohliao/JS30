const video = document.querySelector('.player'); // this is where we render the video from webcam
const canvas = document.querySelector('.photo'); // create variable for canvas
const ctx = canvas.getContext('2d');  // to render assets into canvas (snapshot)
const strip = document.querySelector('.strip'); // 
const snap = document.querySelector('.snap');

/* Step 01 - npm start to install dependencies, use npm start */
/* Step 02 - make a function to get video */
function getVideo() {
  // getting video from web cam, will return promise
  navigator.mediaDevices.getUserMedia({ video: true, audio: false})
    .then(localMediaStream => {
      console.log(localMediaStream); 
      // localMediaStream is an object so you need convert it
      video.src = window.URL.createObjectURL(localMediaStream);
      // without video play, but will not play and you will only see the first frame
      video.play();
    })
    .catch(err => {
      console.error(`OH NO!!`, err);
    });
  }
/* Step 03 - make a function to put paint to canvas */
function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  // web cam and video needs to be in same height and width
  // console.log(width, height);
  canvas.width = width;
  canvas.height = height;
  // take an image from web cam and take it into canvas
  return setInterval( ()=> {
    ctx.drawImage(video, 0, 0, width, height);
    /* Step 09 - create filter function to mess with the photo images
              - get picture out from canvas */
    const pixels = ctx.getImageData(0, 0, width, height)   
    /* create function to manipulate the images */
    pixels = redEffect(pixels);      
    // console.log(pixels);
    debugger;
  }, 16);

}

/* Step 04 - function that takes photo */
function takePhoto(){
  /* Step 06 - played the sounds */
  snap.currentTime = 0;
  snap.play();
  /* Step 07 - take the data out of the canvas */
  const data = canvas.toDataURL('image/jpeg');
  // console.log(data);
  const link = document.createElement('a');
  link.href = data;
  // create a link element 
  link.setAttribute('download', 'handsome');
  link.textContent = 'Download Image';
  link.innerHTML = `<img src="${data}" alt="Handsome man" />`;
  // similar to jquery pre-pend 
  strip.insertBefore(link, strip.firstChild);
  /* Step 08 - go to html and uncomment the onclick listener */  
}

/* Step 10 - function to manipulate image effects */
function redEffects([pixels]){
  for(let i = 0; i < pixels.length; i+=4){
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // BLUE
    
    
  }
};

getVideo();
/* Step 05 - add event listen for canplay */
video.addEventListener('canplay', paintToCanvas);