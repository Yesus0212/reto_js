const dateObj = new Date();

const fechaMili = Date.now();
console.log(fechaMili);

// Ya existe en el script
currentWeek = () => {

    currentDate = new Date();
    let oneJan = new Date(currentDate.getFullYear(), 0, 1);
    let numberOfDays = Math.floor((currentDate - oneJan) / (24 * 60 * 60 * 1000));
    let result = Math.ceil((currentDate.getDay() + 1 + numberOfDays) / 7) - 1;
    return result;

}


/* Week filter */

const weekFilter = (response) => {

    let weekArray = [];
    let week = currentWeek();
    console.log(week);
    const result = Object.values(response);
    result.forEach((element) => {

        console.log(element.datePublication.week);
        if (element.datePublication.week == week) {
            weekArray.push(element);
        }

    });

    return weekArray;

}

/* Top week filter */

const topWeekFilter = (arrayWeek) => {


    arrayWeek.sort((a, b) => {

        return a.likes - b.likes;
    })

    console.log(arrayWeek);


}

/* Month Filter */

const monthFilter = (response) => {

    let monthArray = [];
    let month = dateObj.getUTCMonth() + 1;
    console.log(month);
    const result = Object.values(response);
    result.forEach((element) => {

        console.log(element.datePublication.month);
        if (element.datePublication.month == month) {
            monthArray.push(element);
        }

    });

    return monthArray;

}

/* Top month filter */

const topMonthFilter = (arrayMonth) => {

    arrayMonth.sort((a, b) => {

        return a.likes - b.likes;
    })

    console.log(arrayMonth);

}

/* Year Filter */

const yearFilter = (response) => {

    let yearArray = [];
    let year = dateObj.getUTCFullYear();
    console.log(year);
    const result = Object.values(response);
    result.forEach((element) => {

        console.log(element.datePublication.year);
        if (element.datePublication.year == year) {
            yearArray.push(element);
        }

    });

    return yearArray;

}


/* Top year filter */

const topYearFilter = (arrayYear) => {

    arrayYear.sort((a, b) => {

        return a.likes - b.likes;
    })

    console.log(arrayYear);

}



$.ajax({    
    method: 'GET',
        url: 'https://desafio-js-3435a-default-rtdb.firebaseio.com/posts/.json',
            success: (response) => { 
        topWeekFilter(weekFilter(response));
        topMonthFilter(monthFilter(response));
        topYearFilter(yearFilter(response));

    },
        error: (error) => {       console.log(error);     },
        async: true,
      
});