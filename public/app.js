// localhost:3000/api?q=ain+el+melh
const sendQForm = document.querySelector("#sendQForm");
const sendQ = document.querySelector("#sendQ");
const locationInputEle = document.querySelector("#location");

const getWeatherData = () => {
    fetch(`/api?q=${locationInputEle.value}`)
        .then((res) => res.json())
        .then((res) =>
            console.log(
                `
                    الجو: ${res.current.condition.text}
                    درجة الحرارة: ${res.current.feelslike_c}
                `
            )
        );
};

sendQForm.addEventListener("submit", (eve) => {
    eve.preventDefault();
    getWeatherData();
});
