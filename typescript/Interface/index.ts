interface Computer {
    code(): void
}

class Laptop implements Computer {
    public code(): void {
        console.log('Coding with Laptop...');
    }
}

class Desktop implements Computer {
    public code(): void {
        console.log('Coding with Desktop...');
    }
}

class Developer {
    public devApp(laptop: Computer): void {
        laptop.code();
    }
}

const jd = new Developer();
const laptop: Computer = new Laptop()
const desktop: Computer = new Desktop();
jd.devApp(desktop);