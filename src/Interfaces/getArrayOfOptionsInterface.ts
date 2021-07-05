import {IComponentSelect} from "./DefaultSelectInterface";

export interface getArrayOfOptionsInterface extends Omit<IComponentSelect, 'handleFilterChange' | 'placeholder'>{}