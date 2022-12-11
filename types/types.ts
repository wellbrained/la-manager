import { Classes } from "./classes";

export interface Character {
  id: string;
  name: string;
  charLevel: number;
  itemLevel: number;
  class: Classes;
}
