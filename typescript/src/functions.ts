// function sum
function sum(x: number, y: number): number {
  return x + y;
}


// sum result
let result: number = sum(1, 2);

// function  hello name
function hello(name: string): string {
  return `Hello ${name}`;
}

// function call to phone 
function callToPhone(phone: string | null): string | null {
  return phone ? `Calling ${phone}` : null;
}

// function async get user
async function getUser(): Promise<string> {
  return 'Rafael';
}


console.log(hello('Rafael'));