const Employee = require('../lib/Employee');

test('Employee base info is created?', () => {
    const employee = new Employee('Sam', 2683, 'sam.samwise@gmail.com');

    expect(employee.name).toBe('Sam');
    expect(employee.id).toBe(2683);
    expect(employee.email).toBe('sam.samwise@gmail.com');

});

test('getId works?', () => {
    const employee = new Employee('Sam', 2683, 'sam.samwise@gmail.com');

    expect(employee.getId()).toBe(2683);
});

test('getName works?', () => {
    const employee = new Employee('Sam', 2683, 'sam.samwise@gmail.com');

    expect(employee.getName()).toBe('Sam');
});

test('getEmail works?', () => {
    const employee = new Employee('Sam', 2683, 'sam.samwise@gmail.com');

    expect(employee.getEmail()).toBe('sam.samwise@gmail.com');
});

test('getRole works?', () => {
    const employee = new Employee('Sam', 2683, 'sam.samwise@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});