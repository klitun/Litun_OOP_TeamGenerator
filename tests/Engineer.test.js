const Engineer = require('../lib/Engineer');

test('Engineer info is created?', () => {
    const engineer = new Engineer('Sam', 2683, 'sam.samwise@gmail.com', 'samWise');

    expect(engineer.name).toBe('Sam');
    expect(engineer.id).toBe(2683);
    expect(engineer.email).toBe('sam.samwise@gmail.com');
    expect(engineer.github).toBe('samWise')
});

test('getGithub works?', () => {
    const engineer = new Engineer('Sam', 2683, 'sam.samwise@gmail.com', 'samWise');

    expect(engineer.getGithub()).toBe('samWise');
});

test('getRole works?', () => {
    const engineer = new Engineer('Sam', 2683, 'sam.samwise@gmail.com', 'samWise');

    expect(engineer.getRole()).toBe('Engineer');
});