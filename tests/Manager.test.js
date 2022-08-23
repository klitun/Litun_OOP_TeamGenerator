const Manager = require('../lib/Manager');

test('Intern info is created?', () => {
    const manager = new Manager('Sam', 2683, 'sam.samwise@gmail.com', 404);

    expect(manager.name).toBe('Sam');
    expect(manager.id).toBe(2683);
    expect(manager.email).toBe('sam.samwise@gmail.com');
    expect(manager.office).toBe(404)
});

test('getOffice works?', () => {
    const manager = new Manager('Sam', 2683, 'sam.samwise@gmail.com', 404);

    expect(manager.getOffice()).toBe(404);
});

test('getRole works?', () => {
    const manager = new Manager('Sam', 2683, 'sam.samwise@gmail.com', 404);

    expect(manager.getRole()).toBe('Manager');
});