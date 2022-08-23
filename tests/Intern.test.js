const Intern = require('../lib/Intern');

test('Intern info is created?', () => {
    const intern = new Intern('Sam', 2683, 'sam.samwise@gmail.com', 'Shire Uni');

    expect(intern.name).toBe('Sam');
    expect(intern.id).toBe(2683);
    expect(intern.email).toBe('sam.samwise@gmail.com');
    expect(intern.school).toBe('Shire Uni')
});

test('getSchool works?', () => {
    const intern = new Intern('Sam', 2683, 'sam.samwise@gmail.com', 'Shire Uni');

    expect(intern.getSchool()).toBe('Shire Uni');
});

test('getRole works?', () => {
    const intern = new Intern('Sam', 2683, 'sam.samwise@gmail.com', 'Shire Uni');

    expect(intern.getRole()).toBe('Intern');
});