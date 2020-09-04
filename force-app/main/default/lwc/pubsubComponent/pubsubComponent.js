//create a store
const store={}

//create subscribe method
const subscribe=(eventName,callback)=>
{
    if(!store[eventName])
    {
        store[eventName]=new set();
    }
    store[eventName].add(callback)
}

//create publisher method
const publish=(eventName,payload)=>{
    if(!store[eventName])
    {
        store[eventName].forEach(callback => 
            {
                try
                {
                callback(payload)
                }
                catch(error)
                {
                    console.error(error);
                }
            }
        )}
    }
//create unsubscribe method
const unsubscribe=(eventName,callback)=>
{
    if(store[eventName])
    {
        store[eventName].delete(callback)
    }
    
}
export default{
    subscribe,
    unsubscribe,
    publish
}