import React from "react";
import { DrizzleContext } from "drizzle-react";


export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;
      if (typeof web3 === 'undefined') {
        return (
          <div>
            <p>No web3 </p>
          </div>
          )}
      if (!initialized) {
         return (
         <div>
          <p>Loading </p>
         </div>
       )}
      return (
        // <div className='App'>
        //   <AppWeb3 drizzle={drizzle} drizzleState={drizzleState} />
        // </div>
        <div>
          <p>Loaded Drizzle </p>
        </div>
      );
    }}
  </DrizzleContext.Consumer>
)
