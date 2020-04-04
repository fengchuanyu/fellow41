// export let a = 10;
// export let foo = ()=>"hello"

class Person{
  constructor(name){
    this.name = name
  }
  showName(){
    console.log(this.name);
  }
}
export default Person;