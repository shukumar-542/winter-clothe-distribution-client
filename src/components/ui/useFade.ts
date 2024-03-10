
export const fade = (direction :  string, delay : number)=>{
    return {
       hidden :{
        y : direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        x : direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
       },
       show : {
         y: 0,
         x : 0,
         opacity : 1,
         transition :{
            duration : 0.8,
            delay : delay,
            // ease : easeIn
         }
       }
    }
}