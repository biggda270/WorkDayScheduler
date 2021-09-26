import moment from "https://cdn.skypack.dev/moment@2.29.1";

var store = window.localStorage;

var container = $(".container");

var now = moment();

var currentTime = {text: moment().format("h:00 A"), hour:moment().hour()};

$("#day").text(now.format(dddd MMMM DD, YYYY));

var range = (start, end, step) => {
    return Array.from(
        Array.from(Array(Math.ceil((end -start) / step)).keys()),
        (x => start + x * step
           
    );
};

const hoursOfTheDay = Array.from(new Array(24)).map((v, i) => {
    const text =moment().hour(i).format("h:00 A");
    const hour = moment().hour(i);
    return {text, hour};

});

function color(time) {
    return time.text === currentTime.text
    ? "bg-red-300"
    : time.hour < now
    ? "bg-gray-300"
    : "bg-green-200";
    
}

hoursOfTheDay.forEach((hr) => {
    const grid = $(
        <form data-name="${hr.text}" class="grid grid-cols-12 border-
        gray-500 "></form>.
    )
})