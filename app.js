// ===========================
// Content Data Structure
// ===========================
const contentData = {
    topics: [
        {
            id: 'mechanics',
            title: 'Classical Mechanics',
            sections: [
                {
                    id: 'mech-intro',
                    title: 'Introduction',
                    content: `
                        <h1>Classical Mechanics</h1>
                        <p>Classical mechanics is the branch of physics that deals with the motion of macroscopic objects and the forces that cause this motion. Developed by pioneers like Isaac Newton and Galileo Galilei, it forms the foundation of our understanding of how objects move in the everyday world.</p>
                        
                        <div class="callout callout-info">
                            <div class="callout-title">Key Topics</div>
                            <p>In this unit, we will explore:</p>
                            <ul>
                                <li>Kinematics - describing motion</li>
                                <li>Newton's Laws - understanding forces</li>
                                <li>Energy and Work - conservation principles</li>
                            </ul>
                        </div>
                        
                        <p>Classical mechanics remains essential for understanding everything from planetary orbits to engineering applications, despite the development of more modern theories like relativity and quantum mechanics.</p>
                    `
                },
                {
                    id: 'kinematics',
                    title: '1.1 Kinematics',
                    content: `
                        <h1>1.1 Kinematics</h1>
                        <p>Kinematics is the study of motion without considering the forces that cause it. We describe motion using quantities like <span class="key-term">displacement</span>, <span class="key-term">velocity</span>, and <span class="key-term">acceleration</span>.</p>
                        
                        <h2>Position and Displacement</h2>
                        <p>The <strong>position</strong> of an object tells us where it is located in space. <strong>Displacement</strong> is the change in position, a vector quantity with both magnitude and direction.</p>
                        
                        <div class="equation-block">
                            $$\\vec{\\Delta x} = \\vec{x}_f - \\vec{x}_i$$
                        </div>
                        
                        <h2>Velocity</h2>
                        <p>Velocity describes the rate of change of position with respect to time:</p>
                        
                        <div class="equation-block">
                            $$\\vec{v} = \\frac{d\\vec{x}}{dt}$$
                        </div>
                        
                        <p>Average velocity over a time interval is:</p>
                        
                        <div class="equation-block">
                            $$\\vec{v}_{avg} = \\frac{\\Delta \\vec{x}}{\\Delta t}$$
                        </div>
                        
                        <h2>Acceleration</h2>
                        <p>Acceleration is the rate of change of velocity:</p>
                        
                        <div class="equation-block">
                            $$\\vec{a} = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{x}}{dt^2}$$
                        </div>
                        
                        <div class="callout callout-example">
                            <div class="callout-title">Example: Free Fall</div>
                            <p>An object dropped from rest experiences constant acceleration due to gravity:</p>
                            $$g = 9.8 \\, \\text{m/s}^2$$
                            <p>The position as a function of time is:</p>
                            $$y(t) = y_0 - \\frac{1}{2}gt^2$$
                        </div>
                        
                        <h2>Kinematic Equations</h2>
                        <p>For motion with constant acceleration, we have the following useful equations:</p>
                        
                        <div class="equation-block">
                            $$v = v_0 + at$$
                            $$x = x_0 + v_0t + \\frac{1}{2}at^2$$
                            $$v^2 = v_0^2 + 2a(x - x_0)$$
                        </div>
                    `
                },
                {
                    id: 'newtons-laws',
                    title: '1.2 Newton\'s Laws',
                    content: `
                        <h1>1.2 Newton's Laws of Motion</h1>
                        <p>Isaac Newton formulated three fundamental laws that describe the relationship between the motion of an object and the forces acting upon it.</p>
                        
                        <h2>Newton's First Law - Law of Inertia</h2>
                        <div class="callout callout-important">
                            <div class="callout-title">The Law</div>
                            <p>An object at rest stays at rest, and an object in motion stays in motion with constant velocity, unless acted upon by a net external force.</p>
                        </div>
                        
                        <p>This law introduces the concept of <span class="key-term">inertia</span> - the tendency of objects to resist changes in their state of motion. Mass is a measure of an object's inertia.</p>
                        
                        <h2>Newton's Second Law - Force and Acceleration</h2>
                        <p>The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass:</p>
                        
                        <div class="equation-block">
                            $$\\vec{F}_{net} = m\\vec{a}$$
                        </div>
                        
                        <p>This is arguably the most important equation in classical mechanics. It tells us that force causes acceleration, and more massive objects require more force to achieve the same acceleration.</p>
                        
                        <div class="callout callout-example">
                            <div class="callout-title">Example: Pushing a Box</div>
                            <p>A 10 kg box is pushed with a force of 50 N. What is its acceleration?</p>
                            $$a = \\frac{F}{m} = \\frac{50 \\, \\text{N}}{10 \\, \\text{kg}} = 5 \\, \\text{m/s}^2$$
                        </div>
                        
                        <h2>Newton's Third Law - Action and Reaction</h2>
                        <div class="callout callout-important">
                            <div class="callout-title">The Law</div>
                            <p>For every action, there is an equal and opposite reaction.</p>
                        </div>
                        
                        <p>More precisely: If object A exerts a force on object B, then object B exerts an equal and opposite force on object A:</p>
                        
                        <div class="equation-block">
                            $$\\vec{F}_{AB} = -\\vec{F}_{BA}$$
                        </div>
                        
                        <p>These force pairs always act on different objects and never cancel each other out.</p>
                    `
                },
                {
                    id: 'energy-work',
                    title: '1.3 Energy and Work',
                    content: `
                        <h1>1.3 Energy and Work</h1>
                        <p>Energy is one of the most fundamental concepts in physics. It represents the capacity to do work or produce change.</p>
                        
                        <h2>Work</h2>
                        <p>Work is done when a force causes a displacement. It is defined as:</p>
                        
                        <div class="equation-block">
                            $$W = \\vec{F} \\cdot \\vec{d} = Fd\\cos\\theta$$
                        </div>
                        
                        <p>where $\\theta$ is the angle between the force and displacement vectors. Work is a scalar quantity measured in joules (J).</p>
                        
                        <h2>Kinetic Energy</h2>
                        <p><span class="key-term">Kinetic energy</span> is the energy of motion:</p>
                        
                        <div class="equation-block">
                            $$KE = \\frac{1}{2}mv^2$$
                        </div>
                        
                        <p>The work-energy theorem states that the net work done on an object equals the change in its kinetic energy:</p>
                        
                        <div class="equation-block">
                            $$W_{net} = \\Delta KE = KE_f - KE_i$$
                        </div>
                        
                        <h2>Potential Energy</h2>
                        <p><span class="key-term">Potential energy</span> is stored energy due to position or configuration. For gravitational potential energy near Earth's surface:</p>
                        
                        <div class="equation-block">
                            $$PE = mgh$$
                        </div>
                        
                        <h2>Conservation of Energy</h2>
                        <div class="callout callout-important">
                            <div class="callout-title">Fundamental Principle</div>
                            <p>In an isolated system, the total energy remains constant. Energy can be transformed from one form to another, but it cannot be created or destroyed.</p>
                        </div>
                        
                        <div class="equation-block">
                            $$E_{total} = KE + PE = \\text{constant}$$
                        </div>
                        
                        <div class="callout callout-example">
                            <div class="callout-title">Example: Pendulum</div>
                            <p>A pendulum demonstrates energy conservation. At its highest point, it has maximum potential energy and zero kinetic energy. At its lowest point, it has maximum kinetic energy and minimum potential energy. The total energy remains constant throughout the swing.</p>
                        </div>
                    `
                },
                {
                    id: 'mech-summary',
                    title: 'Summary',
                    content: `
                        <h1>Classical Mechanics - Summary</h1>
                        
                        <h2>Key Concepts</h2>
                        
                        <h3>Kinematics</h3>
                        <ul>
                            <li>Position, velocity, and acceleration describe motion</li>
                            <li>Velocity is the rate of change of position: $v = dx/dt$</li>
                            <li>Acceleration is the rate of change of velocity: $a = dv/dt$</li>
                            <li>Kinematic equations apply for constant acceleration</li>
                        </ul>
                        
                        <h3>Newton's Laws</h3>
                        <ul>
                            <li>First Law: Objects maintain their state of motion unless acted upon by a force</li>
                            <li>Second Law: $\\vec{F} = m\\vec{a}$</li>
                            <li>Third Law: Action and reaction forces are equal and opposite</li>
                        </ul>
                        
                        <h3>Energy and Work</h3>
                        <ul>
                            <li>Work: $W = Fd\\cos\\theta$</li>
                            <li>Kinetic Energy: $KE = \\frac{1}{2}mv^2$</li>
                            <li>Gravitational Potential Energy: $PE = mgh$</li>
                            <li>Conservation of Energy: Total energy in an isolated system is constant</li>
                        </ul>
                        
                        <div class="callout callout-info">
                            <div class="callout-title">Important Equations Summary</div>
                            <div class="equation-block">
                                $$v = v_0 + at$$
                                $$x = x_0 + v_0t + \\frac{1}{2}at^2$$
                                $$F = ma$$
                                $$W = Fd\\cos\\theta$$
                                $$KE = \\frac{1}{2}mv^2$$
                                $$PE = mgh$$
                            </div>
                        </div>
                    `
                },
                {
                    id: 'mech-reflection',
                    title: 'Reflection Questions',
                    content: `
                        <h1>Reflection Questions</h1>
                        
                        <div class="reflection-questions">
                            <h3>Critical Thinking</h3>
                            <ol>
                                <li>Explain why astronauts appear weightless in orbit, even though Earth's gravity still acts on them. How does this relate to Newton's laws?</li>
                                <li>A car traveling at constant velocity on a straight highway has zero acceleration. Does this mean no forces act on the car? Explain.</li>
                                <li>Consider a roller coaster. At what points in the ride is kinetic energy maximized? Where is potential energy maximized? How does energy conservation apply?</li>
                                <li>If you push a box across a rough floor and it comes to rest, where did the kinetic energy go? Does this violate conservation of energy?</li>
                                <li>Why is it easier to catch a baseball than a bowling ball moving at the same speed? Relate your answer to Newton's laws and momentum.</li>
                            </ol>
                        </div>
                        
                        <div class="reflection-questions">
                            <h3>Real-World Applications</h3>
                            <ol>
                                <li>How do car airbags reduce injury during collisions? Explain using concepts from this chapter.</li>
                                <li>Why do spacecraft need continuous thrust to travel through space, contradicting Newton's First Law which suggests they should keep moving without force?</li>
                                <li>Describe how energy transformations occur when you bounce a basketball. Why doesn't it return to exactly the same height?</li>
                            </ol>
                        </div>
                    `
                }
            ]
        },
        {
            id: 'electromagnetism',
            title: 'Electromagnetism',
            sections: [
                {
                    id: 'em-intro',
                    title: 'Introduction',
                    content: `
                        <h1>Electromagnetism</h1>
                        <p>Electromagnetism is the study of electric and magnetic fields and their interactions with matter. This fundamental force governs phenomena ranging from the behavior of atoms to the operation of modern electronics.</p>
                        
                        <div class="callout callout-info">
                            <div class="callout-title">Historical Context</div>
                            <p>The unification of electricity and magnetism into a single theory by James Clerk Maxwell in the 19th century was one of the greatest achievements in physics. His equations predicted the existence of electromagnetic waves, including light.</p>
                        </div>
                        
                        <p>In this unit, we'll explore:</p>
                        <ul>
                            <li>Electric fields and forces</li>
                            <li>Magnetic fields and their sources</li>
                            <li>The relationship between electricity and magnetism</li>
                        </ul>
                    `
                },
                {
                    id: 'electric-fields',
                    title: '2.1 Electric Fields',
                    content: `
                        <h1>2.1 Electric Fields</h1>
                        
                        <h2>Electric Charge</h2>
                        <p>Electric charge is a fundamental property of matter. There are two types: positive and negative. Like charges repel, and opposite charges attract.</p>
                        
                        <p>Charge is quantized in units of the elementary charge:</p>
                        <div class="equation-block">
                            $$e = 1.602 \\times 10^{-19} \\, \\text{C}$$
                        </div>
                        
                        <h2>Coulomb's Law</h2>
                        <p>The force between two point charges is given by <span class="key-term">Coulomb's Law</span>:</p>
                        
                        <div class="equation-block">
                            $$F = k\\frac{q_1 q_2}{r^2}$$
                        </div>
                        
                        <p>where $k = 8.99 \\times 10^9 \\, \\text{N⋅m}^2/\\text{C}^2$ is Coulomb's constant, and $r$ is the distance between charges.</p>
                        
                        <h2>The Electric Field</h2>
                        <p>An <span class="key-term">electric field</span> is a region of space where an electric charge experiences a force. It's defined as the force per unit charge:</p>
                        
                        <div class="equation-block">
                            $$\\vec{E} = \\frac{\\vec{F}}{q}$$
                        </div>
                        
                        <p>For a point charge $Q$, the electric field at distance $r$ is:</p>
                        
                        <div class="equation-block">
                            $$E = k\\frac{Q}{r^2}$$
                        </div>
                        
                        <div class="callout callout-example">
                            <div class="callout-title">Example: Field of a Proton</div>
                            <p>Calculate the electric field 1 nm from a proton:</p>
                            $$E = k\\frac{e}{r^2} = (8.99 \\times 10^9) \\frac{1.602 \\times 10^{-19}}{(10^{-9})^2}$$
                            $$E \\approx 1.44 \\times 10^{12} \\, \\text{N/C}$$
                        </div>
                        
                        <h2>Electric Potential</h2>
                        <p>The <span class="key-term">electric potential</span> (voltage) is the electric potential energy per unit charge:</p>
                        
                        <div class="equation-block">
                            $$V = \\frac{U}{q} = k\\frac{Q}{r}$$
                        </div>
                        
                        <p>The electric field and potential are related by:</p>
                        
                        <div class="equation-block">
                            $$\\vec{E} = -\\nabla V$$
                        </div>
                    `
                },
                {
                    id: 'magnetic-fields',
                    title: '2.2 Magnetic Fields',
                    content: `
                        <h1>2.2 Magnetic Fields</h1>
                        
                        <h2>Magnetic Forces</h2>
                        <p>Moving charges create magnetic fields and experience forces in magnetic fields. The <span class="key-term">Lorentz force</span> on a charge $q$ moving with velocity $\\vec{v}$ in a magnetic field $\\vec{B}$ is:</p>
                        
                        <div class="equation-block">
                            $$\\vec{F} = q\\vec{v} \\times \\vec{B}$$
                        </div>
                        
                        <p>The magnitude is:</p>
                        <div class="equation-block">
                            $$F = qvB\\sin\\theta$$
                        </div>
                        
                        <p>where $\\theta$ is the angle between $\\vec{v}$ and $\\vec{B}$.</p>
                        
                        <div class="callout callout-important">
                            <div class="callout-title">Right-Hand Rule</div>
                            <p>To find the direction of the magnetic force:</p>
                            <ol>
                                <li>Point your fingers in the direction of $\\vec{v}$</li>
                                <li>Curl them toward $\\vec{B}$</li>
                                <li>Your thumb points in the direction of $\\vec{F}$ (for positive charges)</li>
                            </ol>
                        </div>
                        
                        <h2>Sources of Magnetic Fields</h2>
                        
                        <h3>Current-Carrying Wire</h3>
                        <p>A long straight wire carrying current $I$ produces a magnetic field:</p>
                        
                        <div class="equation-block">
                            $$B = \\frac{\\mu_0 I}{2\\pi r}$$
                        </div>
                        
                        <p>where $\\mu_0 = 4\\pi \\times 10^{-7} \\, \\text{T⋅m/A}$ is the permeability of free space.</p>
                        
                        <h3>Solenoid</h3>
                        <p>Inside a long solenoid with $n$ turns per unit length:</p>
                        
                        <div class="equation-block">
                            $$B = \\mu_0 n I$$
                        </div>
                        
                        <div class="callout callout-example">
                            <div class="callout-title">Example: Cyclotron Motion</div>
                            <p>A charged particle entering a uniform magnetic field perpendicular to its velocity follows a circular path. The radius of this path is:</p>
                            $$r = \\frac{mv}{qB}$$
                            <p>This principle is used in particle accelerators and mass spectrometers.</p>
                        </div>
                        
                        <h2>Ampère's Law</h2>
                        <p><span class="key-term">Ampère's Law</span> relates the magnetic field around a closed loop to the current passing through it:</p>
                        
                        <div class="equation-block">
                            $$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc}$$
                        </div>
                    `
                },
                {
                    id: 'em-summary',
                    title: 'Summary',
                    content: `
                        <h1>Electromagnetism - Summary</h1>
                        
                        <h2>Electric Fields</h2>
                        <ul>
                            <li>Coulomb's Law: $F = k\\frac{q_1 q_2}{r^2}$</li>
                            <li>Electric field: $\\vec{E} = \\frac{\\vec{F}}{q}$</li>
                            <li>Point charge field: $E = k\\frac{Q}{r^2}$</li>
                            <li>Electric potential: $V = k\\frac{Q}{r}$</li>
                        </ul>
                        
                        <h2>Magnetic Fields</h2>
                        <ul>
                            <li>Lorentz force: $\\vec{F} = q\\vec{v} \\times \\vec{B}$</li>
                            <li>Field from wire: $B = \\frac{\\mu_0 I}{2\\pi r}$</li>
                            <li>Field in solenoid: $B = \\mu_0 n I$</li>
                            <li>Ampère's Law: $\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc}$</li>
                        </ul>
                        
                        <h2>Key Constants</h2>
                        <div class="equation-block">
                            $$k = 8.99 \\times 10^9 \\, \\text{N⋅m}^2/\\text{C}^2$$
                            $$e = 1.602 \\times 10^{-19} \\, \\text{C}$$
                            $$\\mu_0 = 4\\pi \\times 10^{-7} \\, \\text{T⋅m/A}$$
                        </div>
                    `
                },
                {
                    id: 'em-reflection',
                    title: 'Reflection Questions',
                    content: `
                        <h1>Reflection Questions</h1>
                        
                        <div class="reflection-questions">
                            <h3>Conceptual Understanding</h3>
                            <ol>
                                <li>Explain why a stationary charge experiences no magnetic force, even in a strong magnetic field.</li>
                                <li>Compare and contrast electric and gravitational forces. How are they similar? How do they differ?</li>
                                <li>Why does a compass needle align with Earth's magnetic field? What does this tell us about the nature of magnetic fields?</li>
                                <li>A charged particle moves in a circular path in a uniform magnetic field. What happens to the particle's speed? Its kinetic energy? Explain.</li>
                            </ol>
                        </div>
                        
                        <div class="reflection-questions">
                            <h3>Applications</h3>
                            <ol>
                                <li>How do electromagnets work? What advantages do they have over permanent magnets?</li>
                                <li>Describe how a cathode ray tube (CRT) display uses electric and magnetic fields to create images.</li>
                                <li>Research and explain how an MRI machine uses magnetic fields to image the human body.</li>
                            </ol>
                        </div>
                    `
                }
            ]
        }
    ]
};

// ===========================
// Navigation Rendering
// ===========================
function renderNavigation() {
    const nav = document.getElementById('navigation');
    nav.innerHTML = '';
    
    contentData.topics.forEach(topic => {
        const topicDiv = document.createElement('div');
        topicDiv.className = 'topic';
        
        const topicTitle = document.createElement('div');
        topicTitle.className = 'topic-title';
        topicTitle.innerHTML = `
            ${topic.title}
            <span class="arrow">▼</span>
        `;
        topicTitle.onclick = () => toggleTopic(topicDiv);
        
        const sectionsDiv = document.createElement('div');
        sectionsDiv.className = 'topic-sections';
        
        topic.sections.forEach(section => {
            const link = document.createElement('a');
            link.href = `#${section.id}`;
            link.className = 'section-link';
            link.textContent = section.title;
            link.onclick = (e) => {
                e.preventDefault();
                loadContent(section.id);
                setActiveLink(link);
            };
            sectionsDiv.appendChild(link);
        });
        
        topicDiv.appendChild(topicTitle);
        topicDiv.appendChild(sectionsDiv);
        nav.appendChild(topicDiv);
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
    const content = findSection(sectionId);
    if (content) {
        const contentArea = document.getElementById('content');
        contentArea.innerHTML = content.content;
        
        // Update URL hash
        window.location.hash = sectionId;
        
        // Scroll to top
        document.querySelector('.content-area').scrollTop = 0;
        
        // Trigger MathJax to re-render equations
        if (window.MathJax) {
            MathJax.typesetPromise();
        }
    }
}

function findSection(sectionId) {
    for (const topic of contentData.topics) {
        const section = topic.sections.find(s => s.id === sectionId);
        if (section) return section;
    }
    return null;
}

// ===========================
// Initialization
// ===========================
function init() {
    renderNavigation();
    
    // Load content from URL hash if present
    const hash = window.location.hash.substring(1);
    if (hash) {
        loadContent(hash);
        const link = document.querySelector(`a[href="#${hash}"]`);
        if (link) setActiveLink(link);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
// Add conceptual questions to kinematics section
const kinematicsSection = contentData.topics[0].sections.find(s => s.id === 'kinematics');
kinematicsSection.conceptualQuestions = [
    {
        text: "Why do we need the concept of speed? Where does it come from?",
        hint: "Think about what question speed answers. How else could you describe an object's motion?"
    },
    {
        text: "What's the difference between speed and velocity? Why does direction matter?",
        hint: "Consider two cars traveling at 60 mph - one north, one south. Are they moving the same way?"
    },
    {
        text: "Why is acceleration the 'rate of change of velocity'? What does this mean intuitively?",
        hint: "Think about what changes when you press the gas pedal or brake pedal in a car."
    },
    {
        text: "If I drop two objects simultaneously from the same height, why do they hit the ground at the same time regardless of mass (ignoring air resistance)?",
        hint: "Consider Newton's second law and how gravity affects different masses."
    }
];

// Add to Newton's Laws
const newtonsSection = contentData.topics[0].sections.find(s => s.id === 'newtons-laws');
newtonsSection.conceptualQuestions = [
    {
        text: "What does it really mean that 'an object in motion stays in motion'? Why doesn't everything around us just keep moving forever?",
        hint: "Consider what forces act on everyday objects like a rolling ball or a moving car."
    },
    {
        text: "If F=ma, why does a heavy box feel harder to push than a light box?",
        hint: "To achieve the same acceleration, what must change in the equation?"
    },
    {
        text: "When you push on a wall, the wall pushes back with equal force (Newton's 3rd law). So why don't you move?",
        hint: "Consider what other forces are acting on you, like friction with the ground."
    },
    {
        text: "Why can a rocket work in space where there's nothing to 'push against'?",
        hint: "Think about action-reaction pairs. What is the rocket pushing?"
    }
];

// Add to Energy and Work
const energySection = contentData.topics[0].sections.find(s => s.id === 'energy-work');
energySection.conceptualQuestions = [
    {
        text: "What IS energy? Why is it useful to have this concept?",
        hint: "Think about what's conserved when a ball bounces, when you climb stairs, or when a car brakes."
    },
    {
        text: "Why do we say energy is 'conserved' when a bouncing ball clearly loses energy and stops bouncing?",
        hint: "Where does the energy go? Is it destroyed or transformed?"
    },
    {
        text: "How can potential energy exist 'in' an object? Is it really stored there?",
        hint: "Consider the relationship between the object and Earth. Could potential energy exist for a single object alone in space?"
    }
];

//Add to Electric Fields
const electricSection = contentData.topics[1].sections.find(s => s.id === 'electric-fields');
electricSection.conceptualQuestions = [
    {
        text: "What IS an electric field? Is it real or just a mathematical tool?",
        hint: "Think about the space around a charge. How does another charge 'know' to experience a force?"
    },
    {
        text: "Why do we use the concept of 'field' at all? Why not just talk about forces between charges?",
        hint: "Consider situations with many charges, or when we don't know all the charges present."
    },
    {
        text: "What does it mean that electric field points 'away from' positive charges  and 'toward' negative charges?",
        hint: "Think about what would happen to a positive test charge placed in the field."
    }
];

// Function to render questions
function renderQuestions(sectionId) {
    const section = findSection(sectionId);
    const questionsPanel = document.getElementById('questions');
    
    if (!section || !section.conceptualQuestions || section.conceptualQuestions.length === 0) {
        questionsPanel.innerHTML = '<p class="questions-placeholder">No conceptual questions for this section yet.</p>';
        return;
    }
    
    let html = '';
    section.conceptualQuestions.forEach((q, index) => {
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

// Update loadContent to also load questions
const originalLoadContent = loadContent;
loadContent = function(sectionId) {
    originalLoadContent(sectionId);
    renderQuestions(sectionId);
};

// ===========================
// Questions Panel Toggle
// ===========================
// Update the questions panel toggle to handle close button
function initQuestionsPanel() {
    const panel = document.getElementById('questions-panel');
    const header = panel.querySelector('.questions-header');
    
    // Toggle panel on click
    panel.addEventListener('click', function(e) {
        // If clicking on the close button (::before element) when expanded, close it
        // Check if click is in the close button area (top right)
        if (panel.classList.contains('expanded')) {
            const rect = header.getBoundingClientRect();
            const clickX = e.clientX;
            const clickY = e.clientY;
            
            // Close button is in top right area
            const isCloseButton = clickX > rect.right - 60 && 
                                 clickY < rect.top + 60;
            
            if (isCloseButton || e.target.closest('.questions-header')) {
                panel.classList.remove('expanded');
                return;
            }
        } else {
            // If collapsed, expand on click
            panel.classList.add('expanded');
        }
    });
    
    // Prevent clicks inside questions content from toggling
    const questionsContent = document.getElementById('questions');
    questionsContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// Initialize panel toggle on load
document.addEventListener('DOMContentLoaded', function() {
    initQuestionsPanel();
});

// If DOM already loaded, init now
if (document.readyState !== 'loading') {
    initQuestionsPanel();
}

// ===========================
// Equation Derivations System
// ===========================

const equationDerivations = {
    'velocity': {
        title: 'Velocity Derivation',
        content: `
            <p>Velocity is defined as the rate of change of position with respect to time.</p>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 1: Starting Point</div>
                <p>Consider an object moving from position $\\vec{x}_i$ to position $\\vec{x}_f$ over a time interval $\\Delta t$.</p>
            </div>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 2: Define Displacement</div>
                <p>The displacement is the change in position:</p>
                <div class="equation-block">$$\\Delta \\vec{x} = \\vec{x}_f - \\vec{x}_i$$</div>
            </div>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 3: Average Velocity</div>
                <p>Average velocity is displacement divided by time interval:</p>
                <div class="equation-block">$$\\vec{v}_{avg} = \\frac{\\Delta \\vec{x}}{\\Delta t}$$</div>
            </div>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 4: Instantaneous Velocity</div>
                <p>Taking the limit as $\\Delta t \\to 0$ gives instantaneous velocity:</p>
                <div class="equation-block">$$\\vec{v} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta \\vec{x}}{\\Delta t} = \\frac{d\\vec{x}}{dt}$$</div>
            </div>
        `
    },
    'acceleration': {
        title: 'Acceleration Derivation',
        content: `
            <p>Acceleration is the rate of change of velocity with respect to time.</p>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 1: Velocity Change</div>
                <p>Consider velocity changing from $\\vec{v}_i$ to $\\vec{v}_f$ over time $\\Delta t$:</p>
                <div class="equation-block">$$\\Delta \\vec{v} = \\vec{v}_f - \\vec{v}_i$$</div>
            </div>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 2: Average Acceleration</div>
                <p>Average acceleration is the change in velocity divided by time:</p>
                <div class="equation-block">$$\\vec{a}_{avg} = \\frac{\\Delta \\vec{v}}{\\Delta t}$$</div>
            </div>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 3: Instantaneous Acceleration</div>
                <p>Taking the limit gives instantaneous acceleration:</p>
                <div class="equation-block">$$\\vec{a} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta \\vec{v}}{\\Delta t} = \\frac{d\\vec{v}}{dt}$$</div>
            </div>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 4: Second Derivative</div>
                <p>Since $\\vec{v} = d\\vec{x}/dt$, we can write:</p>
                <div class="equation-block">$$\\vec{a} = \\frac{d\\vec{v}}{dt} = \\frac{d}{dt}\\left(\\frac{d\\vec{x}}{dt}\\right) = \\frac{d^2\\vec{x}}{dt^2}$$</div>
            </div>
        `
    },
    'newton2': {
        title: "Newton's Second Law",
        content: `
            <p>This law connects force, mass, and acceleration.</p>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 1: Momentum</div>
                <p>Define momentum as mass times velocity:</p>
                <div class="equation-block">$$\\vec{p} = m\\vec{v}$$</div>
            </div>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 2: Rate of Change</div>
                <p>Newton discovered that force is the rate of change of momentum:</p>
                <div class="equation-block">$$\\vec{F} = \\frac{d\\vec{p}}{dt}$$</div>
            </div>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 3: Constant Mass</div>
                <p>For constant mass, we can factor it out:</p>
                <div class="equation-block">$$\\vec{F} = \\frac{d(m\\vec{v})}{dt} = m\\frac{d\\vec{v}}{dt}$$</div>
            </div>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 4: Final Form</div>
                <p>Since $d\\vec{v}/dt = \\vec{a}$, we get:</p>
                <div class="equation-block">$$\\vec{F}_{net} = m\\vec{a}$$</div>
            </div>
        `
    },
    'kinetic-energy': {
        title: 'Kinetic Energy Derivation',
        content: `
            <p>Deriving the expression for kinetic energy using work and Newton's Second Law.</p>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 1: Work-Energy Relationship</div>
                <p>Start with work done by a force:</p>
                <div class="equation-block">$$W = \\int \\vec{F} \\cdot d\\vec{x}$$</div>
            </div>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 2: Apply Newton's Second Law</div>
                <p>Substitute $\\vec{F} = m\\vec{a}$:</p>
                <div class="equation-block">$$W = \\int m\\vec{a} \\cdot d\\vec{x} = m\\int \\frac{d\\vec{v}}{dt} \\cdot d\\vec{x}$$</div>
            </div>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 3: Change of Variables</div>
                <p>Use $d\\vec{x} = \\vec{v}dt$:</p>
                <div class="equation-block">$$W = m\\int \\frac{d\\vec{v}}{dt} \\cdot \\vec{v}dt = m\\int \\vec{v} \\cdot d\\vec{v}$$</div>
            </div>
            
            <div class="derivation-step">
                <div class="derivation-step-title">Step 4: Integrate</div>
                <p>For one dimension:</p>
                <div class="equation-block">$$W = m\\int_{v_i}^{v_f} v\\,dv = m\\left[\\frac{v^2}{2}\\right]_{v_i}^{v_f} = \\frac{1}{2}mv_f^2 - \\frac{1}{2}mv_i^2$$</div>
                <p>We define kinetic energy as $KE = \\frac{1}{2}mv^2$</p>
            </div>
        `
    }
};

function openDerivationModal(derivationType) {
    const modal = document.getElementById('derivation-modal');
    const body = document.getElementById('derivation-body');
    
    const derivation = equationDerivations[derivationType];
    if (!derivation) {
        body.innerHTML = '<p>Derivation not available for this equation yet.</p>';
    } else {
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

// Close modal when clicking outside content
document.addEventListener('click', function(e) {
    const modal = document.getElementById('derivation-modal');
    if (e.target === modal) {
        closeDerivationModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeDerivationModal();
    }
});

// Make equation blocks clickable - add after DOM loads
document.addEventListener('DOMContentLoaded', function() {
    addEquationClickHandlers();
});

function addEquationClickHandlers() {
    // This will be called after content loads
    setTimeout(() => {
        const equationBlocks = document.querySelectorAll('.equation-block');
        equationBlocks.forEach(block => {
            // Determine equation type from content
            const content = block.textContent;
            let derivationType = null;
            
            if (content.includes('\\vec{v}') && content.includes('d\\vec{x}') && content.includes('dt')) {
                derivationType = 'velocity';
            } else if (content.includes('\\vec{a}') && content.includes('d\\vec{v}')) {
                derivationType = 'acceleration';
            } else if (content.includes('F_{net}') && content.includes('m\\vec{a}')) {
                derivationType = 'newton2';
            } else if (content.includes('KE') || (content.includes('\\frac{1}{2}mv^2'))) {
                derivationType = 'kinetic-energy';
            }
            
            if (derivationType) {
                block.style.cursor = 'pointer';
                block.setAttribute('data-derivation', derivationType);
                block.addEventListener('click', function(e) {
                    e.stopPropagation();
                    openDerivationModal(derivationType);
                });
                
                // Add tooltip
                block.title = 'Click to see derivation';
            }
        });
    }, 500);
}

// Re-add handlers when content changes
const originalLoadContent2 = loadContent;
loadContent = function(sectionId) {
    originalLoadContent2(sectionId);
    setTimeout(addEquationClickHandlers, 600);
};
