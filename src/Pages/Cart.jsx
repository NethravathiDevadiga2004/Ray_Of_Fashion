import React, { useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    TextField,
    Grid,
} from "@mui/material";
import CartManager from "../Components/CartManager";

export default function Cart() {
    const [cartItems, setCartItems] = useState(CartManager.getItems()); // Get all cart items from CartManager

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
        <Box>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Cart
            </Typography>
            {cartItems.length === 0 ? (
                <Typography>Your cart is empty.</Typography>
            ) : (
                <Grid container spacing={3}>
                    {cartItems.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Price: ${item.price}
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
            )}
        </Box>
    );
}
