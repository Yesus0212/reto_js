// Se recupera el id del post a leer de la url de llamado
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('p');

$.ajax({
    method: 'GET',
    url: `http://localhost:8080/posts/${id}`,
    data: JSON.stringify({}),
    success: (response) => {
        // post2 = Object.keys(response);
        // console.log(post2)
        // post = Object.values(response);
        // postArray = Object.values(post[0]);
        readPost = response.posts;
        renderResPost(readPost);

    },
    error: (error) => {
        console.log(error);
    },
    async: true,
});


const renderResPost = (post) => {

    console.log(post);

    // Sección de SCORES DINAMICOS
    $('.numbers#reactions').text(post.likes);
    $('.numbers#unicorns').text(post.unicorns);
    $('.numbers#comments').text(post.comments);

    // Dato de imageCover DINAMICO
    const imgCover = post.coverImage;
    $('img#imgCover').attr({ src: imgCover });

    const title = post.title;
    $('h1#title').text(title);

    // SIGUEN LOS TAGS
    const divTags = $('div#contTags');

    const tags = Object.values(post.tags);
    tags.forEach(tag => {
        const anchorTag = $(`<a href="#" class="text-black-50 me-3"><span class="text-black-50">#</span>${tag}</a>`);
        divTags.append(anchorTag);
    });

    const imgAvatar = post.userImg;
    $('img.avatar').attr({ src: imgAvatar });

    const userName = post.user;
    $('#userName').text(userName);
    $('#userNameRight').text(userName);

    const datePost = dateTimer(post.datePublication);
    $('p#datePost').text(datePost);

    const content = post.content;
    $('p#postContent').text(content)

}

// 3: "datePublication"

const dateTimer = (datePublication) => {

    let compoundDate = "Posted on ";

    const currentDay = new Date().getTime();
    const days = Math.floor((currentDay - datePublication.miliseconds) / (1000 * 60 * 60 * 24));
    const hours = Math.floor(((currentDay - datePublication.miliseconds) - (days * (1000 * 60 * 60 * 24))) / (1000 * 60 * 60));

    switch (datePublication.month) {
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