// function fun()
// {
//     return new Promise((res,rej)=>{
//         let random_number=Math.floor(Math.random()*10);
//         console.log(random_number);
        
//         if(random_number%2===0)
//         {
//             res("even number");
//         }
//         else{
//             rej("odd number");
//         }
//     })
// }
// // console.log(fun());
// fun()
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })



function downloadImage(url){
    return new Promise((res,rej)=>{
        console.log("file start downloading...");
        setTimeout(()=>{
            let img=url.split('/').pop();
            res(img);
        },3000);
    })
}

function Compress(img){
    return new Promise((res,rej)=>{
        console.log("file start compressing...")
        setTimeout(()=>{
            let cmp=img.split('.')[0]+".zip"
            res(cmp);
        },2000)
    })
}

function upload(cmp){
    return new Promise((res,rej)=>{
        console.log("file start uploading...");
        setTimeout(()=>{
            let uploaded="Data is uploaded at server"+cmp;
            res(uploaded)
        },1000)
    })
}

downloadImage("https://www.facebook.com/img.jpg")
.then((img)=>{
    console.log("file downloaded successfully...", img);
    return Compress(img);
})
.then((cmp)=>{
    console.log("file compress successfully...",cmp);
    return upload(cmp);
})
.then((uploaded)=>{
    console.log("file uploaded successfully...",uploaded);
})