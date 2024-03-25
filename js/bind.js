function Bind(func, context, ...args) {

     return function (...arguments) {

          return func.apply(context, args.concat(arguments))

     }
};





function newBind(foo, context, ...arg) {
     const copyContext = { ...context }
     copyContext.foo = foo;
     return copyContext.foo(...arg)
}

function baz(val) {
     return val + ' ' + this.name;
}

const obj = {
     name: 'ivan'
}

const b = newBind(baz, obj, 'hello');
console.log(b);