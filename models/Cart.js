const mongoose = require("mongoose")

// cpy/pst Product.js small modify

const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true},
        // products - multiple products so array method []
        products: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
    },
    { timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema);                                   