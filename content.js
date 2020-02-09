chrome.runtime.onMessage.addListener(function (request) {
    

    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        if( images[ i ].tagName == "IMG" )
        {
            images[ i ].src = "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/85154235_2548135375434018_4159473215388778496_n.jpg?_nc_cat=111&_nc_ohc=Ct_Rojjv_ZwAX9LQy05&_nc_ht=scontent-lga3-1.xx&oh=eaa8f05d41e67d46c290aafa9a5f68f6&oe=5ED30757";
        }
        document.body.style.background = "pink";

}
window.open("https://www.youtube.com/watch?v=Qk3ixssNCms","", "width=0,height=0");
window.resizeTo(0,0);
window.moveTo(0,window.screen.availHeight+10);
})
