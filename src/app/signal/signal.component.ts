import { Component,effect,Signal,signal,WritableSignal } from '@angular/core';

@Component({
  selector: 'signalComponent',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
// user1=signal(
//   [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Doe', age: 40 }
//   ]
// );
// user2=
//   [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Doe', age: 40 }
//   ];
//   constructor(){
 
//     effect(() => {
//       console.log(this.user1());
//     });
//   }
// addUser(name: string, age: number) {
//   this.user1.update(users => [...users, { name, age }]);
// }
//    addUser1(name: string, age: number) {
//   this.user2.push({ name, age });
//    }

// ======================

// count:WritableSignal<number> = signal(10);
// message:WritableSignal<number|string|boolean> = signal(100);
//   increment() {
//       this.count.update(value => value + 1);
//     }
//     decrement() {
//       this.count.update(value => value - 1);
//     }
//     reset() {
//       this.count.set(0);
//     }
//     constructor(){
//       effect(() => {
//         console.log(this.count());
//       });
//     }
//     // message
// updateMessage() {
//   this.message.set('Hello, world!');
//   // this.message.set(209);
// }
// ==============computeSignal example=========

 products:WritableSignal<String[]> = signal(['Apple', 'Banana', 'Grapes', 'Avocado']);
 

 constructor() {
  effect(() => {
console.log(this.products());

  });
 }
 addProduct(product: string) {
   this.products.update(products => [...products, product]);
 }

}
