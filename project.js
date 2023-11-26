const loaddata0 =(global) => {
    // console.log("Hello");
    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((res) => res.json())
    .then((datas) => displayData(datas.data));

}


const loadData = (category) => {

    fetch(`https://openapi.programming-hero.com/api/videos/category/${category}`)
    
    .then((res) => res.json())
    .then((datas) => displayData(datas.data))
};

const loadmusic = (category) => {
    // console.log("Hello");
    fetch(`https://openapi.programming-hero.com/api/videos/category/${category}`)
    .then((res) => res.json())
    .then((datas) => displayData1(datas.data));

}

const loadcomedy = (category) => {
    // console.log("Hello");
    fetch(`https://openapi.programming-hero.com/api/videos/category/${category}`)
    .then((res) => res.json())
    .then((datas) => displayData2(datas.data));

}
const loaddrawing = (category) => {
    // console.log("Hello");
    fetch(`https://openapi.programming-hero.com/api/videos/category/${category}`)
    .then((res) => res.json())
    .then((datas) => displayData3(datas.data));

}

const displayData = (datas) => {

    const mediaContainer = document.getElementById("media-container");
    mediaContainer.innerHTML = '';

    datas.forEach((media) => {
        console.log(media);
        const card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `
            <img class="box-img" src=${media.thumbnail} alt="">
            
            <h3>${media?.title}</h3>
            <img class="icon-img" src=${media.authors[0].profile_picture} alt="">
            <p>${media.authors[0]?.profile_name}</p>
            <p>${media.others.views}</p>  

            `;
        mediaContainer.appendChild(card);
    });
};



const displayData1 = (datas) => {
  
    const mediaContainer = document.getElementById("media-container");
    mediaContainer.innerHTML = '';

    datas.forEach((media) => {
        console.log(media);
        const card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `
            <img class="box-img" src=${media.thumbnail} alt="">
            
            <h3>${media?.title}</h3>
            <img class="icon-img" src=${media.authors[0].profile_picture} alt="">
            <p>${media.authors[0]?.profile_name}</p>
            <p>${media.others.views}</p>  

            `;
        mediaContainer.appendChild(card);
    });
};

const displayData2 = (datas) => {
 
    const mediaContainer = document.getElementById("media-container");
    mediaContainer.innerHTML = '';

    datas.forEach((media) => {
        console.log(media);
        const card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `
            <img class="box-img" src=${media.thumbnail} alt="">
            
            <h3>${media?.title}</h3>
            <img class="icon-img" src=${media.authors[0].profile_picture} alt="">
            <p>${media.authors[0]?.profile_name}</p>
            <p>${media.others.views}</p>  

            `;
        mediaContainer.appendChild(card);
    });
};

const displayData3 = (datas) => {

    const mediaContainer = document.getElementById("media-container");
    mediaContainer.innerHTML = '';

    datas.forEach((media) => {
        console.log(media);
        const card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `
            <img class="box-img" src=${media.thumbnail} alt="">
            
            <h3>${media?.title}</h3>
            <img class="icon-img" src=${media.authors[0].profile_picture} alt="">
            <p>${media.authors[0]?.profile_name}</p>
            <p>${media.others.views}</p>  

            `;
        mediaContainer.appendChild(card);
    });
};



// const displayData = (datas) => {
//     const mediaContainer = document.getElementById("media-container");

//     datas.forEach((media) => {
//         console.log(media);
//         const card = document.createElement("div");
//         card.classList.add("box");
//         card.innerHTML = `
//             <img class="box-img" src=${media.thumbnail} alt="">
            
//             <h3>${media?.title}</h3>
//             <img class="icon-img" src=${media.authors[0].profile_picture} alt="">
//             <p>${media.authors[0]?.profile_name}</p>
//             <p>${media.others.views}</p>  

//             `;
//         mediaContainer.appendChild(card);
//     });
// };










// for sorting data




const sortDataByViews = () => {

    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((res) => res.json())
    .then((datas) => {
        const sortedData = datas.data.sort((a, b) => b.others.views.localeCompare(a.others.views));

        displayData(sortedData);

    });

};

document.addEventListener("DOMContentLoaded", () => {
    loadData(1000);

    document.getElementById("sortBtn").addEventListener("click", sortDataByViews);

});


loaddata0();




