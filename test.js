// var box={
//     area: function(){
//         var ar=0;       
//         for(var i=0;i<arguments.length;i++){
//             ar+=arguments[i];          
//         }
//         return ar;
//     }
// }
// console.log(box.area(1,2,3));


// function copyOwnPropertiesFrom(source,target){
//     Object.getOwnPropertyNames(source).forEach(function(key){
//         console.log(key);
//         var desc=Object.getOwnPropertyDescriptor(source,key);
//         Object.defineProperty(target,key,desc);
//     });

//     return target;
// };

// var tray=Object.create(box);
// tray.name='tray';
// tray=Object.defineProperties({}, {
//         foo: {value:123, writable:true},
//         nextu: {value: 'ahaan',enumerable: false},
//         restu: {get: function(){return 'shabba'}}
//      });
// var tray2=Object.create(Object.getPrototypeOf(tray));
// console.log(z);
// //console.log(Object.getPrototypeOf(tray));
// copyOwnPropertiesFrom(tray,tray2);
// console.log(Object.getOwnPropertyDescriptor(tray2,'nextu'));
// console.log(Object.getOwnPropertyNames(tray));

// const posts = [ 
//     {id: 1, upVotes: 2},
//     {id: 2, upVotes: 18}, 
//     {id: 3, upVotes: 1}, 
//     {id: 4, upVotes: 30}, 
//     {id: 5, upVotes: 50} 
//   ];
//   let sum = 0;
//   console.time('reduce');
//   sum = posts.reduce((s, p)=> s+=p.upVotes,10);
//   //console.log(sum);
//   console.timeEnd('reduce')
//   sum = 0;
//   console.time('for loop');
//   for(let i=0; i<posts.length; i++) {
//       sum += posts[i].upVotes;
//   }
//   console.timeEnd('for loop');
//   sum = 0;
//   console.time('for each');
//   posts.forEach(element => {
//       sum += element.upVotes;
//   });
//   console.timeEnd('for each')

// try{
//     throw new Error('hie');
    
// }
// catch(e){
//     console.log(e);
// }


// var a=function(){
//     var sum=0;
//     for(let i=0;i<3;i++){
//         sum+=i;
//     }
//     //console.log(i);//unaccesable
//     console.log(sum);
// }
// a();

// function car(name,model,type){
//     'use strict'
//     this.name= arguments[0];
//     this.model= arguments[1];
// }
// car.prototype.describe=function(){  
//     return this.name+''+this.model;
// }
// var c=new car('aaa',2019);

// console.log(c.describe());

// var reg=new Regexp('/a(b+)/','i');
// console.log(regex.exec('_abbb_ab_'));
// function nodeVisitor(key, value) {
//     console.log([
    
//     JSON.stringify(this), 
//     JSON.stringify(key),
//     JSON.stringify(value)
//     ].join(' # '));
//     return value; 
//     }
// console.log(JSON.stringify({"foo" : 1, "bar" : 2},['bar']));
// console.log(JSON.stringify(['a','b'],nodeVisitor));


// var a={
//     foo: 'aaa',
//     bar: 'bbb'
// };
// console.log(Object.getOwnPropertyDescriptor(a,'foo'));

// Object.freeze(a);
// a.foo='zzzz';
// console.log(Object.getOwnPropertyDescriptor(a,'foo'));


//console.log(Object.getOwnPropertyDescriptor(a,'bar'));

// Object.defineProperties(a,{
//     foo: {enumerable:false},
//     bar: {writable:false}
// });
// console.log(Object.getOwnPropertyDescriptor(a,'foo'));

// console.log(Object.getOwnPropertyDescriptor(a,'bar'));
// Object.defineProperty(a,'foo',{value:'123'})

// function c(name){
//     this.name=name;
// }
// var b=new c('hi');
// console.log(b.name);

// try{
//     throw ReferenceError('wrong syntax');
// }
// catch(e){
//     switch(e.constructor){
//         case ReferenceError:
//             console.log('reference');
//             break;
        
//         case SyntaxError:
//             console.log('syntax');
//             break;
//         default:
//             console.log('error');
//     }
// }
