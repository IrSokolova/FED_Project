<script lang="ts">
    import type { Email } from './comic-info';
    import type { ImageNumber } from './comic-info';
    import type { ImageData } from './comic-info';

    const email : Email = 'i.sokolova@innopolis.university';
    let promise = getImage(email);

    async function getImage(email : Email) {
        const resp = await fetch('https://fwd.innopolis.app/api/hw2?email=' + email);
        let data : ImageNumber = await resp.json();
        const resp1 = await fetch('https://getxkcd.vercel.app/api/comic?num=' + data);
        let imageData : ImageData = await resp1.json();

        return imageData;
    }
</script>

{#await promise}
    <p>...waiting</p>
{:then imageData}
    <h2 class="div_header"> Take a look at this image </h2>
    Title of the image:
    <p>{imageData.title}</p>
    Date of upload:
    <p> {new Date(imageData.year, imageData.month - 1, imageData.day).toLocaleDateString()} </p>
    Alternative text:
    <p> {imageData.alt} </p>
    <img src={imageData.img} alt={imageData.alt}>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<style>
    h2 {
        color: blueviolet;
        margin-left: 20px;
    }

</style>