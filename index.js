const Koa = require('koa');

const app = new Koa();

app.use(async(ctx, next) => {
 console.log("----start1----");
  await next();
  console.log("----end1----");
});

app.use(async(ctx, next) => {
  console.log("----start2----");
  await next();
  console.log("----end2----");
});

app.use(async(ctx, next) => {
  console.log("----start3----");
  await next();
  console.log("----end3----");
 });

app.use(async(ctx, next)=> {
  console.log("----start4----");
  await next();
  console.log("----end4----");
});

app.listen(3000);
