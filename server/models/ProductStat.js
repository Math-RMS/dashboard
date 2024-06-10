import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
    {   
        productId: String,
        yearlySalesTotal: Number,
        yearlyTotalSolUnids: Number,
        year: Number,
        monthlyData: [
            {
                month: String,
                totalSales: Number,
                totalUnids: Number,
            },
        ],
        dailyData: [
            {
                date: String,
                totalSales: Number,
                totalUnids: Number,
            },
        ],
    },
    { timestamps: true }  
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;