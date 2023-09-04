// decorators 
function ShowName(target: any) {
  console.log(target);
}

function ApiVersion(version: string) { 
  return (target: any) => { 
    Object.assign(target.prototype, {
      __version: version
    })
  }
}

function minLength(minLength: number) { 
  return (target: any, key: string) => { 
    let _value  = target[key];

    const getter = () => _value;
    const setter = (value: string) =>  { 
      if (value.length < minLength) {
        throw new Error(`${key} must be at least ${minLength} characters`);
      } else { 
        _value = value;
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })
  }
}

// class Funcionário {
@ApiVersion('1.0.0')
@ShowName
class Employee {
  @minLength(3)
  name: string;

  constructor(name: string) { 
    this.name = name;
  }
}

const employee = new Employee('Rl');
console.log((employee as any).__version)
console.log(employee.name)