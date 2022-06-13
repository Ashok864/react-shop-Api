const mongoose = require("mongoose")

// cpy/pst Cart.js small modify

const OrderSchema = new mongoose.Schema(
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
        amount: { type: Number, required: true},
        // adress many line so its objct
        address: { type: Object, required: true},
        status: { type: String, default: "pending"}
    },
    { timestamps: true}
);

module.exports = mongoose.model("Order", OrderSchema)