let cartItems = [];

const CartManager = {
    addItem: (item) => {
        const exists = cartItems.some((cartItem) => cartItem.id === item.id);
        if (!exists) {
            cartItems.push({ ...item, quantity: 1 }); // Add default quantity
        } else {
            console.log("Item already exists in the cart:", item);
        }
    },
    getItems: () => cartItems, // Retrieve all cart items
    updateItems: (items) => {
        cartItems = items; // Update the cart items globally
    },
};

export default CartManager;
