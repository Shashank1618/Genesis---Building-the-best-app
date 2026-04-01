import React, { useState, useEffect } from 'react';

const questions = [
  { id: 'app_description', label: '1. What is your idea?', placeholder: 'Describe the core concept of your application...', type: 'textarea' },
  { id: 'target_user', label: '2. Who is the target user?', placeholder: 'Founders, students, enterprise teams...', type: 'text' },
  { id: 'problem', label: '3. What problem does it solve?', placeholder: 'Specify the pain point you are addressing...', type: 'textarea' },
  { id: 'features', label: '4. Key features?', placeholder: 'List main features separated by commas...', type: 'text' },
  {
    id: 'tech_stack',
    label: '5. Technical stack?',
    type: 'select',
    options: ['React + Vite', 'Next.js (App Router)', 'Vue + Nuxt', 'SvelteKit', 'Vanilla JS', 'Python (FastAPI/Flask)']
  },
  { id: 'constraints', label: '6. Any constraints?', placeholder: 'e.g. No backend, 2-day deadline...', type: 'text' },
  {
    id: 'user_level',
    label: '7. Your skill level?',
    type: 'select',
    options: ['Beginner (Direct guidance)', 'Intermediate (Best practices)', 'Senior (Architecture-first)']
  },
  {
    id: 'output_type',
    label: '8. Output type?',
    type: 'select',
    options: ['Full Application', 'Landing Page', 'Dashboard / UI Kit', 'API / Backend Logic', 'Component Library']
  },
  {
    id: 'build_style',
    label: '9. Build style?',
    type: 'select',
    options: ['Modular (Scalable)', 'Monolithic (Simple)', 'Microservices', 'Experimental / MVP']
  },
  {
    id: 'design_style',
    label: '10. Design style?',
    type: 'select',
    options: ['Minimal / Editorial', 'SaaS / Clean', 'Dark Mode / Premium', 'Corporate / Professional']
  },
  {
    id: 'animation_level',
    label: '11. Animation level?',
    type: 'select',
    options: ['None', 'Subtle (Transitions)', 'Interactive (Micro-anim)', 'High Fidelity (Flashy)']
  },
];

const Builder = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isFinishing, setIsFinishing] = useState(false);

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinishing(true);
      setTimeout(() => onComplete(formData), 800);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [questions[currentStep].id]: e.target.value });
  };

  const handleSelect = (option) => {
    setFormData({ ...formData, [questions[currentStep].id]: option });
    // Auto-advance for selects after a small delay
    setTimeout(() => handleNext(), 400);
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className={`builder container ${isFinishing ? 'fade-out' : ''}`}>
      <div className="builder-header">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="step-count">{currentStep + 1} / {questions.length}</span>
      </div>

      <div className="question-wrapper slide-up" key={currentStep}>
        <label className="question-label">{currentQuestion.label}</label>
        {currentQuestion.type === 'textarea' ? (
          <textarea
            className="builder-input"
            placeholder={currentQuestion.placeholder}
            value={formData[currentQuestion.id] || ''}
            onChange={handleChange}
            autoFocus
          />
        ) : currentQuestion.type === 'select' ? (
          <div className="options-grid">
            {currentQuestion.options.map(option => (
              <button
                key={option}
                className={`option-card ${formData[currentQuestion.id] === option ? 'selected' : ''}`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <input
            type="text"
            className="builder-input"
            placeholder={currentQuestion.placeholder}
            value={formData[currentQuestion.id] || ''}
            onChange={handleChange}
            autoFocus
          />
        )}
      </div>

      <div className="builder-footer slide-up stagger-1">
        {currentStep > 0 && (
          <button className="btn-secondary" onClick={handlePrev}>Back</button>
        )}
        {currentQuestion.type !== 'select' && (
          <button className="btn-primary" onClick={handleNext}>
            {currentStep === questions.length - 1 ? 'Generate Prompt' : 'Next'}
          </button>
        )}
      </div>

      <style jsx="true">{`
        .builder {
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: var(--spacing-xl);
          transition: var(--transition-smooth);
        }
        .builder-header {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: var(--spacing-xl);
        }
        .progress-bar {
          flex: 1;
          height: 2px;
          background: #f0f0f0;
          position: relative;
        }
        .progress-fill {
          height: 100%;
          background: var(--black);
          transition: width 0.5s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .step-count {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--gray-medium);
        }
        .question-label {
          display: block;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          margin-bottom: var(--spacing-lg);
          line-height: 1.1;
        }
        .builder-input {
          width: 100%;
          border: none;
          border-bottom: 2px solid #eee;
          padding: 1rem 0;
          font-size: 1.5rem;
          font-family: inherit;
          background: transparent;
          outline: none;
          transition: var(--transition-smooth);
          color: var(--black);
        }
        .builder-input:focus {
          border-color: var(--black);
        }
        textarea.builder-input {
          min-height: 100px;
          resize: none;
        }
        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .option-card {
          padding: 1.5rem;
          border: 1px solid #eee;
          text-align: left;
          font-size: 1.1rem;
          font-weight: 500;
          transition: var(--transition-smooth);
          background: var(--white);
          border-radius: 4px;
        }
        .option-card:hover {
          border-color: var(--black);
          background: #fafafa;
        }
        .option-card.selected {
          border-color: var(--black);
          background: var(--black);
          color: var(--white);
        }
        .builder-footer {
          margin-top: var(--spacing-xl);
          display: flex;
          gap: 2rem;
        }
        .btn-primary {
          background: var(--black);
          color: var(--white);
          padding: 1.25rem 3.5rem;
          font-weight: 600;
          font-size: 1rem;
        }
        .btn-secondary {
          color: var(--gray-medium);
          font-weight: 600;
          font-size: 1rem;
        }
        .fade-out {
          opacity: 0;
          transform: translateY(-20px);
        }

        @media (max-width: 768px) {
          .builder {
            padding-top: var(--spacing-lg);
          }
          .question-label {
            font-size: 2rem;
          }
          .builder-input {
            font-size: 1.2rem;
          }
          .options-grid {
            grid-template-columns: 1fr;
          }
          .builder-footer {
            flex-direction: column;
          }
          .btn-primary { width: 100%; text-align: center; }
        }
      `}</style>
    </div>
  );
};

export default Builder;
