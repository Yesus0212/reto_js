// Se recupera el id del post a leer de la url de llamado
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('p');

$.ajax({
    method:'GET',
    url: `https://desafio-js-3435a-default-rtdb.firebaseio.com/posts/${id}.json`,
    data: JSON.stringify({}),
    success: (response) => {
        post2 = Object.keys(response);
        console.log(post2)
        post = Object.values(response);          
        renderResPost(post);
    },
    error: (error) => {
        console.log(error);
    },
    async: true,
});


const renderResPost = (post) => {

    console.log(post);
        
    // Sección de SCORES DINAMICOS
    $('.numbers#reactions').text(post[5]);
    $('.numbers#unicorns').text(post[8]);
    $('.numbers#comments').text(post[0]);
    
    // Dato de imageCover DINAMICO
    const imgCover = post[2];
    $('img#imgCover').attr({src:imgCover});
    
    const title = post[7];
    $('h1#title').text(title);
    
    // SIGUEN LOS TAGS
    const divTags = $('div#contTags');
    
    const tags = Object.values(post[6]);
    tags.forEach(tag => {
        const anchorTag = $(`<a href="#" class="text-black-50 me-3"><span class="text-black-50">#</span>${tag}</a>`);
        divTags.append(anchorTag);
    });

    const imgAvatar = post[10];
    $('img.avatar').attr({src:imgAvatar});
    
    const userName = post[9]
    $('#userName').text(userName);

    $('#userName2').text(userName);

    const datePost = dateTimer(post[3]);
    $('p#datePost').text(datePost);

    const content = post[1]
    $('p#postContent').text(content)

}    

// 3: "datePublication"

const dateTimer = (datePublication) => {

    let compoundDate = "Posted on ";

    const currentDay = new Date().getTime();
    const days = Math.floor((currentDay - datePublication.miliseconds)/(1000*60*60*24));
    const hours = Math.floor(((currentDay - datePublication.miliseconds)-(days*(1000*60*60*24)))/(1000*60*60));

    switch(datePublication.month){
        case 1:
            compoundDate += `Jan ${datePublication.day}`;
            break;
        case 2:
            compoundDate += `Feb ${datePublication.day}`;
            break;
        case 3:
            compoundDate += `Mar ${datePublication.day}`;
            break;
        case 4:
            compoundDate += `Apr ${datePublication.day}`;
            break;
        case 5:
            compoundDate += `May ${datePublication.day}`;
            break;
        case 6:
            compoundDate += `Jun ${datePublication.day}`;
            break;
        case 7:
            compoundDate += `Jul ${datePublication.day}`;
            break;
        case 8:
            compoundDate += `Aug ${datePublication.day}`;
            break;
        case 9:
            compoundDate += `Sep ${datePublication.day}`;
            break;
        case 10:
            compoundDate += `Oct ${datePublication.day}`;
            break;
        case 11:
            compoundDate += `Nov ${datePublication.day}`;
            break;
        case 12:
            compoundDate += `Dec ${datePublication.day}`;
            break;
    }

    

    return compoundDate;

};
