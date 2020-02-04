// var fruits = [1, "Orange", ["Lemon", "Apple"], "Mango"];
// var huruf = [1, "O", "L", "A", "M"];
// var gabung = fruits.concat(huruf)
// fruits.splice(2,0,"jeruk","cerry")
// document.write(fruits[2][0])


// var siswa = { nama: 'saya' , usia: 19 }

// var mobil={
//     merek:'Avanza',
//     berat:850,
//     warna:'putih',
//     gas:function (){
//         return 'mobil melaju'
        
//     },
//     rem:function (){
//         return 'mobil berhenti'
//     }
// }

// document.write(mobil.gas())



// function siswa(nama , usia ){
//     var anak = {}
//     anak.nama = nama,
//     anak.usia = usia
//     return anak
// }

// console.log(siswa("agus",21))



// var siswa = new Object ()
// siswa.nama = 'Tompel',
// siswa.usia = 23

// console.log(siswa.nama)
// console.log(siswa.usia)

// const siswa = {
//     muslim: false,
//     perkenalan: function () {
//       console.log(`Nama saya ${this.nama}. Apakah saya muslim ? ${this.muslim}`);
//     }
//   }; 
//   const saya = Object.create(siswa);
     
//   saya.nama = "paijo"
//   saya.muslim = true
//   saya.perkenalan();



// let nama = 'siswa';
// let nama = 'murid';
// console.log(nama) //error

// let nama = 'siswa';
// {
//     let nama = 'murid';
//     console.log(nama)//murid
// }
// console.log(nama)//siswa





// class Santris {
//   constructor(nama) {
//     this.nama = nama
//   }
// }
// let santri = new Santris ('siswa')
// console.log(santri)//Santris {nama: 'siswa'}



// class Santris {
//   getSantris(nama) {
//     return 'namanya' + nama
//   }
// }
// let santri = new Santris () 
// console.log(santri.getSantris('hafif'))//namanya hafif



// class PersegiPanjang{
   
//   constructor (){
//      this.panjang = 20
//      this.lebar = 15
//   }

//   hitungLuasPersegiPanjang(){
//      return this.panjang * this.lebar
//  }
// }




// class PersegiPanjangCopy{
//   constructor (panjang ,lebar){
//      this.panjang = panjang
//      this.lebar = lebar
//   }

//   hitungLuasPersegiPanjang(){
//      return this.panjang * this.lebar
//  }
// }


// const persegiPanjang = new PersegiPanjangCopy( 10, 3)
// console.log(persegiPanjang)
// console.log(persegiPanjang.hitungLuasPersegiPanjang())






// class Hitung extends PersegiPanjangCopy{

// }

// const hitung = new Hitung(12,10)
// console.log(hitung)
// console.log(hitung.hitungLuasPersegiPanjang())






// function Person(gender) {
//    this.jenis = gender;
//    this.sayhello =function () {
//       console.log('hello i am a ' + this.jenis)
//    }
   
// }

// var man = new Person('laki')
// var women = new Person('cewek')

// man.sayhello()





// const person = { name: 'Faisal', age: 17 };
// const { name, age } = person;
// console.log(name); //'Faisal'
// console.log(age); //17





// let nama,umur,alamat;
// const person = {name :'faisal',age :17};
// ({name:nama,age:umur,alamat='jogja'} = person);
// console.log(nama);
// console.log(umur);
// console.log(alamat)


// function tambahAwal(nilai) {
//     return function (pertama,kedua) {
//         return nilai +pertama+kedua
//     }
// }

// var tambahdua = tambahAwal(2)

// document.write(tambahdua(3,5)) 


// var officers = [
//     { id: 20, name: 'Captain Piett' },
//     { id: 24, name: 'General Veers' },
//     { id: 56, name: 'Admiral Ozzel' },
//     { id: 88, name: 'Commander Jerjerrod' }
//   ];

// var officeid = officers.map(office => office.name)

// document.write(officeid)



// var pilots = [
//     {
//       id: 10,
//       name: "Poe Dameron",
//       years: 14,
//     },
//     {
//       id: 2,
//       name: "Temmin 'Snap' Wexley",
//       years: 30,
//     },
//     {
//       id: 41,
//       name: "Tallissan Lintra",
//       years: 16,
//     },
//     {
//       id: 99,
//       name: "Ello Asty",
//       years: 22,
//     }
//   ];

//   var totalumur = pilots.reduce(function(acumulator,pilot){
//       return acumulator + pilot.years
//   },1)

//   document.write(totalumur)




// var pilots = [
//     {
//       id: 2,
//       name: "Wedge Antilles",
//       faction: "Rebels",
//     },
//     {
//       id: 8,
//       name: "Ciena Ree",
//       faction: "Empire",
//     },
//     {
//       id: 40,
//       name: "Iden Versio",
//       faction: "Empire",
//     },
//     {
//       id: 66,
//       name: "Thane Kyrell",
//       faction: "Rebels",
//     }
//   ];


//   var rebel = pilots.filter(function(awak){
//       return awak.faction === "Empire"
//   })

//   console.log(rebel)




// Synchronous
// console.log('Hello')
// console.log('Javascript')
// console.log('Coder')



// Asynchronous
// console.log('Hello');
// setTimeout(() => { console.log('Javascript')},100) // tunda selama 100 miliseconds
// console.log('Coder');



//call back

// function main(param1,param2,callBack){ 
//   console.log(param1, param2) 
//   callBack()  
// }

// function callback(){ 
//   console.log ('hello callback')
// }

// main(1,2,callback)



//promise
// let myPromise = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     resolve("Hello World 1");
//   }, 4000);
// });

// myPromise.then(function(success){
//   console.log(success);
//   console.log("Hello World 2");
// });




import React from 'react'
import { View , Text ,Image,StyleSheet,ImageBackground} from 'react-native'
import FunctionalComponent from './belajar2'

class App extends React.Component{
  render(){
    return(
      <View style={style.container}>
      <ImageBackground source={require('./belajar2')} style={{}}>
      <View>
        <Image source={require('./belajar2')} />
        </View>
        <View style={{height:100,width:200,pa}}>
        <Text>
          hello
        </Text>
        
        </View>
        </ImageBackground>
      </View>
    )
  }
}
export default App

const style = StyleSheet.create({
  container:{
    alignContent:'center',
    height:20
  },
  image:{
    borderRadius:50
  }
})