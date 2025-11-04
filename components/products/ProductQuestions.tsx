'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface ProductQuestionsProps {
  productId: string;
}

export const ProductQuestions: React.FC<ProductQuestionsProps> = ({ productId }) => {
  const [questions, setQuestions] = useState<
    Array<{ id: string; question: string; answer?: string; askedAt: string }>
  >([]);
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit question to API
    setShowForm(false);
    setQuestion('');
  };

  return (
    <section id="questions" className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-neutral-900 mb-2">Questions & Answers</h2>
          <p className="text-neutral-600">Get answers to your product questions</p>
        </div>
        <Button 
          onClick={() => setShowForm(true)} 
          variant="outline"
          className="self-start sm:self-auto whitespace-nowrap px-6 py-3 font-semibold"
        >
          Ask a Question
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-neutral-50 rounded-2xl p-6 space-y-4">
          <Input
            label="Your Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            placeholder="Ask a question about this product..."
          />
          <div className="flex gap-4">
            <Button type="submit" variant="primary">
              Submit Question
            </Button>
            <Button type="button" variant="ghost" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
          </div>
        </form>
      )}

      {questions.length === 0 ? (
        <div className="bg-white border border-neutral-200 rounded-2xl p-12 text-center">
          <svg className="w-16 h-16 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg font-medium text-neutral-900 mb-2">No questions yet</p>
          <p className="text-neutral-600">Be the first to ask!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="bg-neutral-50 rounded-2xl p-6 space-y-3">
              <div>
                <h4 className="font-medium mb-2">Q: {q.question}</h4>
                {q.answer && <p className="text-neutral-600">A: {q.answer}</p>}
              </div>
              <p className="text-xs text-neutral-500">{new Date(q.askedAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

