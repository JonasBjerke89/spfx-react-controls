import * as React from 'react';
import * as ReactDom from 'react-dom';

import {
  IPropertyPaneField,
  IPropertyPaneFieldType,
  IPropertyPaneCustomFieldProps
} from '@microsoft/sp-client-preview';

import PropertyFieldColorPickerHost, { IPropertyFieldColorPickerHostProps} from '././PropertyFieldColorPickerHost';

export interface IPropertyFieldColorPickerProps {
  label: string
  onPropertyChange(propertyPath: string, newValue: any): void;
}

export interface IPropertyFieldColorPickerPropsInternal extends IPropertyFieldColorPickerProps {
  label: string;
  targetProperty: string;
  onPropertyChange(propertyPath: string, newValue: any): void;
  onRender(elem: HTMLElement): void;
  onDispose(elem: HTMLElement): void;
}

class PropertyFieldColorPickerBuilder implements IPropertyPaneField<IPropertyFieldColorPickerProps> {

  public type: IPropertyPaneFieldType = IPropertyPaneFieldType.Custom;
  public targetProperty: string;
  public properties: IPropertyFieldColorPickerPropsInternal;

  private label: string;
  private onPropertyChange: (propertyPath:string, newValue: any) => void;

  public constructor(_targetProperty: string, _properties: IPropertyFieldColorPickerPropsInternal) {
    this.targetProperty = _properties.targetProperty;
    this.properties = _properties;
    this.properties.onDispose = this.dispose;
    this.properties.onRender = this.render;

    this.label = _properties.label;
    this.onPropertyChange = _properties.onPropertyChange;
  }

  private render(elem: HTMLElement): void {
    const element: React.ReactElement<IPropertyFieldColorPickerHostProps> = React.createElement(PropertyFieldColorPickerHost, {
      label: this.label,
      targetProperty: this.targetProperty,
      onDispose: this.dispose,
      onRender: this.render,
      onPropertyChange: this.onPropertyChange
    });

    ReactDom.render(element, elem);
  }

  private dispose(elem: HTMLElement) : void {
  }
}

export function PropertyFieldColorPicker(targetProperty: string, properties: IPropertyFieldColorPickerProps): IPropertyPaneField<IPropertyFieldColorPickerPropsInternal> {
  var newProperties: IPropertyFieldColorPickerPropsInternal =
  {
    label: properties.label,
    targetProperty: targetProperty,
    onPropertyChange: properties.onPropertyChange,
    onDispose: null,
    onRender: null
  }

  return new PropertyFieldColorPickerBuilder(targetProperty, newProperties);
}