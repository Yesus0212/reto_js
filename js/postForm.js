$.ajax({
    method: 'GET',
    url: 'https://desafio-js-3435a-default-rtdb.firebaseio.com/tags/.json',
    data: JSON.stringify({}),
    success: (response) => {
        renderResult(response)
    },
    error: (error) => {
        console.log(error);
    },
    async: true,
});


const renderResult = (response) => {

    const result = Object.values(response);

    result.forEach(element => {
        $("#tagSelector").append(`<option value="${element}" id="${element}">${element}</option>`);
    });   
};


const postResult = (response) => {

    const result = Object.values(response);

    let userName = result.map(user => {
        return user.name;
    });

    let userImg = result.map(img => {
        return img.image;
    });

    const dataLength = userName.length;

    let randomNumber = Math.floor(Math.random()*(dataLength))
    
    const post = {    
        user: userName[randomNumber],
        userImg: userImg[randomNumber],
        title : "Test Post",
        content : "Description 😋 This is a collection of JavaScript tips and tricks. you can refer to it and apply it to make your code more concise. But don't overdo it, it can make your code difficult to read and maintain. Hope everyone contributes, thanks. Table Of Content 📃 Description Table Of Content Array Object Destructuring Operator Comparison Others",
        tags : {
            t1 : "typescript",
            t2 : "javascript",
            t3 : "bugs",
            t4 : "regexp"
        },
        coverImage : "https://res.cloudinary.com/practicaldev/image/fetch/s---HtCca8l--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/578hv3qdakkb3r3ptoui.png",
        datePublication : {
            day : day,
            month : month,
            year : year,
            week : week
        },
        image : "",
        likes : 3, 
        comments : 1   
    };

    const savePost = () => {
        $.ajax({
            method:'POST',
            url:'https://desafio-js-3435a-default-rtdb.firebaseio.com/posts/.json',
            data: JSON.stringify(post),
            success:(response) => {
                console.log(response);
            },
            error:(error) => {
                console.log(error);
            },
    
            async:true,
        }); 
    }
};


$.ajax({
    method: 'GET',
    url: 'https://desafio-js-3435a-default-rtdb.firebaseio.com/users/.json',
    data: JSON.stringify({}),
    success: (response) => {
        postResult(response)
    },
    error: (error) => {
        console.log(error);
    },
    async: true,
});


function getWeek(currentDate){

    let oneJan = new Date(currentDate.getFullYear(), 0, 1);
    let numberOfDays = Math.floor((currentDate - oneJan) / (24 * 60 * 60 * 1000));
    let result = Math.ceil((currentDate.getDay() + 1 + numberOfDays) / 7);
    
    return result;

};

const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1;
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();
const week = getWeek(dateObj);

let tagValue2 ="";
let tags =[];

$(document).on("change", "#tagSelector", ()=> {
    tagValue2 = $("#tagSelector option:selected").text();
    tags.push(tagValue2)
})

let postArray =


$("#saveButton").click((response) => {
    let titlePost = $("#titlePost").val();
    let postTags = $("#postTags").val();
    let postBody = $("#postBody").val();
    let postImg = $("#postImg").val();
    
    let aaaaa = tags;
    // tagValueOption.selected ? Option.text
})



