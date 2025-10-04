const weeknd = ["MUSanRwGC7o","3Or19RJQTqg","u6lihZAcy4s","iIWoYaJRryw","QLCpqdqeoII","ll6sBa3Dafs","kxgj5af8zg4","i4ZuseKFBF0","E3QiD99jPAg","rsEne1ZiQrk"]
const sampha = ["njHcZMLDdSc","z1i2Y7O-m1o","W0KU4eTbE2M","FF8okFt4bGg","KWEbYsXeDvE","ogYC-8hs870","UhE5io7Nyk4","GxVdTQyEPQo","1YPtbploIyU","THre1r5KGR0"]
const kendrick = ["9Vnbsuny2LI","qtrYfIxHU7A","Yar-WWUnDlw","vKEHz93lZ44","w-nDeRqPNos","6QbLcwVAsl0","dhL3QvLsKfU","Lx3MGrafykU","HT00kQhrBVU","67OyntfiV6Q"]
const fred = ["peIBCNTY8hA","x4RXNO9oaS0","-nXOxGlmAUM","vVn3zOJvuH8","t300KmFTb-w","sQRfp2Xp6U0","Cl6Rz1Uvi2M","ARYM9ebZ6r8","l4UkYBr1NnA","kfJCKSKGsgE"]
const joji = ["ZEY9UCzzbcQ","K09_5IsgGe8","7ekU_0Cf2Mk","opT0m_pSGCQ","i2dc7tzzFXM","ujriV3vkC9w","FvOpPeKSf_4","d4EcEtgIB_g","YU_qjzYAHR0","JForF7Lulg0"]

function play(name){
  const btn = document.getElementById("random-btn");
  console.log(btn);
  btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * (name.length));
    const video = name[randomIndex];
    window.open("https://www.youtube.com/watch?v="+video, "_blank");
  });
}

const artists = {
  "Weeknd-page": weeknd,
  "Sampha-page": sampha,
  "Kendrick-page": kendrick,
  "Fred-page": fred,
  "Joji-page": joji
};
const background = {
  "Weeknd-page": "artists/Weeknd.jpg",
  "Sampha-page": "artists/sampha.jpg",
  "Kendrick-page": "artists/kendrick.webp",
  "Fred-page": "artists/fred.png",
  "Joji-page": "artists/joji.jpg"
};


const bodyId = document.body.id;

const selectedArtist = artists[bodyId];

if (selectedArtist) {
  play(selectedArtist);
} else {
  console.warn("No artist found for body ID:", bodyId);
}

const bgImage = background[bodyId];

document.documentElement.style.setProperty("--main-image",`url(${bgImage})`);


document.querySelectorAll(".albums img").forEach(img => {
  img.addEventListener("click", () => {
    const link = img.getAttribute("data-link");
    window.open(link, "_blank")
  });
});

