const albums = ["Process.jpg", "Lahai.jpg", "MMATBS.jpg", "3.jpg", "Nectar.jpg", "Ten.jpg", "After_Hours.png", "TPAB.png", "HUT.jpg", "Process.jpg", "Lahai.jpg", "MMATBS.jpg", "3.jpg", "Nectar.jpg", "Ten.jpg", "After_Hours.png", "TPAB.png", "HUT.jpg"]
const alts = ["Process", "Lahai", "Mr Morale and The Big Steppers", "Actual life 3", "Nectar", "ten days", "After Hours", "To Pimp A Butterfly", "Hurry Up Tomorrow", "Process"]
const links = ["https://open.spotify.com/album/4rA6i9oXyMhh77pqK0cXKv", "https://open.spotify.com/album/5GuWww4OaildzkmTTlfMN3", "https://open.spotify.com/album/79ONNoS4M9tfIA1mYLBYVX", "http://open.spotify.com/album/5q2iMctlDvEMYVIawF6Vop", "https://open.spotify.com/album/65edimIChzNNK8VGn56pIK", "https://open.spotify.com/album/3DQueEd1Ft9PHWgovDzPKh", "https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj", "https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP", "https://open.spotify.com/album/3OxfaVgvTxUTy7276t7SPU","https://open.spotify.com/album/4rA6i9oXyMhh77pqK0cXKv", "https://open.spotify.com/album/5GuWww4OaildzkmTTlfMN3", "https://open.spotify.com/album/79ONNoS4M9tfIA1mYLBYVX", "http://open.spotify.com/album/5q2iMctlDvEMYVIawF6Vop", "https://open.spotify.com/album/65edimIChzNNK8VGn56pIK", "https://open.spotify.com/album/3DQueEd1Ft9PHWgovDzPKh", "https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj", "https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP", "https://open.spotify.com/album/3OxfaVgvTxUTy7276t7SPU"]

function click(index){
    if (links[index]) {
        window.open(links[index], "blank");
    }
}
const length = albums.length;
const track = document.querySelector('.track');
let j = 0;
function slide(){
    let currentIndex = j;
    let image = document.createElement('img');
    image.src = 'images/' + albums[j];
    image.alt = 'images/' + alts[j];
    track.appendChild(image);
    image.addEventListener('click', () => click(currentIndex));
    j = (j+1) % length;
    setTimeout(slide,250)
}

slide();
click();

