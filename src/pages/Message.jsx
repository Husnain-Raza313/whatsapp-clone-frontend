import React from 'react'

const Message = (props) => {
  return (

    <div className="row message-body border-2 main-page-div" key={props.key}>
                <div className={`message-main-${props.user_type} main-page-div`}>
                  <div className={`${props.user_type} main-page-div`}>
                    <div className="message-text main-page-div">
                    {props.message.body}
                    </div>
                    <span className="message-time pull-right main-page-span">
                      Sun
                    </span>
                  </div>
                </div>
              </div>
    // <div>
    //           {
    //             {
    //           <div className="row message-body border-2" key={props.key}>
    //                 <div className="message-main-receiver">
    //                   <div className="receiver">
    //                     <div className="message-text">
    //                     <p>hekjsfkljd</p>

    //                     {props.message.body}
    //                     </div>
    //                     <span className="message-time pull-right">
    //                       Sun
    //                     </span>
    //                   </div>
    //                 </div>
    //               </div>
    //           }
    //           else{
    //                 <div className="row message-body border-2" key={key}>
    //                 <div className="message-main-sender">
    //                   <div className="sender">
    //                     <div className="message-text">
    //                     {props.message.body}
    //                     </div>
    //                     <span className="message-time pull-right">
    //                       Sun
    //                     </span>
    //                   </div>
    //                 </div>
    //               </div>
    //               }
    //             }
    //             </div>
  )
}

export default Message
