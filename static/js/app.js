import { CostumeForm } from './CostumeForm.js';
import { MaskForm } from './MaskForm.js';
import { ScenographyForm } from './ScenographyForm.js';

export function App() {
    const container = document.createElement('div');

    const steps = document.createElement('div');
    steps.appendChild(CostumeForm());
    steps.appendChild(MaskForm());
    steps.appendChild(ScenographyForm());

    container.appendChild(steps);
    return container;
}

