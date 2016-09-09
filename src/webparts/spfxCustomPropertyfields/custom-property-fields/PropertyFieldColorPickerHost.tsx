import * as React from 'react';
import { IPropertyFieldColorPickerPropsInternal } from './PropertyFieldColorPicker';
import { ColorPicker } from 'office-ui-fabric-react/lib/ColorPicker';

export interface IPropertyFieldColorPickerHostProps extends IPropertyFieldColorPickerPropsInternal {
}

export default class PropertyFieldColorPickerHost extends React.Component<IPropertyFieldColorPickerHostProps, {}> {

  constructor(props: IPropertyFieldColorPickerHostProps) {
    super(props);

    this.onColorChanged = this.onColorChanged.bind(this);
  }

  private onColorChanged(color: string): void {
    if(this.props.onPropertyChange && color != null)
    {
      this.props.onPropertyChange(this.props.targetProperty, color);
    }
  }

  public render() : JSX.Element {
    return (
      <ColorPicker color='#f0f0f0' onColorChanged={this.onColorChanged} />
    );
  }
}