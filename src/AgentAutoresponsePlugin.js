import { TextareaItem,Actions } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import CannedResponses from './components/CannedResponses';
import SmsModal from './components/SmsModal';
import {ColumnDefinition} from '@twilio/flex-ui';
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
  const workerSid=manager.workerClient.sid
  flex.MessageInput.Content.add(<CannedResponses key="canned-responses" manager={manager}/>);
  flex.MainHeader.Content.add(<SmsModal key="test" manager={manager}  workerSid={workerSid}/>,{sortOrder:-1, align:"end"})
  flex.WorkersDataTable.Content.add(<ColumnDefinition key="team" header={"Message Sent"} content={item => item.worker.attributes.messageCount}/>);

  // manager={manager}
  console.log(flex,manager ,"Flex::::::::::::")
  console.log(manager.workerClient.sid,"Flex:::::::::::")
  
 

    // });
  }
}
