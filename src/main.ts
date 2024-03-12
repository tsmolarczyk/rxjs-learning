import { Observable, of, from } from "rxjs";
//
// of("Alice", "Ben", "Charlie").subscribe({
//   next: value => console.log(value),
//   complete: () => console.log("Completed"),
// });
//
// from(["Alice", "Ben", "Charlie"]).subscribe({
//   next: value => console.log(value),
//   complete: () => console.log("Completed"),
// });

const somePromise = new Promise((resolve, reject) => {
  // resolve("Resolved!");
  reject("Rejected!");
});

const observableFromPromise$ = from(somePromise);

observableFromPromise$.subscribe({
  next: value => console.log(value),
  error: error => console.log(error, "error"),
  complete: () => console.log("Completed!"),
});
