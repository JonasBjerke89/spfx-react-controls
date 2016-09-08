import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-client-preview';

import * as strings from 'spfxCustomPropertyfieldsStrings';
import SpfxCustomPropertyfields, { ISpfxCustomPropertyfieldsProps } from './components/SpfxCustomPropertyfields';
import { ISpfxCustomPropertyfieldsWebPartProps } from './ISpfxCustomPropertyfieldsWebPartProps';
import { PropertyFieldDatePicker } from './custom-property-fields/PropertyFieldDatePicker';

export default class SpfxCustomPropertyfieldsWebPart extends BaseClientSideWebPart<ISpfxCustomPropertyfieldsWebPartProps> {

  public constructor(context: IWebPartContext) {
    super(context);

    this.onPropertyChange = this.onPropertyChange.bind(this);
  }
  public render(): void {
    const element: React.ReactElement<ISpfxCustomPropertyfieldsProps> = React.createElement(SpfxCustomPropertyfields, {
      description: this.properties.description,
      date: this.properties.date
    });

    ReactDom.render(element, this.domElement);
  }

  protected get disableReactivePropertyChanges(): boolean {
		return false;
	}

  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyFieldDatePicker('date', {
                  label: strings.DateFieldLabel,
                  initialDate: this.properties.date,
                  onPropertyChange: this.onPropertyChange
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
