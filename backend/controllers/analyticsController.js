import Order from "../model/Order.js";
import Product from "../model/Product.js";
import User from "../model/User.js";

export const getAdminStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: "user" });
    const totalProducts = await Product.countDocuments({});
    const totalOrders = await Order.countDocuments({});

    const orders = await Order.find({});
    const totalRevenueData = orders.reduce(
      (acc, order) => acc + order.totalAmount,
      0,
    );

    res.json({
      totalUsers,
      totalOrders,
      totalProducts,
      totalRevenue: totalRevenueData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: " Internal server error", error: error.message });
  }
};
