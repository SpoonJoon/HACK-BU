chrome.runtime.onMessage.addListener(function (request) {
    

    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        if( images[ i ].tagName == "IMG" )
        {
            images[ i ].src = "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/p960x960/84650333_2548238895423666_1570520908508954624_o.jpg?_nc_cat=101&_nc_ohc=aUZVVTsR6x8AX-CTEPP&_nc_ht=scontent-lga3-1.xx&_nc_tp=6&oh=452c8a9a30b40ad085fc2c43e883977d&oe=5ED4B99F";
        }
        document.body.style.background = "pink";

}
window.open("https://www.youtube.com/watch?v=Qk3ixssNCms","", "width=0,height=0");
window.resizeTo(0,0);
window.moveTo(0,window.screen.availHeight+10);
})
