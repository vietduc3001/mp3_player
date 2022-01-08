// Do du lieu 
function renderList(listSong) {
    let list = document.querySelector('.list');
    let htmls = listSong.map((song) => {
        return `
            <li class="item" id="${song.id}">
            <img src="${song.thumb}" alt="" class="item-thumb">
                <div>
                    <h4 class="item-name">${song.name}</h4>
                    <h5 class="item-singer">${song.singer}</h5>
                </div>
            </li> 
        `;
    });
    list.innerHTML = htmls.join('');
}
renderList(listSongs);

// Xu ly khi bam vao bai hat trong danh sach bai hat
let songItems = document.querySelectorAll('.item');
songItems.forEach((songItem) => {
    songItem.addEventListener('click', () => {
        indexSong = songItem.id - 1;
        currentSong = listSongs[indexSong];
        loadSong(currentSong);
        song.play();
        setInterval(displayTime, 500);
        playIcon.classList.remove('play-active');
        pauseIcon.classList.add('play-active');
        isPlaying = true;
    })
});
