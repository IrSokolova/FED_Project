let altText = document.getElementById("hw2_alt_text");
let date = document.getElementById("hw2_date");
let title = document.getElementById("hw2_title");
const email = 'i.sokolova@innopolis.university';
const prom = getImage(email);


async function getImage(email) {
    console.log("in getID")
    const resp = await fetch('https://fwd.innopolis.app/api/hw2?email=' + email);
    let data = await resp.json();
    const resp1 = await fetch('https://getxkcd.vercel.app/api/comic?num=' + data);
    data = await resp1.json();
    let outputImg = document.createElement('img');
    outputImg.src = data.img;
    outputImg.alt = data.alt;

    altText.innerText = data.alt;
    title.innerText = data.title;
    let date_in = new Date(data.year, data.month - 1, data.day);
    date.innerText = date_in.toLocaleDateString();
    document.body.appendChild(outputImg);
    console.log(data);

    return data;
}

