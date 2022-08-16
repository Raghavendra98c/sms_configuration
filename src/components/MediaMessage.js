import React from 'react';


import ModalImage from "react-modal-image";
export default class MediaMessage extends React.PureComponent {
  state = {
      url: ""
  };

  async componentDidMount() {
      const {media} = this.props.message.source;
      let url;

      if(typeof media.mcsMedia === 'object') {
          url = await media.getContentUrl();
      }

      this.setState({
          url
      });
  }

// export default class MediaMessage extends React.Component {
//   constructor(props) {

//     super(props); 
//   this.state = {
//       url: ""
//     };
//   }
    
    
//     async componentDidMount() {
//       const message = this.props.message.source;
  
//   console.log(message.media,"mediaa messagee")
     
//         const url = await message.media.getContentUrl();
      
//       // const url = await this.props.message.source.getContentUrl();
//       // console.log(this.props.message.source, "immmmmmmmmmmmmmmmmm")
//      console.log("urlllllll",url)
//       this.setState({
//         url
//       });
//       console.log("urlllllll",this.state.url)
   
//     }
    
  
    render() {
  
     return <ModalImage
          className="card-image"
          small={this.state.url}
          medium={this.state.url}
          large={this.state.url}
          showRotate={true}
         
        />
      // return <a  rel="noopener noreferrer"  target="_blank" href={this.state.url}><img src={this.state.url} /></a>;
      // return <img src={this.state.url} />;
    }
  }