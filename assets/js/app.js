

    let year = +prompt('Введіть рік');

    console.log(year);

    if((year % 4 == 0) && (year % 100 !==0)) {
        console.log(`Високосний рік ${year}`);
    } else {
        console.log(`Невисокосний рік ${year}`);
    }
