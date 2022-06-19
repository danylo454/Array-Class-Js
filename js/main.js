// Людина
class Person {
  constructor(Name, Surname, MidleName, Age) {
    this.Name = Name;
    this.Surname = Surname;
    this.MidleName = MidleName;
    this.Age = Age;
  }
  ShowPerson() {
    console.log(
      `Name: ${this.Name}\nSurname: ${this.Surname}\nMidle Name: ${this.MidleName}\nAge: ${this.Age}`
    );
  }
}

//Квартира
class Flat {
  constructor(NumberOfRooms = 4) {
    this.persons = new Array();
    this.NumberOfRooms = NumberOfRooms;
  }
  NewPerson(person) {
    if (this.persons.length >= this.NumberOfRooms) {
      console.log("There is no more room for new people !!!");
    } else {
      this.persons.push(person);
    }
  }
  ShowFlatPersons() {
    this.persons.forEach((peopl) => {
      peopl.ShowPerson();
      console.log("=======================================");
    });
  }
  ShowInfoAboutFlat() {
    console.log(`MAX COUNT FLAT: ${this.NumberOfRooms}`);
    let a = this.persons.length;
    let tempEmtyRooms = this.NumberOfRooms - a;
    console.log(`Number of filled rooms: ${tempEmtyRooms}`);
  }
}
//Дім
class House {
  constructor(numberHouse = 5, NameHouse) {
    this.HouseName = NameHouse;
    this.NumberHouse = numberHouse;
    this.flats = new Array();
  }
  ShowFlat() {
    this.flats.forEach((element) => {
      console.log(this.HouseName);
      element.ShowInfoAboutFlat();
      console.log("===================");
    });
  }
  SetAtFlat(flat) {
    if (this.flats.length > this.NumberHouse) {
      console.log("There is no more room !!!");
    } else {
      this.flats.push(flat);
    }
  }
}

let person = new Person("Danil", "Ilchuk", "Volodimer", 20);
let person1 = new Person("Vlad", "Stepanyk", "Danilov", 33);
let person2 = new Person("Maks", "Okryk", "Olegov", 43);
let person3 = new Person("Igor", "Igryk", "Vasilov", 18);

let flat = new Flat(2);
flat.NewPerson(person);

let flat2 = new Flat(1);
flat.NewPerson(person2);

let house = new House(1, "Hotel");
house.SetAtFlat(flat);
house.SetAtFlat(flat2);
house.ShowFlat();
