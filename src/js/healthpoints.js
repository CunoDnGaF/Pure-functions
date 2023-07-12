export default function countingHp(hero) {
    if(hero.health > 50) {
        return 'healthy';
    } else if(hero.health < 15) {
        return 'critical';
    } else {
        return 'wounded';
    }
}