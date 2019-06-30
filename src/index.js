console.log("IDs on webpage - started");

let processNames = function() {
    const names = document.querySelectorAll(".wall-comment-name .text-name:not([data-idified=true])");

    names.forEach((elem, key) => {
        if (!elem.getAttribute("data-IDified")) {
            let href = elem.href;
            let id = href.match(/\/([0-9]+)/gi);
            id ? id = id[0].replace('/', '') : "";

            elem.text = elem.text + ` [${id}]`;
            elem.setAttribute("data-IDified", "true");
        }
    });
};

setInterval(processNames, 1000);
