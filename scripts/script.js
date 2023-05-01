"use strickt";

if (window.matchMedia('screen and (max-width: 1800px)').matches) {
    document.getElementById('streaming1').textContent = "Yandex Music is a music streaming service developed by Yandex.";
    document.getElementById('streaming2').textContent = "Apple Music is a music service provided by Apple.";
    document.getElementById('streaming3').textContent = "Spotify is the most popular streaming service with music, audiobooks, and podcasts.";
}
else{
    document.getElementById('streaming1').textContent = "Yandex Music is a Russian music streaming service developed by Yandex. The most popular feature of Yandex.Music is smart playlists.";
    document.getElementById('streaming2').textContent = "Apple Music is a music service provided by Apple that provides access to millions of songs from the iTunes Store library.";
    document.getElementById('streaming3').textContent = "Spotify is the most popular streaming service that allows you to legally listen to music tracks, audiobooks, and podcasts..";
};

function search_overlay_1(){
    document.getElementsByClassName('search-overlay')[0].style.display = 'flex'
    document.getElementsByTagName('main')[0].style.filter = 'blur(2px) brightness(50%)'
    document.getElementsByTagName('main')[0].style.pointerEvents = 'none'
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    document.getElementsByClassName('CloseSearchButton')[0].style.visibility = 'visible'
};

function search_overlay_2(){
    document.getElementsByClassName('search-overlay')[0].style.display = 'none'
    document.getElementsByTagName('main')[0].style.filter = 'none'
    document.getElementsByTagName('main')[0].style.pointerEvents = 'all'
    document.getElementsByTagName('body')[0].style.overflowY = 'scroll'
    document.getElementsByClassName('CloseSearchButton')[0].style.visibility = 'hidden'
};

function goingoutside() {
    if (!confirm("Вы согласны перейти на внешний ресурс?")) {
        alert("Вы не покинули страницу");
        event.preventDefault();
    }
}