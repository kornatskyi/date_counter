const script = require('./script.js')


//Tests for local time only
test('input May 28, 2021 06:24:00 return ', () => {
    expect(script.countTheDateOfRoast(new Date('May 28, 2021 06:24:00'))).toBe("Order now, we roast &amp; mail on Mon 5/31");
});

test('input May 24, 2021 05:24:00 return ', () => {
    expect(script.countTheDateOfRoast(new Date('May 24, 2021 05:24:00'))).toBe("Order now, we roast &amp; mail on Mon 5/24");
});

test('input May 24, 2021 06:24:00 return ', () => {
    expect(script.countTheDateOfRoast(new Date('May 24, 2021 06:24:00'))).toBe("Order now, we roast &amp; mail on Wed 5/26");
});

test('input May 25, 2021 06:24:00 return ', () => {
    expect(script.countTheDateOfRoast(new Date('May 25, 2021 06:24:00'))).toBe("Order now, we roast &amp; mail on Wed 5/26");
});

test('input May 26, 2021 05:24:00 return ', () => {
    expect(script.countTheDateOfRoast(new Date('May 26, 2021 05:24:00'))).toBe("Order now, we roast &amp; mail on Wed 5/26");
});

test('input May 27, 2021 06:24:00 return ', () => {
    expect(script.countTheDateOfRoast(new Date('May 27, 2021 06:24:00'))).toBe("Order now, we roast &amp; mail on Fri 5/28");
});

test('input May 28, 2021 05:24:00 return ', () => {
    expect(script.countTheDateOfRoast(new Date('May 28, 2021 05:24:00'))).toBe("Order now, we roast &amp; mail on Fri 5/28");
});



