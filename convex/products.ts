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

export const getProduct = query({
  args: { productId: v.id("products") },
  handler: async (ctx, args): Promise<ProductResponse> => {
    const product = await ctx.db.get(args.productId);

    return {
      ...product,
      mainImage: await ctx.storage.getUrl(product.mainImage),
      featureImage: await Promise.all(
        product.featureImage.map((image: string) => ctx.storage.getUrl(image))
      ),
    };
  },
});

export const getSimilarProducts = query({
  args: { category: v.string(), excludeId: v.optional(v.id("products")) },
  handler: async (ctx, args): Promise<ProductResponse[]> => {
    const { category, excludeId } = args;
    const limit = 3;

    // Step 1: Get products from the same category (excluding the current product)
    let sameCategoryQuery = ctx.db
      .query("products")
      .filter((q) => q.eq(q.field("category"), category));

    if (excludeId) {
      sameCategoryQuery = sameCategoryQuery.filter((q) =>
        q.neq(q.field("_id"), excludeId)
      );
    }

    const sameCategoryProducts = await sameCategoryQuery.collect();

    // Step 2: If we don't have enough from same category, get from other categories
    let recommendedProducts = [...sameCategoryProducts];

    if (sameCategoryProducts.length < limit) {
      const remainingNeeded = limit - sameCategoryProducts.length;

      let otherCategoryQuery = ctx.db
        .query("products")
        .filter((q) => q.neq(q.field("category"), category));

      if (excludeId) {
        otherCategoryQuery = otherCategoryQuery.filter((q) =>
          q.neq(q.field("_id"), excludeId)
        );
      }

      const otherCategoryProducts = await otherCategoryQuery.collect();

      // Take the first 'remainingNeeded' products from other categories
      recommendedProducts = [
        ...sameCategoryProducts,
        ...otherCategoryProducts.slice(0, remainingNeeded),
      ];
    }

    // Step 3: Limit to exactly 3 products
    const finalProducts = recommendedProducts.slice(0, limit);

    // Step 4: Get image URLs
    return Promise.all(
      finalProducts.map(async (product) => ({
        ...product,
        mainImage: await ctx.storage.getUrl(product.mainImage),
        featureImage: await Promise.all(
          product.featureImage.map((image: string) => ctx.storage.getUrl(image))
        ),
      }))
    );
  },
});
