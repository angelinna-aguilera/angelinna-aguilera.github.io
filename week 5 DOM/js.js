window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("filterContent").style.display = "none";
    document.getElementById("newContent").style.display = "none";
});

function showFilter() {
    let filterForm = document.getElementById("filterContent");
    let newForm = document.getElementById("newContent");

    newForm.style.display = "none";

    if (filterForm.style.display === "none") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }
}

function showAddNew() {
    let filterForm = document.getElementById("filterContent");
    let newForm = document.getElementById("newContent");

    filterForm.style.display = "none";

    if (newForm.style.display === "none") {
        newForm.style.display = "flex";
    } else {
        newForm.style.display = "none";
    }
}

function filterArticles() {

    let opinionCheck = document.getElementById("opinionCheckbox").checked;
    let recipeCheck = document.getElementById("recipeCheckbox").checked;
    let updateCheck = document.getElementById("updateCheckbox").checked;

    let articleList = document.getElementById("articleList");
    let article = articleList.getElementsByTagName("article");

    for (let i = 0; i < article.length; i++) {

        let a = article[i];

        if (a.className === "opinion") {

            if (opinionCheck) {
                a.style.display = "";
            } else {
                a.style.display = "none";
            }

        } else if (a.className === "recipe") {

            if (recipeCheck) {
                a.style.display = "";
            } else {
                a.style.display = "none";
            }

        } else if (a.className === "update") {

            if (updateCheck) {
                a.style.display = "";
            } else {
                a.style.display = "none";
            }

        }
    }
}

function addNewArticle() {

    let title = document.getElementById("inputHeader").value;
    let text = document.getElementById("inputArticle").value;
    let opinionRadio = document.getElementById("opinionRadio");
    let recipeRadio = document.getElementById("recipeRadio");
    let lifeRadio = document.getElementById("lifeRadio");
    let typeClass = "";
    let typeLabel = "";

    if (opinionRadio.checked) {
        typeClass = "opinion";
        typeLabel = "Opinion";
    } else if (recipeRadio.checked) {
        typeClass = "recipe";
        typeLabel = "Recipe";
    } else if (lifeRadio.checked) {
        typeClass = "update";
        typeLabel = "Update";
    }

    let articleList = document.getElementById("articleList");
    let article = document.createElement("article");
    article.className = typeClass;

    let marker = document.createElement("span");
    marker.className = "marker";
    marker.textContent = typeLabel;

    let h2 = document.createElement("h2");
    h2.textContent = title;

    let p1 = document.createElement("p");
    p1.textContent = text;

    let p2 = document.createElement("p");
    let link = document.createElement("a");
    link.href = "moreDetails.html";
    link.textContent = "Read more...";
    p2.appendChild(link);
    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    articleList.appendChild(article);

    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    opinionRadio.checked = false;
    recipeRadio.checked = false;
    lifeRadio.checked = false;

    filterArticles();
}