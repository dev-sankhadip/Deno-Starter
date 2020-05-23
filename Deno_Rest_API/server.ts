import { Application } from 'https://deno.land/x/oak/mod.ts';
import { router } from './routes.ts';


const port=5000;


const app=new Application();

app.use(router.routes());
app.use(router.allowedMethods());

router.get("/api/v1/product",({ response }:{ response:any })=>
{
    response.body='Hello world';
})

console.log(`Server Running on port ${port}`);

await app.listen({ port })