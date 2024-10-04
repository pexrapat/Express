"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
// Function to select all products
const selectAll = async () => {
    try {
        const [rows] = await db_1.promisePool.query("SELECT * FROM product");
        return rows;
    }
    catch (err) {
        console.error("Database query error:", err);
        throw err; // Ensure the error is thrown so that the caller can handle it
    }
};
// Function to delete a product by ID
const deleteProductById = async (id) => {
    try {
        console.log(`Attempting to delete product with ID: ${id}`);
        const [result] = await db_1.promisePool.query("DELETE FROM product WHERE id = ?", [id]);
        console.log("Delete result:", result);
        // Optionally, you can check if the affectedRows property is 0 to handle the case where no rows were deleted
        if (result.affectedRows === 0) {
            console.warn(`No product found with ID: ${id}`);
        }
    }
    catch (err) {
        console.error("Database deletion error:", err);
        throw err; // It's good practice to throw the error after logging it
    }
};
// Function to insert a new product
const insertProduct = async (id, name, price) => {
    try {
        const [result] = await db_1.promisePool.query("INSERT INTO product (id, name, price) VALUES (?, ?, ?)", [id, name, price]);
        console.log("Insert result:", result);
        if (result.affectedRows === 0) {
            console.warn("Insert operation did not affect any rows");
        }
    }
    catch (err) {
        console.error("Database insertion error:", err);
        throw err;
    }
};
// Function to update a product by ID
const updateProduct = async (id, name, price) => {
    try {
        const [result] = await db_1.promisePool.query("UPDATE product SET name = ?, price = ? WHERE id = ?", [name, price, id]);
        console.log("Update result:", result);
        if (result.affectedRows === 0) {
            console.warn(`No product found with ID: ${id}`);
        }
    }
    catch (err) {
        console.error("Database update error:", err);
        throw err;
    }
};
exports.default = { selectAll, deleteProductById, insertProduct, updateProduct };
//# sourceMappingURL=product.js.map