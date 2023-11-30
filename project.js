const loaddata0 =(global) => {

    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((res) => res.json())
    .then((datas) => displayData(datas.data));

}




const loaddata = (category) => {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${category}`)
        .then((res) => res.json())
        .then((datas) => displayData(datas.data, "media-container"));
};





const loadmusic = (category) => {
 
    fetch(`https://openapi.programming-hero.com/api/videos/category/${category}`)
    .then((res) => res.json())
    .then((datas) => displayData1(datas.data));

}

const loadcomedy = (category) => {

    fetch(`https://openapi.programming-hero.com/api/videos/category/${category}`)
    .then((res) => res.json())
    .then((datas) => displayData2(datas.data));

}



const loaddrawing = (category) => {
  
    fetch(`https://openapi.programming-hero.com/api/videos/category/${category}`)
    .then((res) => res.json())
    .then((datas) => displayData3(datas.data));

}







// const displayData = (datas, containerId) => {
//     const mediaContainer = document.getElementById(containerId);
//     mediaContainer.innerHTML = '';

//     datas.forEach((media) => {
//         console.log(media);

//         const card = document.createElement("div");
//         card.classList.add("box");

       
//         const currentDate = new Date();
//         const videoDate = new Date(media?.created_at);
//         const timeDiff = Math.abs(currentDate - videoDate);
//         const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//         const timeDuration = daysDiff > 0 ? `${daysDiff} days ago` : 'Today';

      
//         const verificationIcon = media?.verified ? '<i class="fas fa-check-circle"></i>' : '';

//         card.innerHTML = `
//             <img class="box-img" src=${media.thumbnail} alt="">
//             <h3>${media?.title} ${verificationIcon}</h3>
//             <img class="icon-img" src=${media.authors[0].profile_picture} alt="">
//             <p>${media.authors[0]?.profile_name}</p>
//             <p>${media.others.views}</p>
//             <p>Duration: ${timeDuration}</p>
//         `;

//         mediaContainer.appendChild(card);
//     });
// };

const displayData = (datas, containerId) => {
    const mediaContainer = document.getElementById(containerId);
    mediaContainer.innerHTML = '';

    datas.forEach((media) => {
        console.log(media);

        const card = document.createElement("div");
        card.classList.add("box");

        const currentDate = new Date();
        const videoDate = new Date(media?.created_at);
        const timeDiff = Math.abs(currentDate - videoDate);
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const timeDuration = daysDiff > 0 ? `${daysDiff} days ago` : 'Today';

        const verificationIcon = media?.authors[0]?.verified ? '<i class="fas fa-check-circle"></i>' : '';

        card.innerHTML = `
            <img class="box-img" src=${media.thumbnail} alt="">
            <h3>${media?.title} ${verificationIcon}</h3>
            <img class="icon-img" src=${media.authors[0].profile_picture} alt="">
            <p>${media.authors[0]?.profile_name} ${media.authors[0]?.verified ? '<i class="fas fa-check-circle"></i>' : ''}</p>
            <p>${media.others.views}</p>
            <p>Duration: ${timeDuration}</p>
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




const displayNoDataMessage = (containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '<img class="center" src="./images/Icon.png">';
};


const displayData3 = (datas) => {

    const mediaContainer = document.getElementById("media-container");
    mediaContainer.innerHTML = '';

    if (datas.length === 0) {
        displayNoDataMessage("drawing-container");
        return;
    }

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







const sortDataByViews = (category) => {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${category}`)
        .then((res) => res.json())
        .then((datas) => {
            const sortedData = datas.data.sort((a, b) => {
                const viewsA = parseFloat(a.others.views.replace(/[^\d.]/g, ''));
                const viewsB = parseFloat(b.others.views.replace(/[^\d.]/g, ''));
                return viewsB - viewsA; 
            });

            displayData(sortedData, `${category === 1000 ? 'media-container' : `${category === 1001 ? 'music-container' : `${category === 1003 ? 'comedy-container' : 'drawing-container'}`}`}`);
        })
        .catch((error) => {
            console.error(`Error fetching Sorted data for category ${category}: ${error}`);
            displayNoDataMessage(document.getElementById(`${category === 1000 ? 'media-container' : `${category === 1001 ? 'music-container' : `${category === 1003 ? 'comedy-container' : 'drawing-container'}`}`}`));
        });
};

document.getElementById("sortBtn").addEventListener("click", () => {
    sortDataByViews(1000); 
});




document.addEventListener("DOMContentLoaded", () => {
    loaddata(1000); 
    document.getElementById("sortBtn").addEventListener("click", sortDataByViews);
});




