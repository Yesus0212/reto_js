/*
 * EndPoint para acceso a la base de prueba
 * https://desafio-js-3435a-default-rtdb.firebaseio.com/
*/

const renderResult = (response) => {

    // const result = Object.keys(response);
    // const result2 = Object.entries(response);
    const result = Object.values(response);

    console.log(result);

    result.forEach(element => {

        // const date = new Date(element.datePublication);
        // console.log(date);

        console.log(element.datePublication);


    });

    
};


$.ajax({
    method: 'GET',
    url: 'https://desafio-js-3435a-default-rtdb.firebaseio.com/posts/.json',
    data: JSON.stringify({}),
    success: (response) => {
        renderResult(response);
    },
    error: (error) => {
        console.log(error);
    },
    async: true,
});

const user = {
    userName : "Keff",
    email : "nombrekeff@gmail.com",
    image : "https://res.cloudinary.com/practicaldev/image/fetch/s--EcNvkhmC--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png",
    name : "Keff Dev"
}

const save = () => {
    $.ajax({
        method:'POST',
        url:'https://desafio-js-3435a-default-rtdb.firebaseio.com/users/.json',
        data: JSON.stringify(user),
        success:(response) => {
            console.log(response);
        },
        error:(error) => {
            console.log(error);
        },

        async:true,
    });    
};

function getWeek(currentDate){

    let oneJan = new Date(currentDate.getFullYear(), 0, 1);
    let numberOfDays = Math.floor((currentDate - oneJan) / (24 * 60 * 60 * 1000));
    let result = Math.ceil((currentDate.getDay() + 1 + numberOfDays) / 7);
    
    return result;

};

const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1; //months from 1-12
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();
const week = getWeek(dateObj);

const post = {    
    user: "AmnaAbd",
    title : "JavaScript tips & tricks",
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
};




