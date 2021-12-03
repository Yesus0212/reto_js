// Variables Globales

let userName = ""
let userImg = ""
let randomNumber =""

const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1;
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();
const week = getWeek(dateObj);
const mili = dateObj.getTime();

let tagValue ="";
let tags =[];

// Funciones
const renderResult = (response) => {

    const result = Object.values(response);
    const tagObject= result[0]
    const renderTags= Object.values(tagObject[0])    
    console.log(renderTags)


    renderTags.forEach(element => {
        $("#tagSelector").append(`<option value="${element}" id="${element}">${element}</option>`);
    });   
};

const postResult = (response) => {

    const result = Object.values(response);
    const renderUser = result[0];
    console.log(renderUser)


    userName = renderUser.map(user => {
        return user.name;
    });

    userImg = renderUser.map(img => {
        return img.image;
    });

    const dataLength = userName.length;

    randomNumber = Math.floor(Math.random()*(dataLength))
};

function getWeek(currentDate){
    let oneJan = new Date(currentDate.getFullYear(), 0, 1);
    let numberOfDays = Math.floor((currentDate - oneJan) / (24 * 60 * 60 * 1000));
    let result = Math.ceil((currentDate.getDay() + 1 + numberOfDays) / 7);    
    return result;
};



//Get Tags
$.ajax({
    method: 'GET',
    url: 'http://localhost:8080/tags',
    data: JSON.stringify({}),
    success: (response) => {
        renderResult(response)
        console.log(response)
    },
    error: (error) => {
        console.log(error);
    },
    async: true,
});


//Get Users
$.ajax({
    method: 'GET',
    url: 'http://localhost:8080/users',
    data: JSON.stringify({}),
    success: (response) => {
        postResult(response)
    },
    error: (error) => {
        console.log(error);
    },
    async: true,
});

// Listener select tags
$(document).on("change", "#tagSelector", ()=> {
    tagValue = $("#tagSelector option:selected").text();
    tags.push(tagValue)
})

//Listener submit button
$("#saveButton").click((response) => {
    let titlePost = $("#titlePost").val();
    let postTags = tags;
    let postBody = $("#postBody").val();
    let postImg = $("#postImg").val();

    const post = {    
        user: userName[randomNumber],
        userImg: userImg[randomNumber],
        title : titlePost,
        content : postBody,
        tags : {
            t1 : postTags[0],
            t2 : postTags[1],
            t3 : postTags[2],
            t4 : postTags[3]
        },
        coverImage : postImg,
        datePublication : {
            day : day,
            miliseconds : mili,
            month : month,
            year : year,
            week : week
        },
        image : postImg,
        likes : 3, 
        comments : 1,   
        unicorns : 15,
    };

    //Post create post
    $.ajax({
        method:'POST',
        url:'http://localhost:8080/posts',
        headers:{
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(post),
        success:(response) => {
            console.log(response);
        },
        error:(error) => {
            console.log(error);
        },

        async:true,
    }); 

})

const displayTitleAside = () => {
    let titleAside = $("#titleAside");
    let tagAside = $("#tagAside");
    let contentAside = $("#contentAside");
    titleAside.css("display", "block")
    tagAside.css("display", "none")
    contentAside.css("display", "none")
}

const displayTagAside = () => {
    let titleAside = $("#titleAside");
    let tagAside = $("#tagAside");
    let contentAside = $("#contentAside")
    titleAside.css("display", "none")
    tagAside.css("display", "block")
    contentAside.css("display", "none")
}

const displayContentAside = () => {
    let titleAside = $("#titleAside");
    let tagAside = $("#tagAside");
    let contentAside = $("#contentAside")
    titleAside.css("display", "none")
    tagAside.css("display", "none")
    contentAside.css("display", "block")
}


