'use client';

import Output from './components/Output';
import RadioButtonGroup from './components/RadioButtonGroup';
import { useState } from 'react'

const HomePage = () => {
  const [formData, setFormData] = useState({
    contentType: '',
    prompt: ''
  });

  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const radioButtonOptions = [
    {
      id: 'text',
      value: 'text',
      label: 'Text'
    },
    {
      id: 'images',
      value: 'images',
      label: 'Images'
    },
  ];

  const handleChange = (e) => {
    setResults(null);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResults(null);
    setLoading(true);

    const res = await fetch(`http://localhost:3000/api/${formData.contentType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    setResults(await res.json());
    setLoading(false);
  };

  return (
    <div className='space-y-5'>
      <h1>AI Content Generator</h1>
      <div className='flex justify-between gap-10 min-h-screen'>
        <section className='w-1/3'>
          <form onSubmit={handleSubmit}>
            <div className='form-input'>
              <label>Select a content type:</label>
              <RadioButtonGroup
                options={radioButtonOptions}
                onChange={handleChange}
                selectedOption={formData.contentType}
              />
            </div>
            <div className="form-input">
              <label htmlFor='prompt'>What do you want to create?</label>
              <textarea
                id='prompt'
                name='prompt'
                placeholder='Enter a brief description...'
                value={formData.prompt}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type='submit' className='btn' disabled={loading}>Generate</button>
          </form>
        </section>

        <section className='w-2/3'>
          <Output
            contentType={formData.contentType}
            results={results}
            loading={loading}
          />
        </section>
      </div>
    </div>
  )
}

export default HomePage