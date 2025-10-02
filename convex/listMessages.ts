import { query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const fuckers = await ctx.db.query("Shirt").collect();

    // return Promise.all(
    //   fuckers.map(async (fucker) => ({
    //     ...fucker,
    //     // ...(fucker.format === "image"
    //     //   ? { url: await ctx.storage.getUrl(fucker.body) }
    //     //   : {}),
    //   }))
    // );
    return Promise.all(
      fuckers.map(async (fucker) => ({
        ...fucker,
        url: await ctx.storage.getUrl(fucker.lala),
      }))
    );

    // console.log(fuckers);
    // return fuckers;
  },
});
