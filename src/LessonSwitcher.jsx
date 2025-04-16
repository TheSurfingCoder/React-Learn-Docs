// src/LessonSwitcher.jsx
import { useState } from 'react';
import Lesson01 from './lessons/Lesson01.jsx';
import Lesson02 from './lessons/Lesson02.jsx';
import Lesson03 from './lessons/Lesson03.jsx';
// ⬆️ Keep importing lessons as you add them

const lessons = {
    Lesson01: <Lesson01 />,
    Lesson02: <Lesson02 />,
    Lesson03: <Lesson03 />
};

function LessonSwitcher() {
    const [selected, setSelected] = useState('Lesson01');

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <label>
                Choose a lesson:
                <select value={selected} onChange={(e) => setSelected(e.target.value)}>
                    {Object.keys(lessons).map((key) => (
                        <option key={key} value={key}>{key}</option>
                    ))}
                </select>
            </label>

            <div style={{ marginTop: '2rem' }}>
                {lessons[selected]}
            </div>
        </div>
    );
}

export default LessonSwitcher;
