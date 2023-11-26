const loaddata =() => {
    // console.log("Hello");
    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((res) => res.json())
    .then((data) =>console.log(data.data));

}

const loadmusic =() => {
    // console.log("Hello");
    fetch("https://openapi.programming-hero.com/api/videos/category/1001")
    .then((res) => res.json())
    .then((data) =>console.log(data.data));

}

const loadcomedy =() => {
    // console.log("Hello");
    fetch("https://openapi.programming-hero.com/api/videos/category/1003")
    .then((res) => res.json())
    .then((data) =>console.log(data.data));

}
const loaddrawing =() => {
    // console.log("Hello");
    fetch("https://openapi.programming-hero.com/api/videos/category/1005")
    .then((res) => res.json())
    .then((data) => displayData(data.data));

}

const displayData = (data) => {
    console.log(data);
}
