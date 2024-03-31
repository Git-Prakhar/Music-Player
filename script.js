const allSongs = document.querySelectorAll('.sec2Card');
const filters = document.querySelectorAll('.filters');
const audioPlayer = document.getElementById('song1');
filters[0].classList.add('filterSelected');

function playTopSong(code) {
    const songList =
        [
            'Until I Found You -Stephen Sanchez ft. Em Beihold (Lyric Video).mp3',
            'CHMCL SØUP x LXRY PXNK  - Loneliness.mp3', 'OneRepublic - Counting Stars.mp3',
            'The Kid LAROI, Justin Bieber - STAY (Official Video).mp3'
        ]
    const cards = document.querySelectorAll('.sec1Card');
    const licBtn = document.querySelectorAll('.sec1CardBuyBtn');
    cards.forEach((ele) => {
        ele.classList.remove('songClicked');
    })
    licBtn.forEach((ele) => {
        ele.classList.remove('licenseAnim');
    })
    cards[code].classList.add('songClicked');
    licBtn[code].classList.add('licenseAnim');
    audioPlayer.src = songList[code];
    audioPlayer.play();
    document.getElementById('disc').classList.remove('moveDisc');
    const notes = document.querySelectorAll('.note');
    for (let i = 1; i <= notes.length; i++) {
        notes[i - 1].classList.remove(`note${i}`);
    }
    setTimeout(() => {
        document.getElementById('disc').classList.add('moveDisc');
        for (let i = 1; i <= notes.length; i++) {
            notes[i - 1].classList.add(`note${i}`);
        }
    }, 500);
}

function toggleVolume() {
    const vol = document.getElementById('muteBtn');
    if (vol.getAttribute('isMuted') == 'false') {
        vol.setAttribute('isMuted', 'true');
        vol.style.backgroundImage = 'url(mute.png)';
        document.querySelectorAll('audio').forEach((ele) => {
            ele.muted = true;
        })
    } else {
        vol.setAttribute('isMuted', 'false');
        vol.style.backgroundImage = 'url(volume.png)';
        document.querySelectorAll('audio').forEach((ele) => {
            ele.muted = false;
        })
    }
}

function filterAll() {
    filters[0].classList.add('filterSelected');
    filters[1].classList.remove('filterSelected');
    filters[2].classList.remove('filterSelected');
    filters[3].classList.remove('filterSelected');
    filters[4].classList.remove('filterSelected');

    allSongs.forEach(element => {
        element.style.display = 'inline-block';
    });
}

function filterHindi() {
    filters[0].classList.remove('filterSelected');
    filters[1].classList.add('filterSelected');
    filters[2].classList.remove('filterSelected');
    filters[3].classList.remove('filterSelected');
    filters[4].classList.remove('filterSelected');

    allSongs.forEach(element => {
        element.style.display = 'none';
        if (element.classList.contains('hindi')) {
            element.style.display = 'inline-block'
        }
    });
}

function filterEnglish() {
    filters[0].classList.remove('filterSelected');
    filters[1].classList.remove('filterSelected');
    filters[2].classList.add('filterSelected');
    filters[3].classList.remove('filterSelected');
    filters[4].classList.remove('filterSelected');

    allSongs.forEach(element => {
        element.style.display = 'none';
        if (element.classList.contains('english')) {
            element.style.display = 'inline-block'
        }
    });
}

function filterAnime() {
    filters[0].classList.remove('filterSelected');
    filters[1].classList.remove('filterSelected');
    filters[2].classList.remove('filterSelected');
    filters[3].classList.remove('filterSelected');
    filters[4].classList.add('filterSelected');
    allSongs.forEach(element => {
        element.style.display = 'none';
        if (element.classList.contains('jp')) {
            element.style.display = 'inline-block'
        }
    });
}

function filterPhonk() {
    filters[0].classList.remove('filterSelected');
    filters[1].classList.remove('filterSelected');
    filters[2].classList.remove('filterSelected');
    filters[3].classList.add('filterSelected');
    filters[4].classList.remove('filterSelected');
    allSongs.forEach(element => {
        element.style.display = 'none';
        if (element.classList.contains('phonk')) {
            element.style.display = 'inline-block'
        }
    });
}

const songsURL = {
    lonliness: 'CHMCL SØUP x LXRY PXNK  - Loneliness.mp3',
    stay: 'The Kid LAROI, Justin Bieber - STAY (Official Video).mp3',
    dilDiyanGallan: 'Atif Aslam - Dil Diyan Gallan (Lyrics) (Tiger Zinda Hai Soundtrack).mp3',
    countingStar: 'OneRepublic - Counting Stars.mp3',
    onePieceOpening: 'Ado - New Genesis (UTA from ONE PIECE FILM RED).mp3',
    untilIFoundYou: 'Until I Found You -Stephen Sanchez ft. Em Beihold (Lyric Video).mp3',
    unravel: 'Tokyo Ghoul - Opening  Unravel.mp3',
    metamorphosis: 'INTERWORLD _METAMORPHOSIS_.mp3',
    chammakChallo: 'Lyrical_ Chammak Challo  Ra One  ShahRukh Khan  Kareena Kapoor.mp3',
    double: 'Double.mp3',
    yourNameOpening: 'スパークル [original ver.] -Your name. Music Video edition- 予告編 from new album人間開花初回盤DVD.mp3',
    aankhMarey: 'SIMMBA_ Aankh Marey  Ranveer Singh, Sara Ali Khan  Tanishk Bagchi,Mika Singh,Neha Kakkar,  Kumar S.mp3',
    rapture: 'INTERWORLD - RAPTURE (PHONK).mp3',
    gurenge: 'Demon Slayer  OP  _Gurenge_ by LiSA HD.mp3',
    cupid: 'FIFTY FIFTY - Cupid (Twin Version) (Lyrics).mp3',
    palpal: 'Blackmail - Pal Pal Dil Ke Paas Tum Rehti Ho - Kishore Kumar.mp3'
}

let isPlaying = false;
const playBtns = document.querySelectorAll('.sec2CardPlayBtn');
let lastCode = -1;

function playSong(str, code) {
    if (!isPlaying && code != lastCode) {
        isPlaying = true;
        playBtns[code].style.backgroundImage = 'url(pauseIcon.png)'
        audioPlayer.src = songsURL[str];
        audioPlayer.play();
    }
    else if (isPlaying && code == lastCode) {
        isPlaying = false;
        playBtns[code].style.backgroundImage = 'url(playIcon.png)';
        audioPlayer.pause();
    }
    else if (isPlaying && code != lastCode) {
        for (let i = 0; i < playBtns.length; i++) {
            playBtns[i].style.backgroundImage = 'url(playIcon.png)';
        }
        playBtns[code].style.backgroundImage = 'url(pauseIcon.png)'
        audioPlayer.src = songsURL[str];
        audioPlayer.play();
    }
    lastCode = code;
}

function buySong(str) {
    const songNames = {
        lonliness: 'CHMCL SØUP x LXRY PXNK  - Loneliness',
        stay: 'The Kid LAROI, Justin Bieber - STAY',
        dilDiyanGallan: 'Atif Aslam - Dil Diyan Gallan',
        countingStar: 'OneRepublic - Counting Stars',
        onePieceOpening: 'Ado - New Genesis',
        untilIFoundYou: 'Until I Found You -Stephen Sanchez ft. Em Beihold',
        unravel: 'Tokyo Ghoul - Opening  Unravel',
        metamorphosis: 'INTERWORLD _METAMORPHOSIS_',
        chammakChallo: 'Lyrical_ Chammak Challo  Ra One  ShahRukh Khan  Kareena Kapoor',
        double: 'Doublë - Yeat',
        yourNameOpening: 'スパークル -Your name. Music Video edition- 予告編 from new album人間開花初回盤DVD',
        aankhMarey: 'SIMMBA_ Aankh Marey',
        rapture: 'INTERWORLD - RAPTURE',
        gurenge: 'Demon Slayer  OP  _Gurenge_ by LiSA HD',
        cupid: 'FIFTY FIFTY - Cupid',
        palpal: 'Blackmail - Pal Pal Dil Ke Paas Tum Rehti Ho - Kishore Kumar'
    }
    let songName = songNames[str];
    document.getElementById('songName').innerHTML = songName;
    document.getElementById('section3').scrollIntoView();
}

async function buyBtn() {
    alert('You have purchased the song');
    document.body.style.scrollBehavior = 'initial';
    document.getElementById('section1').scrollIntoView();
    setTimeout(() => {
        location.reload();
    }, 1000);
}