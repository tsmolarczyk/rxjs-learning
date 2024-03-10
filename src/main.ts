import { Observable } from 'rxjs';

const observable$ = new Observable<string>(subscriber => {
    console.log('Obserable execution')
    subscriber.next('Alice');
    setTimeout(()=> subscriber.next('Ben'),2000)
    setTimeout(()=>subscriber.next('Charlie') ,4000)
});

const subscription = observable$.subscribe( value => console.log(value))

setTimeout(()=> {
    console.log('ubsub')
    subscription.unsubscribe()
}, 3000)
