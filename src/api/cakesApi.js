// src/api/cakesApi.js

// Simulating a backend API with mock data
const cakes = [
    { id: 1, name: "Chocolate Cake", price: 15, image: "/src/assets/cakes/cake100.jpg" },
    { id: 2, name: "Vanilla Cake", price: 12, image: "/src/assets/cakes/cake109.jpg" },
    { id: 3, name: "Strawberry Cake", price: 18, image: "/src/assets/cakes/cake108.jpg" },
    { id: 1, name: "Chocolate Cake", price: 15, image: "/src/assets/cakes/cake104.jpg" },
    { id: 2, name: "Vanilla Cake", price: 12, image: "/src/assets/cakes/cake107.jpg" },
    { id: 3, name: "Strawberry Cake", price: 18, image: "/src/assets/cakes/cake101.jpg" },
    { id: 1, name: "Chocolate Cake", price: 15, image: "/src/assets/cakes/cake106.jpg" },
    { id: 2, name: "Vanilla Cake", price: 12, image: "/src/assets/cakes/Dessert.jpeg" },
    { id: 3, name: "Strawberry Cake", price: 18, image: "/src/assets/cakes/cake107.jpg" },
    { id: 1, name: "Chocolate Cake", price: 15, image: "/src/assets/cakes/cake104.jpg" },
    { id: 2, name: "Vanilla Cake", price: 12, image: "/src/assets/cakes/cake102.jpeg" },
    { id: 3, name: "Strawberry Cake", price: 18, image: "/src/assets/cakes/cake1112.jpeg" },
    { id: 1, name: "Chocolate Cake", price: 15, image: "/src/assets/cakes/cake102.jpeg" },
    { id: 2, name: "Vanilla Cake", price: 12, image: "/src/assets/cakes/cake1112.jpeg" },
    { id: 3, name: "Strawberry Cake", price: 18, image: "/src/assets/cakes/cake102.jpeg" },
    { id: 1, name: "Chocolate Cake", price: 15, image: "/src/assets/cakes/cake104.jpg" },
    { id: 2, name: "Vanilla Cake", price: 12, image: "/src/assets/cakes/cake107.jpg" },
    { id: 3, name: "Strawberry Cake", price: 18, image: "/src/assets/cakes/cake106.jpg" },
    { id: 1, name: "Chocolate Cake", price: 15, image: "/src/assets/cakes/cake100.jpg" },
    { id: 2, name: "Vanilla Cake", price: 12, image: "/src/assets/cakes/cake101.jpg" },
    { id: 3, name: "Strawberry Cake", price: 18, image: "/src/assets/cakes/cake100.jpg" },
    { id: 1, name: "Chocolate Cake", price: 15, image: "/src/assets/cakes/cake104.jpg" },
    { id: 2, name: "Vanilla Cake", price: 12, image: "/src/assets/cakes/cake107.jpg" },
    { id: 3, name: "Strawberry Cake", price: 18, image: "/src/assets/cakes/cake106.jpg" },
    { id: 1, name: "Chocolate Cake", price: 15, image: "/src/assets/cakes/cake100.jpg" },
    { id: 2, name: "Vanilla Cake", price: 12, image: "/src/assets/cakes/cake101.jpg" },
    { id: 3, name: "Strawberry Cake", price: 18, image: "/src/assets/cakes/cake106.jpg" },
    { id: 1, name: "Chocolate Cake", price: 15, image: "/src/assets/cakes/cake104.jpg" },
    { id: 2, name: "Vanilla Cake", price: 12, image: "/src/assets/cakes/cake107.jpg" },
    { id: 3, name: "Strawberry Cake", price: 18, image: "/src/assets/cakes/cake106.jpg" },

];

// Fetch all cakes
export const getCakes = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cakes);
        }, 500); // simulate network delay
    });
};

// Fetch cake by ID
export const getCakeById = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const cake = cakes.find((c) => c.id === id);
            resolve(cake);
        }, 500);
    });
};

// Add a new cake (for demonstration)
export const addCake = async (newCake) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            newCake.id = cakes.length + 1;
            cakes.push(newCake);
            resolve(newCake);
        }, 500);
    });
};
