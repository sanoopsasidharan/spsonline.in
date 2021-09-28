var applynow = document.getElementById('apply-now')
applynow.addEventListener("mouseenter",function(){
    applynow.style.backgroundColor="aliceblue";
    applynow.style.color="black"
})
applynow.addEventListener("mouseleave",function(){
    applynow.style.backgroundColor="#00d2b5"
    applynow.style.color="aliceblue"
})
function iframevideo1(){
    document.getElementById("iframe-image").style.display="none"
    document.getElementById("iframe-video").style.display="block"
    document.getElementById("iframe-video").setAttribute("src", "https://www.youtube.com/embed/I9QGnNvrmoY?autoplay=1")
    
}
function playvideo(){
    document.getElementById("howspsworks-imag").style.display="none"
    document.getElementById("howspsworks-video").style.display="block"
    document.getElementById("howspsworks-video").setAttribute("src", "https://www.youtube.com/embed/ckub1RSlhic?autoplay=1")
}
function howtosps(){
    document.getElementById("want-join-sps-img").style.display="none"
    document.getElementById("want-join-sps-video").style.display="block"
    document.getElementById("want-join-sps-video").setAttribute("src", "https://www.youtube.com/embed/xkmM6h32lnM?autoplay=1")
}
function howmuch(){
    document.getElementById("how-much-img").style.display="none";
    document.getElementById('how-much-video').style.display='block';
    document.getElementById("how-much-video").setAttribute("src", "https://www.youtube.com/embed/vhG3wKGp2mc?autoplay=1")
}
function Convocation(){
    document.getElementById("Convocation-img").style.display="none";
    document.getElementById('Convocation-video').style.display='block';
    document.getElementById("Convocation-video").setAttribute("src", "https://www.youtube.com/embed/m_hx0Ebg5Yo?autoplay=1")
}
document.addEventListener("scroll",function(){
    var bottonTop = document.getElementById("angle")
    var scrolltop = document.documentElement;
    if(scrolltop.scrollTop >=450){
        bottonTop.style.display="block"

    }else{
        bottonTop.style.display="none"
    }
})