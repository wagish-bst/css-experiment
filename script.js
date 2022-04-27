
docReady(function() {
    // DOM is loaded and ready for manipulation here
    console.log("app loaded");
    document.getElementById("lightning-video-btn").addEventListener("click", toggleLightningVideo1);
    document.getElementById("lightning-gif-btn").addEventListener("click", toggleLightningVideo2);
    function toggleLightningVideo1(){
        document.getElementById("lightning-video-2").classList.add("hide");
        document.getElementById("lightning-video-1").classList.toggle("hide");
    }
    function toggleLightningVideo2(){
        document.getElementById("lightning-video-1").classList.add("hide");
        document.getElementById("lightning-video-2").classList.toggle("hide");
    }
});


function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}    