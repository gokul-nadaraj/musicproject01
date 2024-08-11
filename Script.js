
const music = new Audio('music/wave.mp3');
// music.play();




const songs = [
  {
    id: '1',
    songName: "Hukum<br><div class='subtitle'>Jailer</div>",
    Poster: "img/1.png"


  },

  {
    id: '2',
    songName: "Vikram Tile Track<br><div class='subtitle'>Vikram</div>",
    Poster: "img/2.png"

  },

  {
    id: '3',
    songName: "Lokiversion<br><div class='subtitle'>Leo</div>",
    Poster: "img/6.png"


  },
  {
    id: '4',
    songName: "Fear Song<br><div class='subtitle'>Devara</div>",
    Poster: "img/4.png"
  },

  // // }, 
  {
    id: '5',
    songName: "Adangatha Asuran<br><div class='subtitle'>Rayaan</div>",
    Poster: "img/5.png"


  },

  {
    id: '6',
    songName: "Na Ready<br><div class='subtitle'>Leo</div>",
    Poster: "img/3.png"

  },
  {
    id: '7',
    songName: "Ethirthu Nill<br><div class='subtitle'>Briyani</div>",
    Poster: "img/7.png"


  }, {
    id: '8',
    songName: "Venmagam Penaga<br><div class='subtitle'>Yaradi Ne Mohini</div>",
    Poster: "img/8.png"


  }, {
    id: '9',
    songName: "Kan Pesum Varthaigal<br><div class='subtitle'>7G Rainbow Colony</div>",
    Poster: "img/9.png"


  }, {
    id: '10',
    songName: "Ne Epo Pulla<br><div class='subtitle'>Kumki</div>",
    Poster: "img/10.png"


  }, {
    id: '11',
    songName: "Venmagam<br><div class='subtitle'>Yaradi Ne Mohini</div>",
    Poster: "img/11.png"


  }, {
    id: '12',
    songName: "Na nanana<br><div class='subtitle'>Briyani</div>",
    Poster: "img/7.png"


  }, {
    id: '13',
    songName: "Katrukullae<br><div class='subtitle'>Sarvam</div>",
    Poster: "img/13.png"


  }, {
    id: '14',
    songName: "Oru Nalaikul<br><div class='subtitle'>Yaradi Ne Mohini</div>",
    Poster: "img/8.png"


  }, {
    id: '15',
    songName: "Siragugal<br><div class='subtitle'>Sarvam</div>",
    Poster: "img/15.png"


  },


]
console.log(songs)

// Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
//   element.getElementsByTagName('img')[0].src = songs[i].post;
//   element.getElementsByTagName('h5')[0].innerHTML =songs[i].songName;
// })

Array.from(document.getElementsByClassName('songItem')).forEach((element, i) => {
  element.getElementsByTagName('img')[0].src = songs[i].Poster;
  element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


let masterplay = document.getElementById('MasterPlay')

let wave = document.getElementsByClassName('wave')[0];


masterplay.addEventListener('click', () => {
  if (music.paused || music.currentTime < -0) {
    music.play();
    masterplay.classList.remove('bi-play-fill')
    masterplay.classList.add('bi-pause-fill')
    wave.classList.add('active2');

  }
  else {
    music.pause();
    masterplay.classList.add('bi-play-fill');
    masterplay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');

  }



})


const makeallplay = () => {

  Array.from(document.getElementsByClassName('playlistplay')).forEach((element) => {

    element.classList.add('bi-play-circle-fill')
    element.classList.remove('bi-pause-circle-fill')

  })



}

const makeallbacgrounds = () => {

  Array.from(document.getElementsByClassName('songItem')).forEach((element) => {

    element.style.background = `rgb(105,105,170,0)`

  })



}

let index = 0;


let poster_master_play = document.getElementById('poster_master_play')
let title =document.getElementById('title')
Array.from(document.getElementsByClassName('playlistplay')).forEach((element) => {

 
  element.addEventListener('click', (e) => {

    index = e.target.id;
    makeallplay();
    e.target.classList.remove('bi-play-circle-fill')
    e.target.classList.add('bi-pause-circle-fill')

    music.src = `music/${index}.mp3`
    poster_master_play.src = `img/${index}.png`
    music.play()

    let song_title = songs.filter((ele) => {

      return ele.id == index;

    })
    song_title.forEach(ele => {
      let { songName } = ele;
      title.innerHTML = songName

    })

    masterplay.classList.remove('bi-play-fill')
    masterplay.classList.add('bi-pause-fill')
    wave.classList.add('active2');

    music.addEventListener('ended', () => {
      masterplay.classList.add('bi-play-fill');
      masterplay.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');

    })

    makeallbacgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index}`].style.background = `rgb(105,105,170,0)`
  })

})

let curentstart = document.getElementById('currentStart')
let curentend = document.getElementById('currentEnd')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {

  let music_curr = music.currentTime;
  let music_durr = music.duration;

  let min = Math.floor(music_durr / 60);
  let sec = Math.floor(music_durr % 60)

  if (sec < 10) {
    sec = `0${sec}`

  }



  curentend.innerText = `${min}:${sec}`

  let min1 = Math.floor(music_curr / 60);
  let sec1 = Math.floor(music_curr % 60)

  if (sec1 < 10) {
    sec1 = `0:${sec1}`

  }



  curentstart.innerText = `${min1}:${sec1}`

  let progressbar = parseInt((music.currentTime/music.duration)*100);
  seek.value = progressbar;
  let seekbar = seek.value;

  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;

})

seek.addEventListener('change',()=>{

  music.currentTime =seek.value * music.duration/100;

})

music.addEventListener('ended',()=>{
  masterplay.classList.add('bi-play-fill')
  masterplay.classList.remove('bi-pause-fill')
  wave.classList.remove('active2');

})

let vol_icon =document.getElementById('vol-icon')
let vol =document.getElementById('vol')
let vol_dot =document.getElementById('vol_dot')
let vol_bar = document.getElementsByClassName('vol_bar')[0];


vol.addEventListener('change',()=>{

  if(vol.value == 0){
  vol_icon.classList.remove('bi-volume-down-fill')
  vol_icon.classList.add('bi-volume-mute-fill')
  vol_icon.classList.remove('bi-volume-up-fill')

  }

  if(vol.value > 0){
    vol_icon.classList.add('bi-volume-down-fill')
    vol_icon.classList.remove('bi-volume-mute-fill')
    vol_icon.classList.remove('bi-volume-up-fill')
  
    }

    if(vol.value > 50){
      vol_icon.classList.remove('bi-volume-down-fill')
      vol_icon.classList.remove('bi-volume-mute-fill')
      vol_icon.classList.add('bi-volume-up-fill')
    
      }

  
      let vol_a = vol.value;
      vol_bar.style.width =`${vol_a}%`;
      vol_dot.style.left =`${vol_a}%`;

      music.volume =vol_a/100;


})

let back=document.getElementById('back')
let next=document.getElementById('next')

// back.addEventListener('click',()=>{
//   index -=1

//   if (index <1) {
//     index = Array.from(document.getElementsByClassName('songItem')).length;
    
//   }

//   music.src = `music/${index}.mp3`;
//   poster_master_play.src = `img/${index}.png`
//     music.play()

//     let song_title = songs.filter((ele) => {

//       return ele.id == index;

//     });
//     song_title.forEach(ele => {
//       let { songName } = ele;
//       title.innerHTML = songName

//     });
//     makeallplay();

//     document.getElementById(`${index}`).classList.remove('bi-play-fill')
//     document.getElementById(`${index}`) .classList.add('bi-pause-fill')

//     makeallbacgrounds();
//     Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = `rgb(105,105,170,0)`;


// });
// next.addEventListener('click',()=>{
// index +=1
//   if ( index > Array.from(document.getElementsByClassName('songItem')).length);
//     {
//     index =1;
//   }

//   music.src = `music/${index}.mp3`
//   poster_master_play.src = `img/${index}.png`
//     music.play();

//     let song_title = songs.filter((ele) => {

//       return ele.id == index;

//     });
//     song_title.forEach(ele => {
//       let { songName } = ele;
//       title.innerHTML = songName

//     })
//     makeallplay();

//     document.getElementById(`${index}`).classList.remove('bi-play-fill')
//     document.getElementById(`${index}`) .classList.add('bi-pause-fill')

//     makeallbacgrounds();
//     Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = `rgb(105,105,170,0)`;


// });
 back.addEventListener('click', () => {
  index -= 1;

  if (index < 1) {
    index = Array.from(document.getElementsByClassName('songItem')).length;
  }

  music.src = `music/${index}.mp3`;
  poster_master_play.src = `img/${index}.png`;
  music.play();

  let song_title = songs.filter((ele) => {
    return ele.id == index;
  });

  song_title.forEach(ele => {
    let { songName } = ele;
    title.innerHTML = songName;
  });

  makeallplay();

  document.getElementById(`${index}`).classList.remove('bi-play-fill');
  document.getElementById(`${index}`).classList.add('bi-pause-fill');

  makeallbacgrounds();
  Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = `rgb(105,105,170,0)`;
 });

 next.addEventListener('click', () => {
  index += 1;
  
  if (index > Array.from(document.getElementsByClassName('songItem')).length) {
    index = 1;
  }

  music.src = `music/${index}.mp3`;
  poster_master_play.src = `img/${index}.png`;
  music.play();

  let song_title = songs.filter((ele) => {
    return ele.id == index;
  });

  song_title.forEach(ele => {
    let { songName } = ele;
    title.innerHTML = songName;
  });

  makeallplay();

  document.getElementById(`${index}`).classList.remove('bi-play-fill');
  document.getElementById(`${index}`).classList.add('bi-pause-fill');

  makeallbacgrounds();
  Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = `rgb(105,105,170,0)`;
 });


 let left_scroll= document.getElementById("box1")
 let right_scroll= document.getElementById('box2')

 let pop_song = document.getElementsByClassName('pop_song')[0];

 console.log(left_scroll,right_scroll,pop_song)

 left_scroll.addEventListener('click',()=>{
  pop_song.scrollLeft -=330;
 })

 right_scroll.addEventListener('click',()=>{
  pop_song.scrollLeft +=330;
 })



 let left_scrolls = document.getElementById('box3');
 let right_scrolls = document.getElementById('box4');
 
 let item = document.getElementsByClassName('item')[0];
 
 left_scrolls.addEventListener('click', () => {
   item.scrollLeft -= 330;
 })
 
 right_scrolls.addEventListener('click', () => {
   item.scrollLeft += 330;
 });
 


