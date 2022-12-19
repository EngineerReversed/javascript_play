const button_b = document.getElementById('btn');
const button_p = document.getElementById('btn_paste');
const article_p = document.getElementById('content-paste');

button_p.addEventListener('click', async function (event) {
    article_p.textContent = ''
    try {
        const data = await navigator.clipboard.read();
        const clipBoardContent = data[0];   // taking first element as clipboard is an array of copied items
        imgBlob = await clipBoardContent.getType('image/png');  // image content need to be converted to binary
        const imgBlobURL = window.URL.createObjectURL(imgBlob);

        const img = document.createElement('img');  // creating image tag
        img.src = imgBlobURL;
        article_p.appendChild(img);
    } catch (error) {
        console.log(error);
        const text = navigator.clipboard.readText();
        article_p.textContent = text;
    }

})

button_b.addEventListener('click', async function (event) {
    const content = document.getElementById('content-copy').textContent
    out = await navigator.clipboard.writeText(content);
    const copied = navigator.clipboard.readText();
    console.log(copied);
});
