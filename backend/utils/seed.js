import "dotenv/config";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import dns from "node:dns/promises";
import connectDB from "../config/db.js";
import Product from "../model/Product.js";
import User from "../model/User.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const products = [
  {
    name: "Everyday Canvas Backpack",
    description:
      "A durable canvas backpack with a padded laptop sleeve and roomy compartments.",
    price: 49.99,
    category: "Accessories",
    stock: 24,
    imageUrl:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    ratings: 4.5,
    numReviews: 18,
  },
  {
    name: "Classic Ceramic Mug",
    description:
      "A minimalist ceramic mug for your morning coffee or afternoon tea.",
    price: 14.5,
    category: "Home",
    stock: 42,
    imageUrl:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80",
    ratings: 4.7,
    numReviews: 31,
  },
  {
    name: "Wireless Headphones",
    description:
      "Comfortable over-ear headphones with wireless connectivity and clear sound.",
    price: 89.99,
    category: "Electronics",
    stock: 16,
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    ratings: 4.4,
    numReviews: 27,
  },
  {
    name: "Stainless Steel Water Bottle",
    description:
      "A reusable insulated bottle designed to keep drinks at the right temperature.",
    price: 24.99,
    category: "Accessories",
    stock: 35,
    imageUrl:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    ratings: 4.6,
    numReviews: 22,
  },
  {
    name: "Desk Plant in Ceramic Pot",
    description:
      "A small, easy-care indoor plant that adds a touch of green to your workspace.",
    price: 19.99,
    category: "Home",
    stock: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    ratings: 4.3,
    numReviews: 14,
  },
  {
    name: "Everyday Cotton T-Shirt",
    description:
      "A soft cotton crew-neck T-shirt made for comfortable everyday wear.",
    price: 22,
    category: "Clothing",
    stock: 50,
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    ratings: 4.2,
    numReviews: 19,
  },
];

const seedUsers = [
  {
    name: "Demo Customer",
    email: "customer@example.test",
    role: "user",
  },
  {
    name: "Demo Customer Two",
    email: "customer2@example.test",
    role: "user",
  },
];
const demoPassword = "ShopNest123!";

try {
  await connectDB();

  const productResults = await Promise.all(
    products.map(({ name, ...product }) =>
      Product.updateOne(
        { name },
        { $set: { name, ...product } },
        { upsert: true },
      ),
    ),
  );

  const hashedPassword = await bcrypt.hash(demoPassword, 10);
  const userResults = await Promise.all(
    seedUsers.map((user) =>
      User.updateOne(
        { email: user.email },
        {
          $setOnInsert: {
            ...user,
            password: hashedPassword,
            verified: true,
          },
        },
        { upsert: true },
      ),
    ),
  );

  const productsAdded = productResults.filter(
    (result) => result.upsertedCount > 0,
  ).length;
  const usersAdded = userResults.filter(
    (result) => result.upsertedCount > 0,
  ).length;
  console.log(
    `Seed complete: ${productsAdded} products added or updated; ${usersAdded} demo users added.`,
  );
  console.log(`Demo users can log in with the password: ${demoPassword}`);
} catch (error) {
  console.error("Seeding failed:", error);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
