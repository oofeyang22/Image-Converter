window.jsPDF = window.jspdf.jsPDF;

const input = document.querySelector("#url");
const convertBtn = document.querySelector("button");
const img= document.querySelector("img");
const pdfBtn= document.querySelector("#pdf");
const webpBtn= document.querySelector("#webp");
const jpegBtn= document.querySelector("#jpeg");


let pdfData;

input.addEventListener("change", () => {
    let file= input.files[0];
    if(!file) return;
    img.src= URL.createObjectURL(file);

    let pdfImg= new FileReader();

    pdfImg.onloadend= function (){
        pdfData = pdfImg.result;
    }
    pdfImg.readAsDataURL(file)
});

convertBtn.addEventListener("click", (file) => {
    convertBtn.innerText= "Downloading";
    if(file){
        let canvas= document.createElement("canvas");
        let ctx= canvas.getContext("2d");
        canvas.height= img.naturalHeight;
        canvas.width= img.naturalWidth;

        
        ctx.drawImage(img, 0, 0);
        
        canvas.toBlob((blob) => {
            const newImg= document.createElement("img");
            const url= URL.createObjectURL(blob);

            newImg.src= url;
            let aTag= document.createElement("a");
            aTag.href= url;
            aTag.download=``;
            aTag.click();
            aTag.remove();
           
        }, "image/png", 0.95);
        setInterval(()=> {convertBtn.innerText= "Convert to png"}
        , 1000)
 
    }else{ 
        alert(`failed to download`)
    }
});


webpBtn.addEventListener("click", (file) => {
    webpBtn.innerText= "Downloading";
    if(file){
        let canvas= document.createElement("canvas");
        let ctx= canvas.getContext("2d");
        canvas.height= img.naturalHeight;
        canvas.width= img.naturalWidth;

        
        ctx.drawImage(img, 0, 0);
        
        canvas.toBlob((blob) => {
            const newImg= document.createElement("img");
            const url= URL.createObjectURL(blob);

            newImg.src= url;
            let aTag= document.createElement("a");
            aTag.href= url;
            aTag.download=``;
            aTag.click();
            aTag.remove();
           
        }, "image/webp", 0.95);
        setInterval(()=> {webpBtn.innerText= "Convert to webp"}
        , 1000)
    }else{
        alert(`failed to download`)
    }
});
jpegBtn.addEventListener("click", (file) => {
    jpegBtn.innerText= "Downloading";
    if(file){
        let canvas= document.createElement("canvas");
        let ctx= canvas.getContext("2d");
        canvas.height= img.naturalHeight;
        canvas.width= img.naturalWidth;

        
        ctx.drawImage(img, 0, 0);
        
        canvas.toBlob((blob) => {
            const newImg= document.createElement("img");
            const url= URL.createObjectURL(blob);

            newImg.src= url;
            let aTag= document.createElement("a");
            aTag.href= url;
            aTag.download=``;
            aTag.click();
            aTag.remove();
           
        }, "image/jpeg", 0.95);
        setInterval(()=> {jpegBtn.innerText= "Convert to jpeg"}
        , 1000)
    }else{
        alert(`failed to download`)
    }
});




pdfBtn.addEventListener("click", () => {
    pdfBtn.innerText= "Downloading";
    if(pdfData){
        var doc= new jsPDF();
        doc.addImage(pdfData, 15, 15);
        doc.save("Img.pdf");
        setInterval(()=> {pdfBtn.innerText= "Convert to pdf"}
        , 2000)
    }else{
        alert(`failed to download`)
    }
  
    
});