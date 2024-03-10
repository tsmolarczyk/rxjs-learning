import { Observable } from 'rxjs';

const myObservable$ = new Observable<string>(subscriber => {
    console.log('myObservable$')
    subscriber.next('Alice');
    subscriber.next('Ben');
    setTimeout(()=> {
        subscriber.next('Charlie');
    },2000);

    setTimeout(()=> {
        subscriber.error(new Error ('Failure'))
    }, 4000)
    
    return () => {
        console.log('Teardown')
    }
    
});

console.log('Before subscribe')
myObservable$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('completed'),
    error: (err) => console.log(err.message)
});
myObservable$.subscribe
console.log('After subscribe')

// import { Observable } from 'rxjs';
//
// const observable$ = new Observable<string>(subscriber => {
//     console.log('Obserable execution')
//     subscriber.next('Alice');
//     setTimeout(()=> subscriber.next('Ben'),2000)
//     setTimeout(()=>subscriber.next('Charlie') ,4000)
// });
//
// observable$.subscribe( value => console.log('sub1: ', value))
// observable$.subscribe( value => console.log('sub2: ', value))
