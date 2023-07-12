import countingHp from '../healthpoints.js';

test('healthStatus = healthy', () => {
    const hero = {name: 'Маг', health: 51};
    expect(countingHp(hero)).toBe('healthy');
});

test('healthStatus = wounded', () => {
    const hero = {name: 'Маг', health: 50};
    expect(countingHp(hero)).toBe('wounded');
});

test('healthStatus = critical', () => {
    const hero = {name: 'Маг', health: 14};
    expect(countingHp(hero)).toBe('critical');
});