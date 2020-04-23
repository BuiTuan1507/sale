import React from 'react'
import {useHover} from 'react-laag';
export default function Hover() {
   const [show, hoverProps] = useHover({delayEnter:300,delayLeave:200});
   return (
      <ToggleLayer 
         isOpen = {show}
         renderLayer = {({layerProps}) => isOpen ? <Layer {...layerProps}/> : null } 
         
         //rest of props ... 
         >
            {({triggerRef}) => (
               <div ref={triggerRef} {...hoverProps}>
hover me
               </div>
            )}
      </ToggleLayer>
   );
}
