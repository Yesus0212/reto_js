// Current Week
const currentWeek = () => {

    currentDate = new Date();
    let oneJan = new Date(currentDate.getFullYear(), 0, 1);
    let numberOfDays = Math.floor((currentDate - oneJan) / (24 * 60 * 60 * 1000));
    let result = Math.ceil((currentDate.getDay() + 1 + numberOfDays) / 7);
    return result;
    // console.log(result, 'semana');

}


let btnFilters = $('.btn-filter');
let rightFilters = $('.right-filter');



/* Filters Events */
btnFilters.click(function(event) {

    let filter = event.target.id;
    console.log(filter);

    switch (filter) {
        case 'feed':
            renderPosts(feedFilter(postList));
            break;
        case 'latest':
            renderPosts(latestFilter(postList));
            break;
        case 'week':
            renderPosts(topWeekFilter(weekFilter(postList)));
            break;
        case 'month':
            renderPosts(topMonthFilter(monthFilter(postList)));
            break;
        case 'year':
            renderPosts(topYearFilter(yearFilter(postList)));
            break;
        case 'top':
            $('.right-filter').toggleClass('d-flex').toggleClass('dNone');
            console.log('cliick en tooop');
            break;
    }

});


/* Week filter */
const weekFilter = (response) => {

    let weekArray = [];
    let week = currentWeek();
    console.log(week, 'LA semana actual')


    console.log(response);
    response.forEach((element) => {

        console.log(element.datePublication.week);
        if (element.datePublication.week == week) {
            weekArray.push(element);
        }

    });

    return weekArray;

}

/* Top week filter */
const topWeekFilter = (arrayWeek) => {

    console.log(arrayWeek, 'recibe');
    arrayWeek.sort((a, b) => {

        return b.likes - a.likes;
    })

    console.log(arrayWeek);
    return arrayWeek;

}

/* Month Filter */

const monthFilter = (response) => {

    let monthArray = [];
    let month = dateObj.getUTCMonth() + 1;

    response.forEach((element) => {


        if (element.datePublication.month == month) {
            monthArray.push(element);
        }

    });

    return monthArray;

}

/* Top month filter */

const topMonthFilter = (arrayMonth) => {

    arrayMonth.sort((a, b) => {

        return b.likes - a.likes;
    })

    console.log(arrayMonth);
    return arrayMonth;
}



/* Year Filter */
const yearFilter = (response) => {

    let yearArray = [];
    let year = dateObj.getUTCFullYear();

    response.forEach((element) => {

        if (element.datePublication.year == year) {
            yearArray.push(element);
        }

    });

    return yearArray;

}


/* Top year filter */
const topYearFilter = (arrayYear) => {

    arrayYear.sort((a, b) => {

        return b.likes - a.likes;
    })

    console.log(arrayYear);
    return arrayYear;

}


/* Latest */


const latestFilter = (response) => {

    console.log(response);

    response.sort((a, b) => {
        console.log(a.datePublication.miliseconds - b.datePublication.miliseconds);
        return b.datePublication.miliseconds - a.datePublication.miliseconds;
    })

    console.log(response);
    return response;

}



/* Feed */

const feedFilter = (response) => {
    return response;
}