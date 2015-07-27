// Example Album
var albumPicasso = {
    name: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: '/assets/images/album_covers/01.png',
    songs: [
        { name: 'Blue', length: '4:26' },
        { name: 'Green', length: '3:14' },
        { name: 'Red', length: '5:01' },
        { name: 'Pink', length: '3:21' },
        { name: 'Magenta', length: '2:15' }
    ]
};

//Another Example Album
var albumMarconi = {
    name: 'The Telegraph',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { name: 'Hello, Operator?', length: '1:01' },
        { name: 'GreRing, ring, ring', length: '5:01' },
        { name: 'Fits in your pocket', length: '3:21' },
        { name: 'Can you hear me now?', length: '3:14' },
        { name: 'Wrong phone number', length: '2:15' }
    ]
};

//Third album
var albumJames = {
    name: 'The Decision',
    artist: 'Lebron James',
    label: 'CAVS',
    year: '2010',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { name: 'Drible, Drible, Drible', length: '4:22' },
        { name: 'Dolla Bills', length: '3:12' },
        { name: 'If The Shoes Fits', length: '5:31' },
        { name: 'Open Gym', length: '2:17' },
        { name: 'Cleveland, Stand Up', length: '5:37' }
    ]
};


var createSongRow = function(songNumber, songName, songLength) {
    
    var template =
        '<tr class="album-view-song-item">'
        '   <td class="song-item-number">' + songNumber + '</td>'
        '   <td class="song-item-title">' + songName + '</td>'
        '   <td class="song-item-duration">' + songLength + '</td>'
        '</tr>'
        ;
    
    return template;
    
};
//var globalAlbum;
var setCurrentAlbum = function(album) {
    //globalAlbum = album;
    //console.log(album);
    //#1
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
    
    //#2
    albumTitle.firstChild.nodeValue = album.name;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    
    //#3
    albumSongList.innerHTML = '';
    
    //#4
    for (i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
    }
    return album;
    
};

window.onload = function() {
    var albumArray = [albumPicasso,albumMarconi,albumJames];
    var curAlb = setCurrentAlbum(albumPicasso);
    
    document.getElementById('album-cover').addEventListener('click', function(event) {
        
        curAlb = setCurrentAlbum(nextItem(albumArray, curAlb)); 
    });

};

var nextItem = function (array, currentItem) {
    var currentItemPos = array.indexOf(currentItem);
    var nextItemPos = currentItemPos + 1;
    if (currentItemPos === array.length - 1) {
        nextItemPos = 0;
    }
    return array[nextItemPos];
}

