import { ProductResponse } from "@/types";
import { query } from "./_generated/server";
import { v } from "convex/values";

export const getProducts = query({
  args: { category: v.string() },
  handler: async (ctx, args): Promise<ProductResponse[]> => {
    const headphones = await ctx.db
      .query("products")
      .filter((q) => q.eq(q.field("category"), args.category))
      .collect();

    return Promise.all(
      headphones.map(async (headphone) => ({
        ...headphone,
        mainImage: await ctx.storage.getUrl(headphone.mainImage),
        featureImage: await Promise.all(
          headphone.featureImage.map((image: string) =>
            ctx.storage.getUrl(image)
          )
        ),
      }))
    );
  },
});
