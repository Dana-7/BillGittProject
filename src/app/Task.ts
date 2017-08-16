

export class Task {

    constructor (public name: string,
        public price : number,
        public quantity : number) {
    }

    toString () {
        return `Product : ${this.name}, price : ${this.price} , quantity: ${this.quantity}.`
    }

    getName(){
        return this.name;
    }

    getPrice(){
       return this.price;
    }

    getQuantity(){
        return this.quantity;
     }
 
 //   setCompleted(checkd: boolean){
  //      this.completed = checkd;
   // }
    
}
