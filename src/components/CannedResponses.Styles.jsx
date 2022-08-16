import styled from 'react-emotion';

export const CannedResponsesStyles = styled('div')`
  .form {
    width: 100%;
    margin-bottom: 20px;
   

  }
  div.textbox {
    background-color: rgb(236, 236, 236);
    height: 59px;
    max-height: 100px;
    width: 311px;
    overflow: hidden scroll;
    border-radius: 28px;
    padding: 10px;
  }
  
  .button{
    

    height: 32px;
    width: 30%;
    background: lightslategrey;
    border: 10px;
    margin: 4px auto;
    display: block;
    border-radius: 8px;
}
.button:active {
  transform: scale(0.98);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}
   }
   
   .button > img {
    display:inline-block;
    vertical-align: middle;
    padding-right:10px;
    }
  .input-label {
    padding-left: 5px;
    background:rgb(35, 54, 89);
    color:white
  }
  
  .textareastyle{
    width:90%, 
display :flex
    height:50px,
    overflowY:scroll,
    color: #222222;
    border: 1px solid #C6CAD7;
    font-size: 12px;
    box-shadow: none;
    box-sizing: border-box;
    line-height: 16px;
    padding-top: 7px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 7px;
  }
  .content {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 10px;
    border: 1px solid;
  }
  .content:before {
    content: ' ';
    position: absolute;
    display: none;
    inset: -10px;
    background: rgba(90,90,90,0.25);
    z-index: -1;
  }
 
  .content:hover:before {
    display: block;
    pointer-events: none;
  }
  .tooltip { display: none; }
  .tooltip-on-hover:hover + .tooltip { display: block; }
 
`;
