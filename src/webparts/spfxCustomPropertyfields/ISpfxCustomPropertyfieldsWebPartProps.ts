import { IPropertyFieldPeople } from './custom-property-fields/PropertyFieldPeoplePicker';
export interface ISpfxCustomPropertyfieldsWebPartProps {
  description: string;
  date: string;
  people: IPropertyFieldPeople[];
  color: string;
}
