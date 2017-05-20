const audioPlayer= require('web-audio-player');
let audio= audioPlayer('../canIKickIt.mp3');
const createAnalyser=  require('web-audio-analyser');
const detectMediaSource = require('detect-media-element-source');
const detectAutoplay = require('detect-audio-autoplay');

//Hack for devices that need "Click to play" and for iOs tap event 
detectAutoplay(function (autoplay) {
    if (autoplay) {
        canplay()
    } else {
        clickToPlay.style.display = 'block'
        loading.style.display = 'none'

        const onTap = tapEvent(function (ev) {
            window.removeEventListener('touchstart', onTap)
            ev.preventDefault()
            loading.style.display = 'block'
            clickToPlay.style.display = 'none'
            canplay()
    })
    window.addEventListener('touchstart', onTap)
    }
})

//create audio context
function canplay() {
    const audioContext = createAudioContext()
     detectMediaSource(function (supportsMediaElement) {
    // No media element support -> we should buffer
    var shouldBuffer = !supportsMediaElement
    start(audioContext, shouldBuffer)
  }, audioContext)
} 

function start (audioContext, shouldBuffer) {
    let source= '../canIKickIt.mp3';

    //buffer for mobile mose
    let player= audioPlayer(source,{
        context: audioContext,
        buffer: true,
        loop: true
    })

    //AnalyserNode
    const analyser = audioUtil.analyser

    // player.once('decoding', function (amount){
    //     loading.innerText = 'Decoding...'
    // }),{

    //end of loop
    player.on('end', function(){
        console.log('audio ended')
    })

    //loading audio error
    player.on('error', function(err){
        console.error(err.messeage)
        loading.innerText= 'Error loading audio'
    })

    player.on('load', function() {
        loading.style.display= 'none'

        console.log('source:', player.element ? 'MediaElement' : 'Buffer')
        console.log('Playing', Math.round(player.duration) +'s of audio...')

        //start audio node
        player.play()
    })
    var freqs = audioUtil.frequncies()

}