import * as React from 'react';
import { css } from 'office-ui-fabric-react';

import styles from '../SpfxCustomPropertyfields.module.scss';
import { ISpfxCustomPropertyfieldsWebPartProps } from '../ISpfxCustomPropertyfieldsWebPartProps';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Breadcrumb, IBreadcrumbItem } from 'office-ui-fabric-react/lib/Breadcrumb';
import { Button,ElementType,ButtonType } from 'office-ui-fabric-react/lib/Button';
import { ColorPicker } from 'office-ui-fabric-react/lib/ColorPicker';
import { Dialog, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { Dropdown } from 'office-ui-fabric-react/lib/DropDown';

export interface ISpfxCustomPropertyfieldsProps extends ISpfxCustomPropertyfieldsWebPartProps {
}

export default class SpfxCustomPropertyfields extends React.Component<ISpfxCustomPropertyfieldsProps, {}> {
  private items = [
            { text: 'Home', key: 'Home' },
            { text: 'Departments', key: 'Departments' },
            { text: 'Development', key: 'Development' },
            { text: 'Documents', key: 'Documents', href: 'https://www.google.dk' }
        ];

        private dropdownItems = [
          { text: 'Team site #0', key:'TeamSite#0' },
          { text: 'Team site #1', key:'TeamSite#1' },
          { text: 'Project site', key:'ProjectSite#0' }
        ];

        public constructor()
        {
          super();

        }

public onColorChanged() : void
{
  //alert('color changed');
}

private onShowDialogClicked() : void
{
}

private onDialogClosed() : void
{

}

private onDropDownChanged() : void{
  alert('dropdown changed');
}

  public render(): JSX.Element {
    return (
      <div className={styles.spfxCustomPropertyfields}>
        <div className={styles.container}>
          <div className={css('ms-Grid-row ms-bgColor-themeDark ms-fontColor-white', styles.row)}>
            <div className='ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'>
              <span className='ms-font-xl ms-fontColor-white'>
                Welcome to SharePoint!
              </span>
              <p className='ms-font-l ms-fontColor-white'>
                Customize SharePoint experiences using Web Parts.
              </p>
              <p className='ms-font-l ms-fontColor-white'>
                Description: {this.props.description}<br/>
                Date: {this.props.date}
              </p>
              <a
                className={css('ms-Button', styles.button)}
                href='https://github.com/SharePoint/sp-dev-docs/wiki'
              >
                <span className='ms-Button-label'>Learn more</span>
              </a>
            </div>
          </div>


        <TextField multiline resizable label="Your firstname:" defaultValue="Jonas" />
        <Breadcrumb items={this.items} />
        <Button elementType={ElementType.button} buttonType={ButtonType.primary}>Click me</Button>
        <Button elementType={ElementType.button} buttonType={ButtonType.hero}>Click me too (!)</Button>
        <ColorPicker color="#f0f0f0" onColorChanged={this.onColorChanged}  />
        <Button elementType={ElementType.button} buttonType={ButtonType.primary} onClick={this.onShowDialogClicked.bind(this)}>Open dialog</Button>
        <Dialog ref="myDialog" contentClassName="ms-Dialog--sample" isOpen={false} title="My dialog" subText="This is my subtext" type={DialogType.close} onDismiss={this.onDialogClosed.bind(this)} />
        <Dropdown label="Choose a template" selectedKey="TeamSite#1" options={this.dropdownItems} onChanged={this.onDropDownChanged.bind(this)}  />

        <div>My favorite color is: {this.props.color}</div>
        </div>
      </div>
    );
  }
}
