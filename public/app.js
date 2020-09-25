// localhost:3000/api?q=ain+el+melh
const sendQForm = document.querySelector("#sendQForm");
const sendQ = document.querySelector("#sendQ");
const locationInputEle = document.querySelector("#location");
const msgLocation = document.querySelector("#msgLocation");

const getWeatherData = () => {
    fetch(`/api?q=${locationInputEle.value}`)
        .then((res) => res.json())
        .then(
            (res) =>
                (msgLocation.innerHTML = `
                    <p>${locationInputEle.value}</p>
                    <p>${res.current.condition.text}</p>
                    <p>${res.current.feelslike_c}&deg;</p>
                `)
        );
};

sendQForm.addEventListener("submit", (eve) => {
    eve.preventDefault();
    getWeatherData();
});
