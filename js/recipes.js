// ============================================================
// RECIPES PAGE — Randomizer (TheMealDB) + AI Recipe (OpenAI)
// ============================================================

const MEALDB = 'https://www.themealdb.com/api/json/v1/1';

// Family-friendly categories for the randomizer
const FAMILY_CATEGORIES = [
    { id: 'all', label: '🍽 Все' },
    { id: 'Chicken', label: '🍗 Курица' },
    { id: 'Beef', label: '🥩 Говядина' },
    { id: 'Pasta', label: '🍝 Паста' },
    { id: 'Seafood', label: '🐟 Рыба' },
    { id: 'Vegetarian', label: '🥦 Овощи' },
    { id: 'Breakfast', label: '🥞 Завтрак' },
    { id: 'Dessert', label: '🍰 Десерт' },
    { id: 'Side', label: '🥗 Гарнир' },
];

let currentCategory = 'all';
let isLoadingRandomizer = false;
let currentAiRecipeIndex = 0;
let isLoadingAI = false;
let savedApiKey = localStorage.getItem('openai_api_key') || '';

// ============================================================
// TABS
// ============================================================
function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
            document.getElementById('section-' + tab).classList.add('active');

            if (tab === 'ai' && !isLoadingAI && !document.querySelector('.ai-card-inner').children.length) {
                generateAIRecipe();
            }
        });
    });
}

// ============================================================
// RANDOMIZER — TheMealDB
// ============================================================
function buildCategoryFilter() {
    const wrap = document.getElementById('category-filter');
    FAMILY_CATEGORIES.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn' + (cat.id === 'all' ? ' active' : '');
        btn.textContent = cat.label;
        btn.dataset.cat = cat.id;
        btn.addEventListener('click', () => {
            if (isLoadingRandomizer) return;
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = cat.id;
            loadRandomRecipes();
        });
        wrap.appendChild(btn);
    });
}

function showSkeletons() {
    const grid = document.getElementById('recipes-grid');
    grid.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        grid.innerHTML += `
        <div class="recipe-card skeleton">
            <div class="skeleton-img"></div>
            <div class="skeleton-text">
                <div class="skeleton-line medium"></div>
                <div class="skeleton-line short"></div>
                <div class="skeleton-line medium"></div>
            </div>
        </div>`;
    }
}

async function fetchMealsByCategory(category) {
    if (category === 'all') {
        // pick a random family-friendly category
        const cats = FAMILY_CATEGORIES.slice(1);
        const rand = cats[Math.floor(Math.random() * cats.length)];
        category = rand.id;
    }
    const res = await fetch(`${MEALDB}/filter.php?c=${category}`);
    const data = await res.json();
    return data.meals || [];
}

async function fetchMealDetails(id) {
    const res = await fetch(`${MEALDB}/lookup.php?i=${id}`);
    const data = await res.json();
    return data.meals ? data.meals[0] : null;
}

function pickRandom(arr, n) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
}

function getIngredients(meal) {
    const items = [];
    for (let i = 1; i <= 20; i++) {
        const ing = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ing && ing.trim()) items.push({ name: ing.trim(), measure: (measure || '').trim() });
    }
    return items;
}

async function loadRandomRecipes() {
    if (isLoadingRandomizer) return;
    isLoadingRandomizer = true;
    const refreshBtn = document.getElementById('btn-refresh');
    refreshBtn.classList.add('loading');
    refreshBtn.querySelector('.btn-icon').textContent = '⟳';
    refreshBtn.querySelector('.btn-icon').classList.add('spin');

    showSkeletons();

    try {
        const meals = await fetchMealsByCategory(currentCategory);
        const selected = pickRandom(meals, 5);

        // Fetch full details for all 5 in parallel
        const details = await Promise.all(selected.map(m => fetchMealDetails(m.idMeal)));
        renderRecipeCards(details.filter(Boolean));
    } catch (e) {
        document.getElementById('recipes-grid').innerHTML =
            `<div style="grid-column:1/-1;text-align:center;padding:40px;color:#999">
                ⚠️ Ошибка загрузки. Проверьте интернет-соединение.
            </div>`;
    } finally {
        isLoadingRandomizer = false;
        refreshBtn.classList.remove('loading');
        refreshBtn.querySelector('.btn-icon').classList.remove('spin');
        refreshBtn.querySelector('.btn-icon').textContent = '🔀';
    }
}

function renderRecipeCards(meals) {
    const grid = document.getElementById('recipes-grid');
    grid.innerHTML = '';

    meals.forEach((meal, idx) => {
        const ingredients = getIngredients(meal);
        const ingPreview = ingredients.slice(0, 5).map(i => i.name).join(', ');
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.style.animationDelay = `${idx * 0.07}s`;
        card.innerHTML = `
            <div class="recipe-img-wrap">
                <img src="${meal.strMealThumb}/preview"
                     loading="lazy"
                     alt="${meal.strMeal}"
                     onerror="this.src='${meal.strMealThumb}'">
                <span class="recipe-tag">${meal.strCategory || ''}</span>
                ${meal.strArea ? `<span class="recipe-badge">${meal.strArea}</span>` : ''}
            </div>
            <div class="recipe-body">
                <h3>${meal.strMeal}</h3>
                <div class="recipe-meta">
                    <span>🧑‍🍳 ${meal.strArea || 'Мировая кухня'}</span>
                    <span>🥘 ${ingredients.length} ингр.</span>
                </div>
                <p class="recipe-ingredients">${ingPreview}${ingredients.length > 5 ? '...' : ''}</p>
            </div>`;

        card.addEventListener('click', () => openMealModal(meal));
        grid.appendChild(card);
    });
}

// ============================================================
// MODAL
// ============================================================
function openMealModal(meal) {
    const ingredients = getIngredients(meal);
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal');

    modal.innerHTML = `
        <div class="modal-wrapper">
            <button class="modal-close" onclick="closeModal()">✕</button>
            <img class="modal-img" src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <div class="modal-body">
                <h2>${meal.strMeal}</h2>
                <div class="modal-meta">
                    ${meal.strCategory ? `<span class="modal-badge cat">🍽 ${meal.strCategory}</span>` : ''}
                    ${meal.strArea ? `<span class="modal-badge area">🌍 ${meal.strArea}</span>` : ''}
                </div>
                <div class="ingredients-section">
                    <h3>🥘 Ингредиенты (${ingredients.length})</h3>
                    <div class="ingredients-list">
                        ${ingredients.map(i => `
                            <div class="ingredient-item">
                                ${i.name} <span>${i.measure}</span>
                            </div>`).join('')}
                    </div>
                </div>
                <div class="steps-section">
                    <h3>📋 Приготовление</h3>
                    <p class="steps-text">${(meal.strInstructions || 'Инструкции не найдены.').trim()}</p>
                </div>
                ${meal.strYoutube ? `
                <div style="margin-top:20px">
                    <a href="${meal.strYoutube}" target="_blank" rel="noopener"
                       style="display:inline-flex;align-items:center;gap:8px;padding:10px 20px;
                              background:#FF0000;color:white;border-radius:10px;text-decoration:none;
                              font-weight:600;font-size:0.9rem">
                        ▶ Видео-рецепт на YouTube
                    </a>
                </div>` : ''}
            </div>
        </div>`;

    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('modal-overlay').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
});

// ============================================================
// AI RECIPE — OpenAI with streaming
// ============================================================
function initApiKeyInput() {
    const input = document.getElementById('api-key-input');
    const badge = document.getElementById('key-saved-badge');

    if (savedApiKey) {
        input.value = '••••••••' + savedApiKey.slice(-6);
        badge.classList.add('show');
    }

    document.getElementById('btn-save-key').addEventListener('click', () => {
        const val = input.value.trim();
        if (val && !val.startsWith('••')) {
            savedApiKey = val;
            localStorage.setItem('openai_api_key', val);
            input.value = '••••••••' + val.slice(-6);
            badge.classList.add('show');
            badge.textContent = '✓ Сохранён';
        }
    });

    input.addEventListener('focus', () => {
        if (input.value.startsWith('••')) {
            input.value = '';
            badge.classList.remove('show');
        }
    });
}

const AI_SYSTEM_PROMPT = `Ты опытный шеф-повар и диетолог. Ты помогаешь семьям готовить вкусные, полезные и популярные блюда для всей семьи — от завтрака до ужина. Ты знаешь мировую и русскую кухню.`;

const AI_USER_PROMPT = `Дай мне один конкретный популярный рецепт для семейного ужина или обеда.
Используй следующий JSON-формат ответа (строго без markdown-блоков):
{
  "emoji": "🍝",
  "title": "Название блюда",
  "description": "Краткое аппетитное описание (2 предложения)",
  "time": "30 мин",
  "portions": "4",
  "calories": "450 ккал",
  "ingredients": ["200г пасты", "3 зубчика чеснока", "..."],
  "steps": ["Отварить пасту...", "Обжарить чеснок...", "..."],
  "benefits": "Польза для здоровья в 1-2 предложениях"
}
Выбери случайный рецепт из популярных: итальянская, русская, азиатская, средиземноморская кухня. Рецепт должен быть реальным, вкусным и подходить для всей семьи включая детей.`;

function showAiLoading() {
    document.getElementById('ai-card-inner').innerHTML = `
        <div class="ai-loading">
            <div class="ai-spinner"></div>
            <p class="ai-loading-text">Генерирую рецепт для вашей семьи...<br>
            <small style="opacity:0.7">Обычно занимает 2–4 секунды</small></p>
        </div>`;
}

function showAiError(msg) {
    document.getElementById('ai-card-inner').innerHTML = `
        <div class="ai-error">
            <div class="ai-error-icon">⚠️</div>
            <h3>Не удалось получить рецепт</h3>
            <p>${msg}</p>
            <button class="btn-next-recipe" onclick="generateAIRecipe()">
                Попробовать снова
            </button>
        </div>`;
    setNextBtnDisabled(false);
}

function renderAiRecipe(data) {
    document.getElementById('ai-card-inner').innerHTML = `
        <div style="text-align:center">
            <span class="ai-recipe-emoji">${data.emoji || '🍽'}</span>
            <h2 class="ai-recipe-title">${data.title}</h2>
            <p class="ai-recipe-desc">${data.description}</p>
        </div>
        <div class="ai-recipe-stats">
            <div class="ai-stat">
                <span class="ai-stat-value">⏱ ${data.time}</span>
                <span class="ai-stat-label">Время</span>
            </div>
            <div class="ai-stat">
                <span class="ai-stat-value">👥 ${data.portions}</span>
                <span class="ai-stat-label">Порций</span>
            </div>
            <div class="ai-stat">
                <span class="ai-stat-value">🔥 ${data.calories}</span>
                <span class="ai-stat-label">Калории</span>
            </div>
        </div>
        <hr class="ai-divider">
        <div class="ai-section-title">🧺 Ингредиенты</div>
        <div class="ai-ingredients">
            ${(data.ingredients || []).map(i => `<div class="ai-ingredient">${i}</div>`).join('')}
        </div>
        <hr class="ai-divider">
        <div class="ai-section-title">📋 Приготовление</div>
        <div class="ai-steps">
            <ol>
                ${(data.steps || []).map(s => `<li>${s}</li>`).join('')}
            </ol>
        </div>
        ${data.benefits ? `
        <hr class="ai-divider">
        <div class="ai-section-title">💚 Польза</div>
        <div class="ai-benefits">${data.benefits}</div>` : ''}`;
}

function setNextBtnDisabled(val) {
    const btn = document.getElementById('btn-next-recipe');
    if (btn) btn.disabled = val;
}

async function generateAIRecipe(direction = 'left') {
    if (isLoadingAI) return;
    const key = savedApiKey || localStorage.getItem('openai_api_key');
    if (!key) {
        showAiError('Введите OpenAI API ключ выше, чтобы получать AI-рецепты.');
        return;
    }

    isLoadingAI = true;
    setNextBtnDisabled(true);
    updateRecipeCounter();

    const card = document.getElementById('ai-card');

    // Animate out
    card.classList.add(direction === 'left' ? 'slide-left' : 'slide-right');

    await new Promise(r => setTimeout(r, 300));

    card.classList.remove('slide-left', 'slide-right');
    // Reset position instantly (no transition)
    card.style.transition = 'none';
    card.style.transform = direction === 'left' ? 'translateX(110%)' : 'translateX(-110%)';

    showAiLoading();

    // Slide in
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            card.style.transition = '';
            card.style.transform = '';
        });
    });

    try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                stream: false,
                temperature: 1.0,
                max_tokens: 900,
                messages: [
                    { role: 'system', content: AI_SYSTEM_PROMPT },
                    { role: 'user', content: AI_USER_PROMPT }
                ]
            })
        });

        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            const msg = err.error?.message || `HTTP ${res.status}`;
            if (res.status === 401) throw new Error('Неверный API ключ. Проверьте ключ в настройках.');
            if (res.status === 429) throw new Error('Превышен лимит запросов. Подождите минуту.');
            throw new Error(msg);
        }

        const json = await res.json();
        const text = json.choices?.[0]?.message?.content || '';

        // Parse JSON from response
        let recipe;
        try {
            // Strip possible markdown fences
            const clean = text.replace(/```json\n?|```\n?/g, '').trim();
            recipe = JSON.parse(clean);
        } catch {
            // Fallback: try to extract JSON object
            const match = text.match(/\{[\s\S]*\}/);
            if (match) {
                recipe = JSON.parse(match[0]);
            } else {
                throw new Error('Не удалось разобрать ответ AI. Попробуйте снова.');
            }
        }

        currentAiRecipeIndex++;
        updateRecipeCounter();
        renderAiRecipe(recipe);

    } catch (e) {
        showAiError(e.message || 'Неизвестная ошибка');
    } finally {
        isLoadingAI = false;
        setNextBtnDisabled(false);
    }
}

function updateRecipeCounter() {
    const el = document.getElementById('recipe-counter');
    if (el && currentAiRecipeIndex > 0) {
        el.textContent = `Рецепт #${currentAiRecipeIndex}`;
    }
}

// ============================================================
// SWIPE GESTURES
// ============================================================
function initSwipe() {
    const card = document.getElementById('ai-card');
    if (!card) return;

    let startX = 0;
    let startY = 0;
    let isDragging = false;
    let currentX = 0;
    const SWIPE_THRESHOLD = 80;

    const leftIndicator = document.getElementById('swipe-left-indicator');
    const rightIndicator = document.getElementById('swipe-right-indicator');

    function onStart(x, y) {
        if (isLoadingAI) return;
        startX = x;
        startY = y;
        isDragging = true;
        currentX = 0;
        card.classList.add('dragging');
    }

    function onMove(x, y) {
        if (!isDragging) return;
        const dx = x - startX;
        const dy = y - startY;
        // Cancel if mostly vertical
        if (Math.abs(dy) > Math.abs(dx) * 1.5) { isDragging = false; return; }

        currentX = dx;
        card.style.transform = `translateX(${dx}px) rotate(${dx * 0.02}deg)`;

        const ratio = Math.min(Math.abs(dx) / SWIPE_THRESHOLD, 1);
        if (dx < -20 && leftIndicator) leftIndicator.style.opacity = ratio;
        else if (leftIndicator) leftIndicator.style.opacity = 0;
        if (dx > 20 && rightIndicator) rightIndicator.style.opacity = ratio;
        else if (rightIndicator) rightIndicator.style.opacity = 0;
    }

    function onEnd() {
        if (!isDragging) return;
        isDragging = false;
        card.classList.remove('dragging');
        if (leftIndicator) leftIndicator.style.opacity = 0;
        if (rightIndicator) rightIndicator.style.opacity = 0;

        if (currentX < -SWIPE_THRESHOLD) {
            generateAIRecipe('left');
        } else if (currentX > SWIPE_THRESHOLD) {
            generateAIRecipe('right');
        } else {
            // Snap back
            card.style.transition = 'transform 0.3s cubic-bezier(0.25,0.8,0.25,1)';
            card.style.transform = '';
            setTimeout(() => { card.style.transition = ''; }, 300);
        }
    }

    // Touch
    card.addEventListener('touchstart', e => onStart(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
    card.addEventListener('touchmove', e => onMove(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
    card.addEventListener('touchend', onEnd);

    // Mouse
    card.addEventListener('mousedown', e => onStart(e.clientX, e.clientY));
    window.addEventListener('mousemove', e => { if (isDragging) onMove(e.clientX, e.clientY); });
    window.addEventListener('mouseup', () => { if (isDragging) onEnd(); });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
    initTabs();
    buildCategoryFilter();
    initApiKeyInput();
    initSwipe();

    // Setup next recipe button
    document.getElementById('btn-next-recipe').addEventListener('click', () => {
        generateAIRecipe('left');
    });

    // Load randomizer immediately
    await loadRandomRecipes();

    // Refresh button
    document.getElementById('btn-refresh').addEventListener('click', loadRandomRecipes);

    // Keyboard shortcut: Arrow Right = next AI recipe
    document.addEventListener('keydown', e => {
        const aiSection = document.getElementById('section-ai');
        if (!aiSection.classList.contains('active')) return;
        if (e.key === 'ArrowRight' || e.key === ' ') generateAIRecipe('left');
    });
});
