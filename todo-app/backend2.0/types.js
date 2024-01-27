const zod = require("zod");
/* {
    title:string,
    description:string
}
{
    id:string
}
*/
const createTodo  = zod.object({
    title:zod.string(),
    description:zod.string()
})

const updateTools = zod.object({
    id:zod.string()
})

module.exports = {
    createTodo:createTodo,
    updateTools:updateTools
}