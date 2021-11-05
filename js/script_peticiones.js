/*
 * EndPoint para acceso a la base de prueba
 * https://desafio-js-3435a-default-rtdb.firebaseio.com/
*/

const renderResult = (response) => {

    // const result = Object.keys(response);
    const result2 = Object.entries(response);
    // const result = Object.values(response);

    result2.forEach(element => {
        // const date = new Date(element.datePublication);
        // console.log(date);
        //console.log(element[1].likes);

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
    userName : "sgoulas",
    email : "sgoulas@devto.com",
    image : "https://res.cloudinary.com/practicaldev/image/fetch/s--QLm_gIcF--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/417615/142b6299-2605-443a-8bb7-a0bb4f6b4839.jpeg",
    name : "S goulas"
}

const dateObj = new Date(Date.UTC(2021, 10, 30, 0, 0, 0));
const month = dateObj.getMonth(); //months from 1-12
const day = dateObj.getDate();
const year = dateObj.getFullYear();
const week = getWeek(dateObj);

const post = {    
    user: "sgoulas",
    title : "I created an e-commerce site from scratch and kept a development diary over the course of 5 months",
    content : "Hello all,"

    +"I recently finished working on a personal project where I set up to create a simple e-commerce project from scratch in order to learn some new things and I would like to share it with anyone that might be interested."
        
    +"The stack includes: material-ui, nextjs, redux, redux-saga, redux-toolkit, jest with react-testing-library, apollo and more."
    
    +"I also tried to implemet SEO features like open graph protocol and structured metadata and validated the mark up and the application's accessibility through W3C and WAVE validators."
    
    +"The biggest point of interest in my opinion is the documentation. I kept a detailed development diary (over the span of 5 months) for each day I worked on the project which includes all my decisions (style / architecture / technology stack) as well as almost all the problems I faced and the crossroads I found myself on. In that regard, the project might be useful to junior and maybe medior developers that often wonder 'how do I start creating something from scratch?' or faced similar problems in their projects.",
    tags : {
        t1 : "react",
        t2 : "javascript",
        t3 : "webdev",
        t4 : "nextjs"
    },
    coverImage : "https://res.cloudinary.com/practicaldev/image/fetch/s--zZKBz_CE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zibj168e2c9xsdlojexh.png",
    datePublication : {
        day : day,
        month : month,
        year : year,
        week : week
    },
    image : "",
    likes : 356, 
    comments : 11   
};

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




