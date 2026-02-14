/**
 * Data Source
 */
const LUNCH_DATA = [
  // Fast Food
  {
    id: 1,
    name: "Classic Cheeseburger",
    category: "Fast Food",
    description: "Juicy beef patty topped with melted cheddar, crisp lettuce, ripe tomato, and our signature secret sauce on a toasted sesame bun. A timeless comfort food favorite that never disappoints.",
    image: "https://placehold.co/600x400/orange/white?text=Cheeseburger",
    price: "$$",
    calories: 540,
    prepTime: "10 min"
  },
  {
    id: 8,
    name: "Fried Chicken Sandwich",
    category: "Fast Food",
    description: "Crispy buttermilk-brined chicken breast fried to golden perfection, served with tangy pickles and creamy mayo on a buttery brioche bun.",
    image: "https://placehold.co/600x400/gold/black?text=Fried+Chicken",
    price: "$",
    calories: 620,
    prepTime: "12 min"
  },
  {
    id: 9,
    name: "Double Bacon Smash Burger",
    category: "Fast Food",
    description: "Two thin smashed beef patties with crispy bacon, American cheese, caramelized onions, and smoky barbecue sauce. The ultimate indulgent burger experience.",
    image: "https://placehold.co/600x400/8B4513/white?text=Smash+Burger",
    price: "$$",
    calories: 780,
    prepTime: "10 min"
  },
  {
    id: 10,
    name: "Fish and Chips",
    category: "Fast Food",
    description: "Beer-battered Atlantic cod fillets served with thick-cut golden fries, mushy peas, and homemade tartar sauce. A British classic done right.",
    image: "https://placehold.co/600x400/DAA520/white?text=Fish+%26+Chips",
    price: "$$",
    calories: 680,
    prepTime: "15 min"
  },
  // Healthy
  {
    id: 2,
    name: "Caesar Salad",
    category: "Healthy",
    description: "Crisp romaine hearts tossed with shaved parmesan, crunchy garlic croutons, and our house-made creamy Caesar dressing. Light yet satisfying.",
    image: "https://placehold.co/600x400/green/white?text=Caesar+Salad",
    price: "$$",
    calories: 320,
    prepTime: "8 min"
  },
  {
    id: 7,
    name: "Grilled Salmon",
    category: "Healthy",
    description: "Wild-caught salmon fillet grilled with lemon and herbs, served over a bed of roasted seasonal vegetables and quinoa. Rich in omega-3 fatty acids.",
    image: "https://placehold.co/600x400/salmon/white?text=Salmon",
    price: "$$$",
    calories: 420,
    prepTime: "18 min"
  },
  {
    id: 11,
    name: "Quinoa Buddha Bowl",
    category: "Healthy",
    description: "Fluffy quinoa topped with roasted sweet potato, avocado, chickpeas, shredded kale, and a bright tahini-lemon dressing. Plant-powered and protein-rich.",
    image: "https://placehold.co/600x400/2E8B57/white?text=Buddha+Bowl",
    price: "$$",
    calories: 380,
    prepTime: "15 min"
  },
  {
    id: 12,
    name: "Grilled Chicken Wrap",
    category: "Healthy",
    description: "Herb-marinated grilled chicken with mixed greens, cherry tomatoes, cucumber, and Greek yogurt dressing wrapped in a whole wheat tortilla.",
    image: "https://placehold.co/600x400/6B8E23/white?text=Chicken+Wrap",
    price: "$$",
    calories: 350,
    prepTime: "10 min"
  },
  {
    id: 13,
    name: "Acai Smoothie Bowl",
    category: "Healthy",
    description: "Thick blended acai berry base topped with fresh banana slices, granola, chia seeds, coconut flakes, and a drizzle of honey. Antioxidant-packed and refreshing.",
    image: "https://placehold.co/600x400/4B0082/white?text=Acai+Bowl",
    price: "$$",
    calories: 290,
    prepTime: "5 min"
  },
  // Asian
  {
    id: 3,
    name: "Spicy Tuna Roll",
    category: "Asian",
    description: "Sushi-grade tuna mixed with spicy mayo and cucumber, expertly rolled in seasoned sushi rice and crispy nori seaweed. A sushi bar favorite.",
    image: "https://placehold.co/600x400/red/white?text=Sushi",
    price: "$$$",
    calories: 310,
    prepTime: "12 min"
  },
  {
    id: 6,
    name: "Pad Thai",
    category: "Asian",
    description: "Stir-fried flat rice noodles with shrimp, scrambled egg, crunchy bean sprouts, and crushed peanuts in a sweet and tangy tamarind sauce. Thailand's signature dish.",
    image: "https://placehold.co/600x400/orange/white?text=Pad+Thai",
    price: "$$",
    calories: 450,
    prepTime: "15 min"
  },
  {
    id: 14,
    name: "Korean Bibimbap",
    category: "Asian",
    description: "Steamed rice topped with sauteed vegetables, marinated beef bulgogi, a fried egg, and spicy gochujang sauce. Mix it all together for a harmony of flavors.",
    image: "https://placehold.co/600x400/B22222/white?text=Bibimbap",
    price: "$$",
    calories: 490,
    prepTime: "20 min"
  },
  {
    id: 15,
    name: "Chicken Ramen",
    category: "Asian",
    description: "Rich tonkotsu-style broth simmered for hours, served with tender chashu chicken, soft-boiled egg, corn, nori, and springy wheat noodles.",
    image: "https://placehold.co/600x400/D2691E/white?text=Ramen",
    price: "$$",
    calories: 520,
    prepTime: "8 min"
  },
  {
    id: 16,
    name: "Vietnamese Pho",
    category: "Asian",
    description: "Aromatic beef bone broth with tender rice noodles, thinly sliced beef, and fresh herbs including Thai basil, cilantro, and bean sprouts. Comfort in a bowl.",
    image: "https://placehold.co/600x400/8B6914/white?text=Pho",
    price: "$$",
    calories: 430,
    prepTime: "10 min"
  },
  // Mexican
  {
    id: 4,
    name: "Chicken Burrito Bowl",
    category: "Mexican",
    description: "Grilled citrus-marinated chicken over cilantro-lime rice with black beans, fresh pico de gallo, sour cream, and creamy guacamole.",
    image: "https://placehold.co/600x400/yellow/black?text=Burrito+Bowl",
    price: "$$",
    calories: 560,
    prepTime: "12 min"
  },
  {
    id: 17,
    name: "Street Tacos",
    category: "Mexican",
    description: "Three soft corn tortillas filled with seasoned carne asada, fresh cilantro, diced onions, and a squeeze of lime. Authentic Mexican street food.",
    image: "https://placehold.co/600x400/FF6347/white?text=Tacos",
    price: "$",
    calories: 420,
    prepTime: "10 min"
  },
  {
    id: 18,
    name: "Chicken Quesadilla",
    category: "Mexican",
    description: "Flour tortilla stuffed with seasoned grilled chicken, melted Oaxaca cheese, roasted peppers, and served with salsa verde and sour cream.",
    image: "https://placehold.co/600x400/FFD700/black?text=Quesadilla",
    price: "$",
    calories: 480,
    prepTime: "8 min"
  },
  // Italian
  {
    id: 5,
    name: "Margherita Pizza",
    category: "Italian",
    description: "San Marzano tomato sauce, creamy fresh mozzarella, and fragrant basil leaves on a perfectly charred thin crust. Simple Italian perfection since 1889.",
    image: "https://placehold.co/600x400/brown/white?text=Pizza",
    price: "$$",
    calories: 600,
    prepTime: "15 min"
  },
  {
    id: 19,
    name: "Spaghetti Carbonara",
    category: "Italian",
    description: "Al dente spaghetti tossed in a silky sauce of egg yolks, pecorino Romano, crispy guanciale, and freshly cracked black pepper. Roman tradition at its finest.",
    image: "https://placehold.co/600x400/F5DEB3/black?text=Carbonara",
    price: "$$",
    calories: 550,
    prepTime: "15 min"
  },
  {
    id: 20,
    name: "Chicken Parmigiana",
    category: "Italian",
    description: "Breaded chicken cutlet baked with marinara sauce and bubbling mozzarella cheese, served over a bed of linguine pasta. Hearty Italian-American comfort food.",
    image: "https://placehold.co/600x400/CD853F/white?text=Chicken+Parm",
    price: "$$",
    calories: 650,
    prepTime: "20 min"
  },
  {
    id: 21,
    name: "Mushroom Risotto",
    category: "Italian",
    description: "Creamy Arborio rice slowly cooked with wild mushrooms, white wine, shallots, and finished with butter and aged Parmigiano-Reggiano.",
    image: "https://placehold.co/600x400/8B8682/white?text=Risotto",
    price: "$$$",
    calories: 470,
    prepTime: "25 min"
  }
];

/**
 * Web Component: <lunch-card>
 */
class LunchCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  set data(item) {
    this.render(item);
  }

  render(item) {
    if (!item) {
      this.shadowRoot.innerHTML = '';
      return;
    }

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          max-width: 400px;
          animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .card {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          border: 1px solid #eee;
        }

        .image-container {
          width: 100%;
          height: 200px;
          background-color: #f0f0f0;
          overflow: hidden;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .content {
          padding: 1.5rem;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        h2 {
          margin: 0;
          font-size: 1.5rem;
          color: #333;
        }

        .price {
          background-color: #eee;
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          font-size: 0.9rem;
          font-weight: bold;
          color: #666;
        }

        .category {
          display: inline-block;
          color: #e65100; /* Dark Orange */
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        p {
          color: #666;
          line-height: 1.5;
          margin: 0;
        }

        .meta {
          display: flex;
          gap: 1rem;
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid #eee;
        }

        .meta span {
          font-size: 0.8rem;
          font-weight: 600;
          color: #999;
        }

        @keyframes popIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      </style>

      <div class="card">
        <div class="image-container">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="content">
          <span class="category">${item.category}</span>
          <div class="header">
            <h2>${item.name}</h2>
            <span class="price">${item.price}</span>
          </div>
          <p>${item.description}</p>
          <div class="meta">
            ${item.calories ? `<span>~${item.calories} cal</span>` : ''}
            ${item.prepTime ? `<span>${item.prepTime}</span>` : ''}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('lunch-card', LunchCard);

/**
 * Application Logic
 */

// State
let selectedCategories = new Set(['All']);

// DOM Elements
const filtersContainer = document.getElementById('filters');
const spinBtn = document.getElementById('spin-btn');
const resultCard = document.getElementById('result-card');

// Initialize Categories
function initFilters() {
  const categories = ['All', ...new Set(LUNCH_DATA.map(item => item.category))];
  
  categories.forEach(cat => {
    const chip = document.createElement('div');
    chip.className = `filter-chip ${cat === 'All' ? 'active' : ''}`;
    chip.textContent = cat;
    chip.addEventListener('click', () => toggleFilter(cat, chip));
    filtersContainer.appendChild(chip);
  });
}

function toggleFilter(category, chipElement) {
  // Logic: "All" is exclusive. If you pick a specific one, "All" deselects.
  // If you deselect everything, "All" re-selects.
  
  if (category === 'All') {
    selectedCategories.clear();
    selectedCategories.add('All');
    // Visually update all chips
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chipElement.classList.add('active');
  } else {
    // Remove 'All' if it's there
    if (selectedCategories.has('All')) {
      selectedCategories.delete('All');
      document.querySelector('.filter-chip').classList.remove('active'); // First one is always 'All'
    }

    if (selectedCategories.has(category)) {
      selectedCategories.delete(category);
      chipElement.classList.remove('active');
    } else {
      selectedCategories.add(category);
      chipElement.classList.add('active');
    }

    // If nothing selected, revert to All
    if (selectedCategories.size === 0) {
      selectedCategories.add('All');
      document.querySelector('.filter-chip').classList.add('active');
    }
  }
}

function getFilteredItems() {
  if (selectedCategories.has('All')) {
    return LUNCH_DATA;
  }
  return LUNCH_DATA.filter(item => selectedCategories.has(item.category));
}

async function spin() {
  const candidates = getFilteredItems();
  
  if (candidates.length === 0) {
    alert("No items match your filters!");
    return;
  }

  // Visual "Spinning" effect
  spinBtn.disabled = true;
  spinBtn.textContent = "Spinning...";
  
  // Rapidly flash random cards for a moment
  let spins = 0;
  const maxSpins = 10;
  const interval = setInterval(() => {
    const randomTemp = candidates[Math.floor(Math.random() * candidates.length)];
    resultCard.data = randomTemp;
    spins++;
    
    if (spins >= maxSpins) {
      clearInterval(interval);
      finalizeChoice(candidates);
    }
  }, 100);
}

function finalizeChoice(candidates) {
  const finalChoice = candidates[Math.floor(Math.random() * candidates.length)];
  resultCard.data = finalChoice;
  spinBtn.disabled = false;
  spinBtn.textContent = "Find Lunch!";
}

// Event Listeners
spinBtn.addEventListener('click', spin);

/**
 * Car Rental Service
 */
const CAR_COMPANIES = ['Hertz', 'Enterprise', 'Avis', 'Budget', 'National'];
const CAR_TYPES = ['Compact', 'Sedan', 'SUV', 'Minivan', 'Luxury'];

const carRentalBtn = document.getElementById('car-rental-btn');
const carRentalOptions = document.getElementById('car-rental-options');
const companyChips = document.getElementById('company-chips');
const carTypeChips = document.getElementById('car-type-chips');
const carRentalSummary = document.getElementById('car-rental-summary');

let selectedCompany = null;
let selectedCarType = null;

function createChips(items, container, onSelect) {
  items.forEach(item => {
    const chip = document.createElement('button');
    chip.className = 'car-rental-chip';
    chip.textContent = item;
    chip.addEventListener('click', () => {
      container.querySelectorAll('.car-rental-chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      onSelect(item);
      updateCarRentalSummary();
    });
    container.appendChild(chip);
  });
}

function updateCarRentalSummary() {
  if (selectedCompany && selectedCarType) {
    carRentalSummary.textContent = `${selectedCarType} from ${selectedCompany} — Ready to book!`;
    carRentalSummary.hidden = false;
  } else {
    carRentalSummary.hidden = true;
  }
}

carRentalBtn.addEventListener('click', () => {
  const isOpen = carRentalOptions.hidden === false;
  carRentalOptions.hidden = isOpen;
  carRentalBtn.setAttribute('aria-expanded', String(!isOpen));
});

createChips(CAR_COMPANIES, companyChips, (company) => { selectedCompany = company; });
createChips(CAR_TYPES, carTypeChips, (type) => { selectedCarType = type; });

// Start
initFilters();

/**
 * Animal Classifier (Teachable Machine)
 */
const URL = "https://teachablemachine.withgoogle.com/models/oYkTMZlP2/";
let model, webcam, labelContainer, maxPredictions;
const aiStartBtn = document.getElementById('ai-start-btn');
let isPredicting = false;

async function initAI() {
  aiStartBtn.disabled = true;
  aiStartBtn.textContent = "Loading Model...";

  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  try {
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true; 
    webcam = new tmImage.Webcam(200, 200, flip); 
    await webcam.setup(); 
    await webcam.play();
    
    // Clear previous
    const webcamContainer = document.getElementById("webcam-container");
    webcamContainer.innerHTML = '';
    webcamContainer.appendChild(webcam.canvas);
    
    labelContainer = document.getElementById("label-container");
    labelContainer.innerHTML = '';
    for (let i = 0; i < maxPredictions; i++) { 
        labelContainer.appendChild(document.createElement("div"));
    }
    
    // Start Loop
    isPredicting = true;
    window.requestAnimationFrame(loop);
    
    aiStartBtn.textContent = "Scanning...";

    // Stop after 3 seconds
    setTimeout(async () => {
      isPredicting = false;
      await webcam.stop();
      aiStartBtn.textContent = "Finished";
      aiStartBtn.disabled = false;
      determineFinalResult();
    }, 3000);

  } catch (error) {
    console.error("Error initializing AI:", error);
    aiStartBtn.textContent = "Error (See Console)";
    aiStartBtn.disabled = false;
  }
}

async function loop() {
    if (!isPredicting) return;
    webcam.update(); 
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        let className = prediction[i].className;
        if (className.toLowerCase() === 'dod') className = 'Dog';
        
        const classPrediction =
            className + ": " + (prediction[i].probability * 100).toFixed(0) + "%";
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
}

async function determineFinalResult() {
  // Get one final prediction from the static canvas
  const prediction = await model.predict(webcam.canvas);
  
  // Find highest probability
  let highestProb = 0;
  let winner = "";
  
  for (let i = 0; i < maxPredictions; i++) {
      if (prediction[i].probability > highestProb) {
          highestProb = prediction[i].probability;
          winner = prediction[i].className;
      }
  }

  if (winner.toLowerCase() === 'dod') winner = 'Dog';

  // Display Result
  labelContainer.innerHTML = `
    <div style="font-size: 1.2rem; color: var(--primary); border-color: var(--primary);">
      Result: <strong>${winner}</strong> (${(highestProb * 100).toFixed(0)}%)
    </div>
  `;
}

if (aiStartBtn) {
  aiStartBtn.addEventListener('click', initAI);
}

/**
 * Mobile Navigation Toggle
 */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
