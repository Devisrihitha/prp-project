// Sample products and reviews data
const products = [
    { id: 1, name: "Apple iPhone 14 (Starlight, 256 GB)", description: "The Apple iPhone 14 features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and an advanced dual-camera system for exceptional performance and photography.", image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70&amp;crop=false"},
    { id: 2, name: "CMF by Nothing Phone 1 (Blue, 128 GB)", description: "The CMF by Nothing Phone 1 in Blue features a striking transparent design, 128 GB storage, and a 6.55-inch OLED display, blending style and performance.", image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/u/9/-original-imah3ajcxshpd2t2.jpeg?q=70&amp;crop=false" },
    { id: 3, name: "Motorola Edge 50 Fusion (Marshmallow Blue, 256 GB)", description: "The Motorola Edge 50 Fusion in Marshmallow Blue offers 256 GB of storage, a vibrant display, and powerful performance, making it a stylish choice for tech enthusiasts.", image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/t/j/edge-50-fusion-pb300002in-motorola-original-imahywzrfagkuyxx.jpeg?q=70&amp;crop=false" },
    { id: 4, name: "Samsung Galaxy S21 (Phantom Gray, 128 GB)", description: "The Samsung Galaxy S21 features a 6.2-inch display, Exynos 2100 processor, and an impressive camera setup, making it a top choice for photography lovers.", image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/k/a/l/galaxy-s21-fe-5g-sm-g990bza4ins-samsung-original-imah3gndw9qvwxn4.jpeg?q=70&amp;crop=false" },
    { id: 5, name: "Google Pixel 6 (Sorta Seafoam, 128 GB)", description: "The Google Pixel 6 features a 6.4-inch display, Google Tensor chip, and an incredible camera experience with Magic Eraser functionality.", image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/y/0/-original-imaggbrbxkqr3v3u.jpeg?q=70&amp;crop=false" },
    { id: 6, name: "OnePlus 9 (Morning Mist, 128 GB)", description: "The OnePlus 9 comes with a 6.55-inch Fluid AMOLED display, Snapdragon 888 processor, and Hasselblad camera for a superior photography experience.", image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/9/o/l/-original-imagdh2zh7hbwyxh.jpeg?q=70&amp;crop=false" }
];

const reviews = [
    { productId: 1, rating: 5, comment: "Excellent product!" },
    { productId: 2, rating: 4, comment: "Very good quality." },
    { productId: 1, rating: 3, comment: "It's okay." },
    { productId: 3, rating: 5, comment: "Loved it!" },
    { productId: 4, rating: 4, comment: "Great camera." },
    { productId: 5, rating: 5, comment: "Best phone ever!" }
];

// Function to display products
function displayProducts() {
    const productsContainer = document.querySelector('.products-container');
    productsContainer.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button class="btn" onclick="showReviewForm(${product.id})">Write a Review</button>
            <button class="btn" onclick="displayReviews(${product.id})">View Reviews</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Function to display reviews
function displayReviews(productId) {
    const reviewsContainer = document.querySelector('.reviews-container');
    reviewsContainer.innerHTML = ''; // Clear existing reviews

    const productReviews = reviews.filter(review => review.productId === productId);
    if (productReviews.length === 0) {
        reviewsContainer.innerHTML = `<p>No reviews yet for this product.</p>`;
    } else {
        productReviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review';
            reviewDiv.innerHTML = `
                <p><strong>Rating:</strong> ${review.rating} / 5</p>
                <p>${review.comment}</p>
            `;
            reviewsContainer.appendChild(reviewDiv);
        });
    }

    // Show the review section and update the product ID
    const reviewSection = document.getElementById('review-section');
    reviewSection.classList.remove('hidden');
    document.getElementById('product-id').value = productId;
}

// Function to show the review form
function showReviewForm(productId) {
    displayReviews(productId); // Display existing reviews for the product
}

// Function to handle review submission
document.getElementById('review-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const rating = parseInt(document.getElementById('rating').value);
    const comment = document.getElementById('comment').value;
    const productId = parseInt(document.getElementById('product-id').value);

    // Add new review to the reviews array (for demonstration; in a real app, you'd send this to the server)
    reviews.push({ productId, rating, comment });

    // Clear the form
    document.getElementById('review-form').reset();
    document.getElementById('review-section').classList.add('hidden');

    // Update reviews display
    displayReviews(productId);
});

// Initialize the app
displayProducts();
