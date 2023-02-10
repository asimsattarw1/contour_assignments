const sorting = (a, b, c) => {
    let sorted = "";
    if (a >= b && a >= c && b <= a && b >= c) {
        sorted += a + ", " + b + ", " + c;
    }

    else if (b >= a && b >= c && a <= b && a >= c) {
        sorted += b + ", " + a + ", " + c;
    }

    else if (c >= a && c >= b && a >= b && a <= c) {
        sorted += c + ", " + a + ", " + b;
    }

    else if (c >= a && c >= b && b >= a && b <= c) {
        sorted += c + ", " + b + ", " + a;
    }

    console.log(sorted);
}

sorting(7, 9, 8);