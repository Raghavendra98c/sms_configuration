import { TextareaItem,Actions } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import CannedResponses from './components/CannedResponses';
import SmsModal from './components/SmsModal';

const PLUGIN_NAME = 'AgentAutoresponsePlugin';

export default class AgentAutoresponsePlugin extends FlexPlugin {

  constructor() {
    super(PLUGIN_NAME);
    // this.state={
    //   nameofcx:""
    // }
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
  //   flex.Actions.addListener("afterAcceptTask", (payload) => {
  // //  this.state.nameofcx   =payload.task.attributes.name;
  // this.setState({nameofcx:payload.task.attributes.name})
  // console.log(this.state.nameofcx,"name of agent ")
  //   }
    
  //   );
  
  flex.MessageInput.Content.add(<CannedResponses key="canned-responses" manager={manager}/>);
  flex.MainHeader.Content.add(<SmsModal key="test" manager={manager} />,{sortOrder:-1, align:"end"})
  // manager={manager}

    // });
  }
}
