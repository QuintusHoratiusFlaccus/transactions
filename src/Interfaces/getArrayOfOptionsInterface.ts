import {IComponentSelect} from "./DefaultSelectInterface";

export interface getArrayOfOptionsInterface extends Omit<IComponentSelect, 'name' | 'handleFilterChange' | 'placeholder'>{}