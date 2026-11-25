
// Enhanced JavaScript for the magical bookstore

// Books data with enhanced properties
const books = [
    {
        id: 1,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 18.99,
        category: "classics",
        cover: "📜",
        img: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg",
        rating: 4.8,
        description: "A timeless romance exploring love, class, and social expectations in Georgian England.",
        pages: 432,
        year: 1813
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 16.99,
        category: "classics",
        cover: "🕊️",
        img: "https://m.media-amazon.com/images/I/81gepf1eMqL._UF1000,1000_QL80_.jpg",
        rating: 4.9,
        description: "A powerful story of justice, morality, and growing up in the American South.",
        pages: 376,
        year: 1960
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        price: 17.99,
        category: "classics",
        cover: "👁️",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8Xgx6_xeZQR2o9hnPaAaUv4dDggryxJAxw&s",
        rating: 4.7,
        description: "A dystopian masterpiece that remains chillingly relevant in today's world.",
        pages: 328,
        year: 1949
    },
    {
        id: 4,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        price: 19.99,
        category: "thriller",
        cover: "🔍",
        img: "https://m.media-amazon.com/images/I/81JJPDNlxSL._UF1000,1000_QL80_.jpg",
        rating: 4.6,
        description: "A psychological thriller that will keep you guessing until the very end.",
        pages: 304,
        year: 2019
    },
    {
        id: 5,
        title: "Gone Girl",
        author: "Gillian Flynn",
        price: 18.99,
        category: "thriller",
        cover: "🎭",
        img: "https://thekfs.ca/wp-content/uploads/2024/08/film-poster-62-683x1024.jpg",
        rating: 4.5,
        description: "A dark and twisted tale of marriage, deception, and murder.",
        pages: 419,
        year: 2012
    },
    {
        id: 6,
        title: "It Ends with Us",
        author: "Colleen Hoover",
        price: 16.99,
        category: "romance",
        cover: "🌹",
        img: "https://m.media-amazon.com/images/I/91CqNElQaKL.jpg",
        rating: 4.4,
        description: "A powerful story of love, resilience, and the courage to break cycles.",
        pages: 367,
        year: 2016
    },
    {
        id: 7,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 19.99,
        category: "fantasy",
        cover: "🏔️",
        img: "https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_.jpg",
        rating: 4.9,
        description: "An epic adventure in Middle-earth that started it all.",
        pages: 310,
        year: 1937
    },
    {
        id: 8,
        title: "Dune",
        author: "Frank Herbert",
        price: 22.99,
        category: "science-fiction",
        cover: "🏜️",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/250px-Dune_%282021_film%29.jpg",
        rating: 4.8,
        description: "A science fiction epic that redefined the genre.",
        pages: 688,
        year: 1965
    },
    {
        id: 9,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        price: 24.99,
        category: "non-fiction",
        cover: "👁️",
        img: "https://m.media-amazon.com/images/I/713jIoMO3UL._UF1000,1000_QL80_.jpg",
        rating: 4.7,
        description: "A dystopian masterpiece that remains chillingly relevant in today's world.",
        pages: 328,
        year: 2011
    },
    {
        id: 10,
        title: "Atomic Habits",
        author: "James Clear",
        price: 20.32,
        category: "non-fiction",
        cover: "👁️",
        img: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
        rating: 4.7,
        description: "A dystopian masterpiece that remains chillingly relevant in today's world.",
        pages: 400,
        year: 2018
    },
    {
        id: 11,
        title: "Twisted love",
        author: "Ana huang",
        price: 100,
        category: "romance",
        cover: "👁️",
        img: "https://m.media-amazon.com/images/I/71YJet75sxL.jpg",
        rating: 4.7,
        description: "Best selling romantic novel makes you blush at each page",
        pages: 568,
        year: 2021
    },
    {
        id: 12,
        title: "The Metamorphosis",
        author: "Franz Kafka",
        price: 58.90,
        category: "classics",
        cover: "👁️",
        img: "https://m.media-amazon.com/images/I/81XLJH8QOeL._UF1000,1000_QL80_.jpg",
        rating: 4.7,
        description: "about a man who wakes up transformed into a giant insect, exploring themes of alienation, identity, and the burden of existence.",
        pages: 308,
        year: 1915
    },
     {
        id: 13,
        title: "The Fault in Our Stars ",
        author: "John Green",
        price: 56.99,
        category: "romance",
        cover: "📜",
        img: "https://readwatchdrinkcoffee.wordpress.com/wp-content/uploads/2014/07/fault-in-our-stars.jpg",
        rating: 5.0,
        description: " Two teens with cancer fall in love while facing the brutal truth of life and death.",
        pages: 432,
        year: 2012
    },
    {
    id: 14,
    title: "Shatter Me",
    author: "Tahereh Mafi",
    price: 49.99,
    category: "romance",
    cover: "🌪️",
    img: "https://m.media-amazon.com/images/I/81VpXyXk4PL._UF1000,1000_QL80_.jpg",
    rating: 4.7,
    description: "Juliette's touch is lethal—and the Reestablishment wants to use her as a weapon or lock her away forever.",
    pages: 368,
    year: 2011
},
{
    id: 15,
    title: "Your Name",
    author: "Makoto Shinkai",
    price: 39.99,
    category: "fantasy",
    cover: "🌌",
    img: "https://m.media-amazon.com/images/S/pv-target-images/03a7f194edd0c32d7e72b0f87e2f96319246b63650aaf091fce661cd654e24ae.jpg",
    rating: 4.8,
    description: "A boy and a girl mysteriously begin swapping bodies and search for each other across time and fate.",
    pages: 192,
    year: 2016
},
{
    id: 16,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 45.00,
    category: "self-help",
    cover: "🧠",
    img: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    rating: 4.6,
    description: "A brutally honest guide that helps you focus on what truly matters by embracing life’s struggles.",
    pages: 224,
    year: 2016
},
{
    id: 17,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 59.99,
    category: "fantasy",
    cover: "🧙‍♂️",
    img: "https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.jpg",
    rating: 4.9,
    description: "An ordinary boy discovers he's a wizard and enters a magical world at Hogwarts School of Witchcraft and Wizardry.",
    pages: 320,
    year: 1997
},
{
    id: 18,
    title: "The Girl in Room 105",
    author: "Chetan Bhagat",
    price: 34.99,
    category: "thriller",
    cover: "🚪",
    img: "https://m.media-amazon.com/images/I/51J+KYDiEYL._UF1000,1000_QL80_.jpg",
    rating: 4.2,
    description: "An uninvited visit to his ex's hostel room turns a love story into a murder mystery.",
    pages: 312,
    year: 2018
},
{
    id: 19,
    title: "Verity",
    author: "Colleen Hoover",
    price: 44.99,
    category: "thriller",
    cover: "🕯️",
    img: "https://m.media-amazon.com/images/I/91868k2+gUL.jpg",
    rating: 4.8,
    description: "A struggling writer uncovers terrifying secrets in a bestselling author's unfinished manuscript.",
    pages: 336,
    year: 2018
},

{
    id: 20,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: 38.99,
    category: "classics",
    cover: "⚖️",
    img: "https://m.media-amazon.com/images/I/71O2XIytdqL._UF1000,1000_QL80_.jpg",
    rating: 4.7,
    description: "A tormented student commits a murder and battles his own guilt, morality, and madness.",
    pages: 576,
    year: 1866
},
{
    id: 21,
    title: "I Too Had a Love Story",
    author: "Ravinder Singh",
    price: 32.99,
    category: "romance",
    cover: "💔",
    img: "https://m.media-amazon.com/images/I/81ilCcnwayL._UF1000,1000_QL80_.jpg",
    rating: 4.5,
    description: "A real-life heart-wrenching love story that begins with hope and ends in unforgettable tragedy.",
    pages: 216,
    year: 2008
},
{
    id: 22,
    title: "Haunting Adeline",
    author: "H.D. Carlton",
    price: 52.99,
    category: "romance",
    cover: "🖤",
    img: "https://m.media-amazon.com/images/I/911Tnk7CKXL._UF1000,1000_QL80_.jpg",
    rating: 4.6,
    description: "A gothic, taboo love story between a stalker and an author that explores obsession, desire, and shadows of the past.",
    pages: 592,
    year: 2021
},
{
    id: 23,
    title: "The Cruel Prince",
    author: "Holly Black",
    price: 48.99,
    category: "fantasy",
    cover: "👑",
    img: "https://m.media-amazon.com/images/I/81vCaMmKrWL._UF1000,1000_QL80_.jpg",
    rating: 4.6,
    description: "A mortal girl fights to earn her place in a treacherous fae court—where power is deadly and the prince is anything but charming.",
    pages: 384,
    year: 2018
},
{
    id: 24,
    title: "They Both Die at the End",
    author: "Adam Silvera",
    price: 42.99,
    category: "young adult",
    cover: "⏳",
    img: "https://m.media-amazon.com/images/I/81o8BYrG4BL._UF1000,1000_QL80_.jpg",
    rating: 4.7,
    description: "Two strangers meet on the day they're destined to die—and live a lifetime in one final day of love, friendship, and truth.",
    pages: 384,
    year: 2017
},
{
    id: 25,
    title: "The Art of Being Alone",
    author: "Renuka Gavrani",
    price: 29.99,
    category: "self-help",
    cover: "🌿",
    img: "https://m.media-amazon.com/images/I/61fc1aOifmL.jpg",
    rating: 4.4,
    description: "A healing guide that teaches you to embrace solitude, find inner peace, and build a fulfilling relationship with yourself.",
    pages: 180,
    year: 2022
},
{
    id: 26,
    title: "How to Kill Men and Get Away With It",
    author: "Katy Brent",
    price: 43.99,
    category: "dark comedy",
    cover: "🩸",
    img: "https://m.media-amazon.com/images/I/71bT1k34TvL.jpg",
    rating: 4.3,
    description: "A darkly hilarious and savage story of a woman who kills bad men—and becomes addicted to justice and blood.",
    pages: 400,
    year: 2022
},
{
    id: 27,
    title: "The Family Upstairs",
    author: "Lisa Jewell",
    price: 46.99,
    category: "thriller",
    cover: "🏚️",
    img: "https://m.media-amazon.com/images/I/91TQwXokvuL.jpg",
    rating: 4.5,
    description: "A woman inherits a mysterious London mansion tied to a chilling past of cult-like control, secrets, and three dead bodies.",
    pages: 384,
    year: 2019
},
{
    id: 28,
    title: "You've Reached Sam",
    author: "Dustin Thao",
    price: 39.99,
    category: "young adult",
    cover: "📱",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1610730335l/53086843.jpg",
    rating: 4.4,
    description: "A grieving girl gets one last chance to say goodbye to her boyfriend through a phone call from beyond the grave.",
    pages: 304,
    year: 2021
},
{
    id: 29,
    title: "Can We Be Strangers Again?",
    author: "Ritika R",
    price: 35.99,
    category: "romance",
    cover: "💔",
    img: "https://m.media-amazon.com/images/I/71zpck45b2L._UF1000,1000_QL80_.jpg",
    rating: 4.3,
    description: "A deeply emotional love story about two ex-lovers navigating heartbreak, memories, and the ache of almost-forever.",
    pages: 236,
    year: 2022
},
{
    id: 30,
    title: "A Good Girl's Guide to Murder",
    author: "Holly Jackson",
    price: 44.99,
    category: " thriller",
    cover: "🕵️‍♀️",
    img: "https://m.media-amazon.com/images/I/81E3hDPr3eL.jpg",
    rating: 4.8,
    description: "A high school student reopens a closed murder case for her project—but the deeper she digs, the darker the secrets get.",
    pages: 400,
    year: 2019
}
];

// Global state
let cart = JSON.parse(localStorage.getItem('bookstore-cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('bookstore-wishlist')) || [];
let currentFilter = 'all';
let searchQuery = '';
let viewMode = localStorage.getItem('bookstore-view') || 'grid';
let sortBy = 'title';
let currentSlide = 0;
let isDarkMode = localStorage.getItem('bookstore-theme') === 'dark';

// DOM elements
const booksGrid = document.getElementById('booksGrid');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const totalAmount = document.getElementById('totalAmount');
const subtotalAmount = document.getElementById('subtotalAmount');
const cartItemsCount = document.getElementById('cartItemsCount');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const themeToggle = document.getElementById('themeToggle');
const gridView = document.getElementById('gridView');
const listView = document.getElementById('listView');
const heroSlideshow = document.getElementById('heroSlideshow');
const featuredCarousel = document.getElementById('featuredCarousel');
const featuredPrev = document.getElementById('featuredPrev');
const featuredNext = document.getElementById('featuredNext');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');
const booksTitle = document.getElementById('booksTitle');
const booksCount = document.getElementById('booksCount');
const scrollTop = document.getElementById('scrollTop');

// Auth elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const modalOverlay = document.getElementById('modalOverlay');
const authModal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');
const newsletterForm = document.getElementById('newsletterForm');

// Category management
const categories = [
    { id: 'all', name: 'All Books' },
    { id: 'classics', name: 'Classics' },
    { id: 'thriller', name: 'Thriller' },
    { id: 'romance', name: 'Romance' },
    { id: 'fantasy', name: 'Fantasy' },
    { id: 'science-fiction', name: 'Sci-Fi' },
     { id: 'dark comedy', name: 'comedy' },
     { id: 'young adult', name: 'young adult' },
     { id: 'self-help', name: 'self-help' },
     { id: 'non-fiction', name: 'non-fiction' }
     
];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing magical bookstore...');
    initializeTheme();
    initializeParticles();
    initializeSlideshow();
    renderFeaturedBooks();
    renderBooks();
    updateCartUI();
    updateCategoryCounts();
    initializeEventListeners();
    initializeScrollEffects();
    console.log('Bookstore initialized successfully!');
});

// Theme functionality
function initializeTheme() {
    document.body.classList.toggle('dark', isDarkMode);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = themeToggle.querySelector('.theme-icon path');
    if (isDarkMode) {
        // Sun icon
        icon.setAttribute('d', 'M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42');
    } else {
        // Moon icon
        icon.setAttribute('d', 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z');
    }
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('bookstore-theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon();
    console.log(`Theme switched to ${isDarkMode ? 'dark' : 'light'} mode`);
}

// Floating particles system
function initializeParticles() {
    const container = document.getElementById('floatingParticles');
    if (!container) return;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (4 + Math.random() * 6) + 's';
        container.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 10000);
    }

    // Create initial particles
    for (let i = 0; i < 25; i++) {
        setTimeout(() => createParticle(), i * 200);
    }

    // Continue creating particles
    setInterval(createParticle, 800);
}

// Enhanced slideshow functionality
function initializeSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
        console.log(`Showing slide ${index + 1}`);
    }
    
    function nextSlideHandler() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlideHandler() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Auto-advance slides
    setInterval(nextSlideHandler, 6000);
    
    // Manual navigation
    if (nextSlide) nextSlide.addEventListener('click', nextSlideHandler);
    if (prevSlide) prevSlide.addEventListener('click', prevSlideHandler);
    
    // Indicator navigation
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });
    
    // Add slide particles
    slides.forEach(slide => {
        const particlesContainer = slide.querySelector('.slide-particles');
        if (particlesContainer) {
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 3 + 's';
                particle.style.animationDuration = (2 + Math.random() * 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }
    });
}

// Featured books carousel
function renderFeaturedBooks() {
    if (!featuredCarousel) return;
    
    const featuredBooks = books.slice(0, 6);
    
    featuredCarousel.innerHTML = featuredBooks.map(book => `
        <div class="featured-book" data-book-id="${book.id}">
            <div class="featured-book-cover">
                <img src="${book.img}" alt="${book.title}" loading="lazy">
            </div>
            <h3 class="featured-book-title">${book.title}</h3>
            <p class="featured-book-author">by ${book.author}</p>
            <div class="featured-book-price">$${book.price.toFixed(2)}</div>
            <button class="featured-book-btn" onclick="addToCart(${book.id}, event)">
                Add to Cart
            </button>
        </div>
    `).join('');
    
    console.log('Featured books rendered');
}

// Carousel navigation
function initializeCarousel() {
    if (!featuredCarousel || !featuredPrev || !featuredNext) return;
    
    featuredPrev.addEventListener('click', () => {
        featuredCarousel.scrollBy({ left: -320, behavior: 'smooth' });
    });
    
    featuredNext.addEventListener('click', () => {
        featuredCarousel.scrollBy({ left: 320, behavior: 'smooth' });
    });
}

// Filter and search functionality
function filterBooks() {
    let filtered = books;
    
    if (currentFilter !== 'all') {
        filtered = filtered.filter(book => book.category === currentFilter);
    }
    
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(book => 
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.category.toLowerCase().includes(query) ||
            book.description.toLowerCase().includes(query)
        );
    }
    
    // Sort books
    filtered.sort((a, b) => {
        switch (sortBy) {
            case 'price-low': return a.price - b.price;
            case 'price-high': return b.price - a.price;
            case 'rating': return b.rating - a.rating;
            case 'year': return b.year - a.year;
            default: return a.title.localeCompare(b.title);
        }
    });
    
    return filtered;
}

function renderBooks() {
    if (!booksGrid) return;
    
    const filteredBooks = filterBooks();
    
    // Update title and count
    const categoryName = categories.find(c => c.id === currentFilter)?.name || 'Entire Collection';
    if (booksTitle) booksTitle.textContent = categoryName;
    if (booksCount) booksCount.textContent = filteredBooks.length;
    
    if (filteredBooks.length === 0) {
        booksGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem; color: rgba(0,0,0,0.6);">
                <h3>No books found matching your criteria</h3>
                <p>Try adjusting your search or filter options</p>
            </div>
        `;
        return;
    }
    
    booksGrid.innerHTML = filteredBooks.map((book, index) => `
        <div class="book-card fade-in" data-book-id="${book.id}" style="animation-delay: ${index * 100}ms">
            <div class="book-card-image">
                <img src="${book.img}" alt="${book.title}" loading="lazy">
                <button class="wishlist-btn ${wishlist.includes(book.id) ? 'active' : ''}" onclick="toggleWishlist(${book.id})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            
            <div class="book-content">
                <div class="book-rating">
                    <div class="stars">
                        ${[...Array(5)].map((_, i) => `
                            <span class="star ${i < Math.floor(book.rating) ? 'filled' : ''}">★</span>
                        `).join('')}
                    </div>
                    <span class="rating-number">${book.rating}</span>
                </div>
                
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                
                ${viewMode === 'grid' ? `<p class="book-description">${book.description}</p>` : ''}
                
                <div class="book-footer">
                    <span class="book-price">$${book.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${book.id}, event)">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update grid class based on view
    booksGrid.className = `books-grid ${viewMode === 'list' ? 'list-view' : ''}`;
    
    console.log(`Rendered ${filteredBooks.length} books in ${viewMode} view`);
}

// Cart functionality
function addToCart(bookId, event) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    const existingItem = cart.find(item => item.id === bookId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...book, quantity: 1 });
    }
    
    updateCartUI();
    saveCart();
    
    // Button feedback
    if (event) {
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Added!';
        button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 1500);
    }
    
    console.log(`Added ${book.title} to cart`);
}

function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    updateCartUI();
    saveCart();
    console.log(`Removed book ${bookId} from cart`);
}

function updateQuantity(bookId, change) {
    const item = cart.find(item => item.id === bookId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(bookId);
    } else {
        updateCartUI();
        saveCart();
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Update cart count
    if (cartCount) cartCount.textContent = totalItems;
    if (cartItemsCount) cartItemsCount.textContent = totalItems;
    
    // Update cart items
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart"><p>Your collection awaits the first book...</p></div>';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.img}" alt="${item.title}" loading="lazy">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-author">by ${item.author}</div>
                        <div class="cart-item-controls">
                            <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                            <div class="quantity-controls">
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            </div>
                        </div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">&times;</button>
                </div>
            `).join('');
        }
    }
    
    // Update cart total
    if (cartTotal) {
        if (cart.length === 0) {
            cartTotal.style.display = 'none';
        } else {
            cartTotal.style.display = 'block';
            if (subtotalAmount) subtotalAmount.textContent = totalPrice.toFixed(2);
            if (totalAmount) totalAmount.textContent = totalPrice.toFixed(2);
        }
    }
}

function saveCart() {
    localStorage.setItem('bookstore-cart', JSON.stringify(cart));
}

// Wishlist functionality
function toggleWishlist(bookId) {
    if (wishlist.includes(bookId)) {
        wishlist = wishlist.filter(id => id !== bookId);
    } else {
        wishlist.push(bookId);
    }
    
    localStorage.setItem('bookstore-wishlist', JSON.stringify(wishlist));
    renderBooks(); // Re-render to update wishlist buttons
    
    console.log(`Toggled wishlist for book ${bookId}`);
}

// Category count updates
function updateCategoryCounts() {
    categories.forEach(category => {
        const count = category.id === 'all' 
            ? books.length 
            : books.filter(book => book.category === category.id).length;
        
        // Update navigation counts
        const navElement = document.querySelector(`[data-category="${category.id}"] .nav-count`);
        if (navElement) navElement.textContent = count;
        
        // Update category filter counts
        const categoryElement = document.querySelector(`[data-category="${category.id}"] .category-count`);
        if (categoryElement) categoryElement.textContent = count;
    });
}

// Modal functionality
function showAuthModal(type) {
    const isLogin = type === 'login';
    
    if (!modalBody) return;
    
    modalBody.innerHTML = `
        <form class="auth-form" onsubmit="handleAuth(event, '${type}')">
            <h2>${isLogin ? 'Welcome Back' : 'Join Our Literary Circle'}</h2>
            ${!isLogin ? `
                <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" required>
                </div>
            ` : ''}
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" required>
            </div>
            ${!isLogin ? `
                <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password" required>
                </div>
            ` : ''}
            <button type="submit">${isLogin ? 'Sign In' : 'Create Account'}</button>
            <div class="auth-switch">
                ${isLogin ? 'New to our bookstore?' : 'Already have an account?'}
                <button type="button" onclick="showAuthModal('${isLogin ? 'signup' : 'login'}')">${isLogin ? 'Create Account' : 'Sign In'}</button>
            </div>
        </form>
    `;
    
    modalOverlay.classList.add('active');
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    modalOverlay.classList.remove('active');
    authModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function handleAuth(event, type) {
    event.preventDefault();
    // Simulate authentication
    alert(`${type === 'login' ? 'Login' : 'Account creation'} successful! Welcome to The Old Paper & Ink.`);
    closeAuthModal();
}

function handleNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing! We'll send book recommendations to ${email}`);
    event.target.reset();
}

// Cart sidebar functionality
function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Scroll effects
function initializeScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.scrollY > 400;
        
        if (scrollTop) {
            scrollTop.style.display = scrolled ? 'flex' : 'none';
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Scroll to top functionality
    if (scrollTop) {
        scrollTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Event listeners
function initializeEventListeners() {
    console.log('Setting up event listeners...');
    
    // Theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Navigation filters
    document.querySelectorAll('.nav-btn, .category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons of the same type
            const isNavBtn = btn.classList.contains('nav-btn');
            const selector = isNavBtn ? '.nav-btn' : '.category-btn';
            document.querySelectorAll(selector).forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Update filter
            currentFilter = btn.dataset.category;
            renderBooks();
            
            console.log(`Filter changed to: ${currentFilter}`);
        });
    });
     const scrollBtn = document.getElementById("scrollTop");
     document.getElementById('loginBtn').addEventListener('click', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (email && password) {
      // Fake login success → redirect to main site
      window.location.href = "index.html";
    } else {
      alert("Please enter both email and password.");
    }
  });

  // Show/hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Scroll to top when button is clicked
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
    
    // Search input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            renderBooks();
        });
    }
    
    // Sort select
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            sortBy = e.target.value;
            renderBooks();
        });
    }
    
    // View toggle buttons
    if (gridView) {
        gridView.addEventListener('click', () => {
            viewMode = 'grid';
            gridView.classList.add('active');
            listView?.classList.remove('active');
            localStorage.setItem('bookstore-view', viewMode);
            renderBooks();
        });
    }
    
    if (listView) {
        listView.addEventListener('click', () => {
            viewMode = 'list';
            listView.classList.add('active');
            gridView?.classList.remove('active');
            localStorage.setItem('bookstore-view', viewMode);
            renderBooks();
        });
    }
    
    // Set initial view mode
    if (viewMode === 'list') {
        listView?.classList.add('active');
        gridView?.classList.remove('active');
    }
    
    // Cart functionality
    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (closeCart) closeCart.addEventListener('click', closeCartSidebar);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartSidebar);
    
    // Auth modals
    if (loginBtn) loginBtn.addEventListener('click', () => showAuthModal('login'));
    if (signupBtn) signupBtn.addEventListener('click', () => showAuthModal('signup'));
    if (closeModal) closeModal.addEventListener('click', closeAuthModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeAuthModal);
    
    // Newsletter form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletter);
    }
    
    // Carousel
    initializeCarousel();
    
    // Logo scroll to top
    const logo = document.querySelector('.logo-group');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Escape key to close modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCartSidebar();
            closeAuthModal();
        }
    });
    
    console.log('Event listeners initialized');
}
const authorCarousel = document.getElementById('authorCarousel');
const authorLeft = document.getElementById('authorLeft');
const authorRight = document.getElementById('authorRight');

authorLeft.addEventListener('click', () => {
  authorCarousel.scrollBy({ left: -200, behavior: 'smooth' });
});
authorRight.addEventListener('click', () => {
  authorCarousel.scrollBy({ left: 200, behavior: 'smooth' });
});


// Global functions for inline event handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleWishlist = toggleWishlist;
window.showAuthModal = showAuthModal;
window.handleAuth = handleAuth;
window.handleNewsletter = handleNewsletter;

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Performance monitoring
window.addEventListener('load', () => {
    console.log('Page fully loaded');
    console.log('Performance timing:', performance.timing.loadEventEnd - performance.timing.navigationStart, 'ms');
});

console.log('Script loaded successfully');