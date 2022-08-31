function oldEnough(age: number): never | boolean {
    if (age > 59) {
        throw Error("Jesteś za stary!");
    }
    if (age <= 18) {
        return false;
    }
    return true;
}

function howMuchYouWeigh(kilograms: number): never | string | boolean {
    if (kilograms > 100) {
        throw new Error("You are fat");
    } else {
        return 'waga w normie';
    }
    return true;
}