// Interfaces x Types
type robot =  {
  readonly id: number;
  name: string;
}

interface robot2 {
  readonly id: number;
  name: string;
}

const bot: robot = { id: 1, name: 'Rafael'};
const bot2: robot2 = { id: 1, name: 'Rafael'};


class Robot implements robot2 { 
  id: number;
  name: string;
  
  constructor(id: number, name: string){
    this.id = id;
    this.name = name;
  }
}