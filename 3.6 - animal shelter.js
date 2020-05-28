/* Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first
out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
that type). They cannot select which specific animal they would like. Create the data structures to
maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
and dequeueCat. You may use the built-in Linked List data structure. */


class animalNode {
    constructor(type, arrivalTime) {
        this.type = type;
        this.arrivalTime = arrivalTime;
    }
}

class AnimalShelter {

    constructor() {
        this.animalsQueue = {
            'dog': [],
            'cat': []
        }
        this.animalCounter = 0
    }

    enqueue(type) {
        let newAnimal = new animalNode(type, this.animalCounter);
        this.animalsQueue[type].push(newAnimal);
        this.animalCounter++;
        console.log(type + ' added');
    }

    dequeueAny() {
        this.animalCounter--;
        if  (this.animalsQueue['dog'].length === 0) {
            console.log('Cat Removed');
            return this.animalsQueue['dog'].shift()
        }
        if  (this.animalsQueue['cat'].length === 0) {
            console.log('Dog Removed');
            return this.animalsQueue['dog'].shift()
        }
        if (this.animalsQueue['dog'][0].arrivalTime < this.animalsQueue['cat'][0].arrivalTime) {
            console.log('Dog Removed');
            return this.animalsQueue['dog'].shift()
        }
        else {
            console.log('Cat Removed');
            return this.animalsQueue['cat'].shift()
        }
    }

    dequeueDog() {
        if (this.animalsQueue['dog'].length !== 0) {
            this.animalCounter--;
            console.log('dog removed');
            return this.animalsQueue['dog'].shift();
        }
    }

    dequeueCat() {
        if (this.animalsQueue['cat'].length !== 0) {
            this.animalCounter--;
            console.log('cat removed');
            return this.animalsQueue['cat'].shift();
        }
    }
 }

 let testObj = new AnimalShelter();
 let cat = 'cat';
 let dog = 'dog';
 testObj.enqueue(cat);
 testObj.enqueue(cat);
 testObj.enqueue(cat);
 testObj.enqueue(cat);
 testObj.enqueue(dog);
 testObj.enqueue(cat);
 testObj.enqueue(dog);
 testObj.enqueue(cat);

 testObj.dequeueAny();
 testObj.dequeueDog();
 testObj.dequeueCat();
 testObj.dequeueAny();
 testObj.dequeueAny();
 testObj.dequeueAny();
 testObj.dequeueAny();
 testObj.dequeueAny();
