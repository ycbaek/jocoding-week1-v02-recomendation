/**
 * Data Source
 */
const LUNCH_DATA = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    category: "Fast Food",
    description: "Juicy beef patty, cheddar, lettuce, tomato, and secret sauce.",
    image: "https://placehold.co/600x400/orange/white?text=Cheeseburger",
    price: "$$"
  },
  {
    id: 2,
    name: "Caesar Salad",
    category: "Healthy",
    description: "Crisp romaine, parmesan, croutons, and creamy dressing.",
    image: "https://placehold.co/600x400/green/white?text=Caesar+Salad",
    price: "$$"
  },
  {
    id: 3,
    name: "Spicy Tuna Roll",
    category: "Asian",
    description: "Fresh tuna, spicy mayo, and cucumber wrapped in rice and seaweed.",
    image: "https://placehold.co/600x400/red/white?text=Sushi",
    price: "$$$"
  },
  {
    id: 4,
    name: "Chicken Burrito Bowl",
    category: "Mexican",
    description: "Grilled chicken, rice, beans, salsa, and guacamole.",
    image: "https://placehold.co/600x400/yellow/black?text=Burrito+Bowl",
    price: "$$"
  },
  {
    id: 5,
    name: "Margherita Pizza",
    category: "Italian",
    description: "Tomato sauce, fresh mozzarella, and basil on a thin crust.",
    image: "https://placehold.co/600x400/brown/white?text=Pizza",
    price: "$$"
  },
  {
    id: 6,
    name: "Pad Thai",
    category: "Asian",
    description: "Stir-fried rice noodles with egg, peanuts, and bean sprouts.",
    image: "https://placehold.co/600x400/orange/white?text=Pad+Thai",
    price: "$$"
  },
  {
    id: 7,
    name: "Grilled Salmon",
    category: "Healthy",
    description: "Fresh salmon fillet with roasted vegetables.",
    image: "https://placehold.co/600x400/salmon/white?text=Salmon",
    price: "$$$"
  },
  {
    id: 8,
    name: "Fried Chicken Sandwich",
    category: "Fast Food",
    description: "Crispy fried chicken breast with pickles and mayo.",
    image: "https://placehold.co/600x400/gold/black?text=Fried+Chicken",
    price: "$"
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
    model = await window.tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true; 
    webcam = new window.tmImage.Webcam(200, 200, flip); 
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
        const classPrediction =
            prediction[i].className + ": " + (prediction[i].probability * 100).toFixed(0) + "%";
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
