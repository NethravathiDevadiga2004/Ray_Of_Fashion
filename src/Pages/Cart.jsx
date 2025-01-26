import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    TextField,
    Grid,
    Divider,
} from "@mui/material";
import CartManager from "../Components/CartManager";

export default function Cart() {
    const [cartItems, setCartItems] = useState(CartManager.getItems()); // Get all cart items from CartManager
    const [totalPrice, setTotalPrice] = useState(0);

    // Update total price whenever cartItems change
    useEffect(() => {
        const total = cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
        setTotalPrice(total);
    }, [cartItems]);

    // Handle quantity change
    const handleQuantityChange = (event, item) => {
        const newQuantity = parseInt(event.target.value, 10) || 1; // Ensure valid integer
        const updatedItems = cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
        );
        setCartItems(updatedItems);
        CartManager.updateItems(updatedItems); // Sync with CartManager
    };

    // Handle delete
    const handleDelete = (item) => {
        const updatedItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedItems);
        CartManager.updateItems(updatedItems); // Sync with CartManager
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
                My Cart
            </Typography>
            {cartItems.length === 0 ? (
                <Typography>Your cart is empty.</Typography>
            ) : (
                <>
                    <Grid container spacing={3}>
                        {cartItems.map((item) => (
                            <Grid item xs={12} sm={6} md={4} key={item.id}>
                                <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                                    <Box
                                        component="img"
                                        src={item.thumbnail} // Assuming `image` is part of the item object
                                        alt={item.title}
                                        sx={{
                                            height: 200,
                                            objectFit: "contain",
                                            borderBottom: "1px solid #e0e0e0",
                                        }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" sx={{ mb: 1 }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                            Price: ${item.price.toFixed(2)}
                                        </Typography>
                                        <Typography variant="body2" color="text.primary">
                                            Subtotal: ${(item.price * item.quantity).toFixed(2)}
                                        </Typography>
                                        <TextField
                                            type="number"
                                            label="Quantity"
                                            variant="outlined"
                                            value={item.quantity || 1} // Default quantity to 1
                                            onChange={(event) => handleQuantityChange(event, item)}
                                            sx={{ mt: 2, width: "100%" }}
                                        />
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => handleDelete(item)}
                                            fullWidth
                                        >
                                            Remove
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Divider sx={{ my: 3 }} />
                    <Box sx={{ textAlign: "right" }}>
                        <Typography variant="h6">Total: ${totalPrice.toFixed(2)}</Typography>
                        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                            Proceed to Checkout
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
}
