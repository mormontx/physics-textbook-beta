// ===========================
// Digital Physics Textbook
// JSON-based Content System
// ===========================

// Global state
let navigationData = null;
let contentData = null;
let questionsData = null;
let derivationsData = null;

// ===========================
// Data Loading Functions
// ===========================

async function loadNavigationData() {
    try {
        const response = await fetch('data/navigation.json');
        navigationData = await response.json();
        return navigationData;
    } catch (error) {
        console.error('Error loading navigation data:', error);
        return null;
    }
}

async function loadContentData() {
    try {
        const response = await fetch('data/content.json');
        contentData = await response.json();
        return contentData;
    } catch (error) {
        console.error('Error loading content data:', error);
        return null;
    }
}

async function loadQuestionsData() {
    try {
        const response = await fetch('data/questions.json');
        questionsData = await response.json();
        return questionsData;
    } catch (error) {
        console.error('Error loading questions data:', error);
        return null;
    }
}

async function loadDerivationsData() {
    try {
        const response = await fetch('data/derivations.json');
        derivationsData = await response.json();
        return derivationsData;
    } catch (error) {
        console.error('Error loading derivations data:', error);
        return null;
    }
}

// ===========================
// Navigation Rendering
// ===========================
function renderNavigation() {
    const nav = document.getElementById('navigation');
    if (!nav || !navigationData) return;
    
    nav.innerHTML = '';
    
    navigationData.coreThemes.forEach(theme => {
        const themeDiv = document.createElement('div');
        themeDiv.className = 'topic';
        
        const themeTitle = document.createElement('div');
        themeTitle.className = 'topic-title';
        themeTitle.innerHTML = `
            ${theme.title}
            <span class="arrow">▼</span>
        `;
        themeTitle.onclick = () => toggleTopic(themeDiv);
        
        const topicsDiv = document.createElement('div');
        topicsDiv.className = 'topic-sections';
        
        theme.topics.forEach(topic => {
            const link = document.createElement('a');
            link.href = `#${topic.id}`;
            link.className = 'section-link';
            
            // Add HL badge for higher level content
            if (topic.level === 'HL') {
                link.innerHTML = `${topic.title} <span class="hl-badge">HL</span>`;
            } else {
                link.textContent = topic.title;
            }
            
            link.onclick = (e) => {
                e.preventDefault();
                loadContent(topic.id);
                setActiveLink(link);
            };
            topicsDiv.appendChild(link);
        });
        
        themeDiv.appendChild(themeTitle);
        themeDiv.appendChild(topicsDiv);
        nav.appendChild(themeDiv);
    });
}

function toggleTopic(topicDiv) {
    topicDiv.classList.toggle('collapsed');
}

function setActiveLink(activeLink) {
    document.querySelectorAll('.section-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// ===========================
// Content Loading
// ===========================
function loadContent(sectionId) {
    if (!contentData || !contentData.sections[sectionId]) {
        const contentArea = document.getElementById('content');
        contentArea.innerHTML = `
            <h1>Content Coming Soon</h1>
            <p>This section is under development. Please check back later.</p>
        `;
        return;
    }
    
    const section = contentData.sections[sectionId];
    const contentArea = document.getElementById('content');
    contentArea.innerHTML = section.content;
    
    // Update URL hash
    window.location.hash = sectionId;
    
    // Scroll to top
    document.querySelector('.content-area').scrollTop = 0;
    
    // Trigger MathJax to re-render equations
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
    
    // Load questions for this section
    renderQuestions(sectionId);
    
    // Add equation click handlers
    setTimeout(addEquationClickHandlers, 600);
}

// ===========================
// Questions Panel
// ===========================
function renderQuestions(sectionId) {
    const questionsPanel = document.getElementById('questions');
    
    if (!questionsData || !questionsData.questions[sectionId]) {
        questionsPanel.innerHTML = '<p class="questions-placeholder">No conceptual questions for this section yet.</p>';
        return;
    }
    
    const questions = questionsData.questions[sectionId];
    let html = '';
    questions.forEach((q, index) => {
        html += `
            <div class="question-item">
                <div class="question-number">Question ${index + 1}</div>
                <div class="question-text">${q.text}</div>
                ${q.hint ? `<div class="question-hint">${q.hint}</div>` : ''}
            </div>
        `;
    });
    
    questionsPanel.innerHTML = html;
}

function initQuestionsPanel() {
    const panel = document.getElementById('questions-panel');
    if (!panel) return;
    
    const header = panel.querySelector('.questions-header');
    
    panel.addEventListener('click', function(e) {
        if (panel.classList.contains('expanded')) {
            const rect = header.getBoundingClientRect();
            const clickX = e.clientX;
            const clickY = e.clientY;
            
            const isCloseButton = clickX > rect.right - 60 && 
                                 clickY < rect.top + 60;
            
            if (isCloseButton || e.target.closest('.questions-header')) {
                panel.classList.remove('expanded');
                return;
            }
        } else {
            panel.classList.add('expanded');
        }
    });
    
    const questionsContent = document.getElementById('questions');
    if (questionsContent) {
        questionsContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// ===========================
// Equation Derivations Modal
// ===========================

function openDerivationModal(derivationType) {
    const modal = document.getElementById('derivation-modal');
    const body = document.getElementById('derivation-body');
    
    if (!derivationsData || !derivationsData.derivations[derivationType]) {
        body.innerHTML = '<p>Derivation not available for this equation yet.</p>';
    } else {
        const derivation = derivationsData.derivations[derivationType];
        body.innerHTML = `<h3>${derivation.title}</h3>${derivation.content}`;
    }
    
    modal.classList.add('active');
    
    // Re-render MathJax for the modal content
    if (window.MathJax) {
        MathJax.typesetPromise([body]);
    }
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeDerivationModal() {
    const modal = document.getElementById('derivation-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function addEquationClickHandlers() {
    const equationBlocks = document.querySelectorAll('.equation-block');
    equationBlocks.forEach(block => {
        const content = block.textContent;
        let derivationType = null;
        
        if (content.includes('\\vec{v}') && content.includes('d\\vec{x}') && content.includes('dt')) {
            derivationType = 'velocity';
        } else if (content.includes('\\vec{a}') && content.includes('d\\vec{v}')) {
            derivationType = 'acceleration';
        } else if (content.includes('F_{net}') && content.includes('m\\vec{a}')) {
            derivationType = 'newton2';
        } else if (content.includes('KE') || content.includes('\\frac{1}{2}mv^2')) {
            derivationType = 'kinetic-energy';
        }
        
        if (derivationType) {
            block.style.cursor = 'pointer';
            block.setAttribute('data-derivation', derivationType);
            block.addEventListener('click', function(e) {
                e.stopPropagation();
                openDerivationModal(derivationType);
            });
            block.title = 'Click to see derivation';
        }
    });
}

// ===========================
// Initialization
// ===========================
async function init() {
    // Load all data first
    await Promise.all([
        loadNavigationData(),
        loadContentData(),
        loadQuestionsData(),
        loadDerivationsData()
    ]);
    
    // Render navigation
    renderNavigation();
    
    // Initialize questions panel
    initQuestionsPanel();
    
    // Load content from URL hash if present
    const hash = window.location.hash.substring(1);
    if (hash) {
        loadContent(hash);
        const link = document.querySelector(`a[href="#${hash}"]`);
        if (link) setActiveLink(link);
    }
    
    // Set up modal event listeners
    document.addEventListener('click', function(e) {
        const modal = document.getElementById('derivation-modal');
        if (e.target === modal) {
            closeDerivationModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeDerivationModal();
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
