let altText = document.getElementById("hw3_alt_text") as HTMLParagraphElement;
let date = document.getElementById("hw3_date") as HTMLParagraphElement;
let title = document.getElementById("hw3_title") as HTMLParagraphElement;
const email : Email = 'i.sokolova@innopolis.university';
const prom = getImage(email);

type Email = string;
type ImageNumber = string;
interface ImageData{
    "img" : string;
    "alt" : string;
    "title" : string;
    "year" : number;
    "month" : number;
    "day" : number;
}


async function getImage(email : Email) {
    const resp = await fetch('https://fwd.innopolis.app/api/hw2?email=' + email);
    let data : ImageNumber = await resp.json();
    const resp1 = await fetch('https://getxkcd.vercel.app/api/comic?num=' + data);
    let imageData : ImageData = await resp1.json();

    let outputImg = document.createElement('img') as HTMLImageElement;
    outputImg.src = imageData.img;
    outputImg.alt = imageData.alt;

    altText.innerText = imageData.alt;
    title.innerText = imageData.title;
    let date_in = new Date(imageData.year, imageData.month - 1, imageData.day);
    date.innerText = date_in.toLocaleDateString();
    document.body.appendChild(outputImg);
    console.log(imageData);

    return data;
}

